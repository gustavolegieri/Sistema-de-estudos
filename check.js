const puppeteer = require('puppeteer');
(async()=>{
  try{
    const browser = await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000',{waitUntil:'networkidle0',timeout:10000});
    const html = await page.content();
    console.log('HTML length',html.length);
    await page.screenshot({path:'screenshot.png'});
    await browser.close();
  }catch(e){console.error('error',e);process.exit(1);}  
})();
