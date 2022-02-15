export const  sampleFunctionCreateTask = `async function task({browser}){
  const page = await browser.newPage();
  await page.setViewport({
    width: 1902,
    height: 1080,
    deviceScaleFactor: 1,
  });
  let url = "http://www.yuanyang.gov.cn/channels/443.html"
  await page.goto(url);
  let selector = ".neirong table";
  await page.waitForSelector(selector);
  let matchedElement = await page.$(selector);
  let textContent = await matchedElement.evaluate((node) => node.textContent);
  // to do something else, like post this textContent to another URL ? ...` + '\n' +
'\
}' + '\n' + '\
export { task }';

export const  sampleFunctionCreateEraser = `
// selectorArr / mode used after puppeteer open one page ready, to remove some DOM elements
const selectorArr = ['#List > div','#Copyright', 'body > div > div.qq_content.cf.slide-wrap'];
const mode = 'html'; // html / text / both. if empty,  is both

// URL matcher, if empty, this file won't have any effect
const urlRegExpArr = ['news.qq.com'];

// func used after puppeteer process closed, to erase / replace some result contents
function exec(result) {
  // erase 227万次播放
  result = result.replace(/\ \d+万?次播放\ /g, ' ');
  // console.log('step 1', result);
  // erase 转评赞
  result = result.replace(/\ (((\d+\.+\d|\d+)万?)\ ){3}/g, ' ');
  // erase 昨天 19:12 昨天 3:00
  result = result.replace(/\ 昨天 \d{1,2}:\d{2}\ /g, ' ');
  // erase 1-15 05:19
  result = result.replace(/\ \d{1,2}-\d{1,2} \d{1,2}:\d{2} /g, ' ');
  // erase 9小时前 3分钟前 刚刚 5:19
  result = result.replace(/\ (\d{1,2}小时前|\d{1,2}分钟前|刚刚|\d{1,2}:\d{2})\ /g, ' ');
  // erase 转 评 赞
  result = result.replace(/\ (转发|\d+)\ (评论|\d+)\ (赞|\d+)\ /g, ' ');
  // erase 2021-9-19
  result = result.replace(/\ \d{4}-\d{1,2}-\d{1,2}\ /g, ' ');
  return result
}


export const eraser = {
  selectorArr,
  mode,
  urlRegExpArr,
  exec,
}
`;