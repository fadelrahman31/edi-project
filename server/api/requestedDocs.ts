import {RequestedDocs} from "../entity/RequestedDocs";

import {onDatabaseConnected} from "../db";
import {Connection} from "typeorm";
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

        const createdDocs = await connection.manager.save(dokumen);
        res.send(createdDocs);

    });
});
    

export default router;


