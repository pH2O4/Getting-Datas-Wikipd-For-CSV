const puppeteer = require('puppeteer');
const ExcelJS = require('exceljs')
        const workbook = new ExcelJS.Workbook()
        const sheet = workbook.addWorksheet('Firts Pag')
const myDatasTrated = () => {
    
    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://en.wikipedia.org/wiki/Road_safety_in_Europe');

        const myDatasTrated =  page.evaluate(() => {
            const nodeListTH = [document.getElementsByClassName("headerSort")]
            const nodeLIstTHITEM0 = nodeListTH[0]


            const nodeListTR =  [document.querySelectorAll("tbody")]
            const nodeListTRTable =  nodeListTR[0]
            const nodeListTRTBOdyTable = [nodeListTRTable[1]]
            const ListingTR =  nodeListTRTBOdyTable[0].children

            const myDatasTrated = [nodeLIstTHITEM0, ListingTR]
            console.log(nodeLIstTHITEM0.item(0), ListingTR.item(0))
            return myDatasTrated
        })


        try {
          for (var index = 0; index < myDatasTrated[0].length; index++) {
            const ArrayselectedTH = myDatasTrated[0]
            const curtingArrayTH = ArrayselectedTH[index]
            sheet.columns = [{ header:`${curtingArrayTH}`, key: `${index}` }]
        }
        for (let index2 = 0; index2 < myDatasTrated[1].length; index2++) {
            const ArrayselectedTR = myDatasTrated[1]
            const curtingArrayTR = ArrayselectedTR[index2]
            sheet.addRow({
                index: curtingArrayTR
            })
        }  
        } catch (error) {
            console.log('asa')
        }
        


        sheet.workbook.xlsx.writeFile('VAI DAR .xlsx')

       //  await browser.close()
    })()
}

myDatasTrated()

