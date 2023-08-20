const express = require('express');
const XLSX = require('xlsx');
const app = express();
const port = 3000;

app.get('/excel.xlsx', (req, res) => {
  const workbook = XLSX.readFile('./excel.xlsx');
  const sheetName = workbook.SheetNames[0];
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[qr]);

  res.json(sheetData);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
