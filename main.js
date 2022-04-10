const puppeteer = require('puppeteer');
const ExcelJS = require('exceljs')

const workbook = new ExcelJS.Workbook()
const sheet = workbook.addWorksheet('Firts Pag')

const myDatasTrated =  () => {
    (async () => { 
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/Road_safety_in_Europe');

    const myDatasTrated = await page.evaluate(() => {
        const nodeListTH = [document.getElementsByClassName("headerSort")]
        const nodeLIstTHITEM0 = nodeListTH[0]


        const nodeListTR = [document.querySelectorAll("tbody")]
        const nodeListTRTable = nodeListTR[0]
        const nodeListTRTBOdyTable = nodeListTRTable[1]

        const myDatasTrated = [nodeLIstTHITEM0, nodeListTRTBOdyTable]
        return myDatasTrated
    })

    for (let index = 0; index <  myDatasTrated ; index++) {
        
         sheet.columns = [
       // {header: `${}`, hey: '1Colum'},
        //{header: `${}`, hey: '1Colum'}
        
    ]
    }
   
    
    //  await browser.close()
})()}

myDatasTrated()

module.exports = myDatasTrated