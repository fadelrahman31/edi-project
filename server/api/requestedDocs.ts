import {RequestedDocs, Approval} from "../entity/RequestedDocs";

import {onDatabaseConnected} from "../db";
import {Connection, DeleteResult, Not} from "typeorm";
import { async } from "q";
const router = require('express').Router();

interface RequestBody {
    namaMhs : string;
    nim : number;
    alamatMhs : string;
    emailMhs : string;
    jurusanMhs : string;
    keperluanMhs : string;
    ketKeperluan : string;
}

onDatabaseConnected((connection: Connection) => {
    router.get("/", async function (req, res) {
        const list = connection.getRepository(RequestedDocs);
        const requestedList : RequestedDocs[] = await list.find();
        res.send(requestedList);
    });

    router.get("/:nim", async function (req,res){
        const nim = req.params.nim;
        const list = connection.getRepository(RequestedDocs);
        const queryResults = await list.find({ nim });
        res.send(queryResults);
    })

    router.post("/", async function (req,res, next)  {
        //TODO insert record ke database
        let dokumen = new RequestedDocs();
        const docsBody = req.body as RequestBody;

        dokumen.namaMhs = docsBody.namaMhs;
        dokumen.nim = docsBody.nim;
        dokumen.alamatMhs = docsBody.alamatMhs;
        dokumen.emailMhs = docsBody.emailMhs;
        dokumen.jurusanMhs = docsBody.jurusanMhs;
        dokumen.keperluanMhs = docsBody.keperluanMhs;
        dokumen.ketKeperluan = docsBody.ketKeperluan;
        dokumen.status = "on-going";
        dokumen.approval = Approval.BELUM;

        const createdDocs = await connection.manager.save(dokumen);
        res.send(createdDocs);

    });

    router.delete("/:idDocs", async function(req, res, next){
        const list = connection.getRepository(RequestedDocs);
        let deleteDocs = await list.delete(req.params.idDocs);

        if(deleteDocs.affected > 0){
            res.send({success: true});
        } else {
            res.status(404);
            res.send({error: "Dokumen dengan ID tidak dapat ditemukan"});
        }
    })

    router.get("/pendingApproval", async function (req, res) {
        const list = connection.getRepository(RequestedDocs);
        const requestedList : RequestedDocs[] = await list.find({"approval":Approval.BELUM});
        res.send(requestedList);
    });

    router.post("/:idDocs/approve", async function(req, res, next){
        const list = connection.getRepository(RequestedDocs);
        const docsToUpdate : RequestedDocs = await list.findOne({"idDocs":req.params.idDocs});
        if (!docsToUpdate) {
            res.status(404);
            res.send({error: "Mohon maaf dokumen tidak ditemukan :("});
            return;
          }
        docsToUpdate.approval = Approval.ACCEPT;
        const editedDocs = await connection.manager.save(docsToUpdate);
        res.send({success: true});
    })

    router.post("/:idDocs/reject", async function(req, res, next){
        const list = connection.getRepository(RequestedDocs);
        const docsToUpdate : RequestedDocs = await list.findOne({"idDocs":req.params.idDocs, "approval":Not(Approval.ACCEPT)});
        if (!docsToUpdate) {
            res.status(404);
            res.send({error: "Mohon maaf dokumen tidak ditemukan :("});
            return;
          }
        docsToUpdate.approval = Approval.REJECT;
        const editedDocs = await connection.manager.save(docsToUpdate);
        res.send({success: true});
    })

});


export default router;


