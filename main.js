const puppeteer = require('puppeteer');
const ExcelJS = require('exceljs')

const workbook = new ExcelJS.Workbook()
const sheet = workbook.addWorksheet('Firts Pag')

const myDatasTrated = () => {
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
            console.log(nodeLIstTHITEM0, nodeListTRTBOdyTable)
            return myDatasTrated
        })

        for (let index = 0; index < myDatasTrated[0].length; index++) {
            const ArrayselectedTH = myDatasTrated[0]
            const curtingArray = ArrayselectedTH[index].textContent
            sheet.columns = [
                { header: `${curtingArray}`, hey: `${index}Colum` },
            ]
        }
        for (let index2 = 0; index2 < myDatasTrated[1].length; index2++) {
            const ArrayselectedTR = myDatasTrated[1]
            const curtingArray = ArrayselectedTH[index2].textContent
            sheet.addRow({
                nome
            })
        }

        //  await browser.close()
    })()
}

myDatasTrated()

module.exports = myDatasTrated