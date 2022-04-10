const puppeteer = require('puppeteer');
const fs = require('fs')

(async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Road_safety_in_Europe');

 const myDatasTrated = await page.evaluate(()=>{
      const nodeListTH = [document.getElementsByClassName("headerSort")]
      const nodeLIstTHITEM0 = nodeListTH[0]
     

      const nodeListTR = [document.querySelectorAll("tbody")]
      const nodeListTRTable = nodeListTR[0]
      const nodeListTRTBOdyTable = nodeListTRTable[1]

      const myDatasTrated = [nodeLIstTHITEM0, nodeListTRTBOdyTable]
    console.log(nodeLIstTHITEM0  )
    console.log(nodeListTRTBOdyTable)
    return myDatasTrated 
    })
    let writeStream = fs.createWriteStream("Report.xls");



    await browser.close( )
})();