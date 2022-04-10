const ExcelJS = require('exceljs')
const  myDatasTrated = require('./main')

const workbook = new ExcelJS.Workbook()
const sheet = workbook.addWorksheet('Firts Pag')


console.log(myDatasTrated())
const ColumnsDtas = myDatasTrated[0]
console.log(ColumnsDtas)
sheet.columns = [

]