const router = require('express').Router();
const PDFDocument = require('pdfkit');

router.get("/download/:id", async (req, res) => {
  const doc = new PDFDocument();
  const filename = "export.pdf";

  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');
  doc.y = 300;
  doc.text("Hello world!", 50, 50);
  doc.pipe(res);
  doc.end();
});

export default router;
