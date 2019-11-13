import {IssuedDocument} from "../entity/IssuedDocument";

import {onDatabaseConnected} from "../db";
import {Connection} from "typeorm";

const router = require('express').Router();
const PDFDocument = require('pdfkit');

onDatabaseConnected((connection: Connection) => {
  router.get("/issued", async (req, res) => {
    const repository = connection.getRepository(IssuedDocument);

    const issuedDocuments = await repository.find({
      // TODO nim
    });

    res.send(issuedDocuments);
  });

  router.get("/download/:id", async (req, res) => {
    const repository = connection.getRepository(IssuedDocument);

    const issuedDocument = await repository.findOne({
      uuid: req.params.id,
      // TODO nim
    });

    if (!issuedDocument) {
      res.status(404);
      res.send({error: "Not found"});
      return;
    }

    const doc = new PDFDocument();
    const filename = `${encodeURIComponent(issuedDocument.title)}.pdf`;

    res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');
    doc.y = 300;
    doc.text("Untuk NIM " + issuedDocument.nim, 50, 50);
    doc.text(issuedDocument.title, 50, 65);
    doc.text(issuedDocument.type, 50, 80);
    doc.pipe(res);
    doc.end();
  });
});

export default router;
