import {inspectMenuInfo} from '../data/inspectInfoMenu.js';

function displayInspect(text, limit) {
  inspectMenuInfo.chunkedText = [];
  inspectMenuInfo.textSplitter = 0;
  let snipTime = Math.floor(text.length/limit)+1;
  if (snipTime == 1) {
    console.log(`small: ${text}`)
    return inspectMenuInfo.chunkedText.push(text);
  }
  for(let i = 0; i<snipTime;i++) {
    console.log(snipTime)
    if (i==0) {
      inspectMenuInfo.textSplitter = limit;
      while (text[inspectMenuInfo.textSplitter] != " " && text[inspectMenuInfo.textSplitter] != "" && inspectMenuInfo.textSplitter < text.length) {
        inspectMenuInfo.textSplitter++;
      }
      let test = text.slice(0, inspectMenuInfo.textSplitter)
      inspectMenuInfo.chunkedText.push(test);
      console.log(`big (first): ${test}`)
    } else {
      inspectMenuInfo.prevTextSplitter = inspectMenuInfo.textSplitter;
      inspectMenuInfo.textSplitter = inspectMenuInfo.prevTextSplitter + limit;
      while (text[inspectMenuInfo.textSplitter] != " " && inspectMenuInfo.textSplitter < text.length) {
        inspectMenuInfo.textSplitter++;
        if (inspectMenuInfo.textSplitter == text.length-1) {
          return inspectMenuInfo.chunkedText.push(text.slice(inspectMenuInfo.prevTextSplitter, inspectMenuInfo.textSplitter));
        }
      }
      let test = text.slice(inspectMenuInfo.prevTextSplitter, inspectMenuInfo.textSplitter)
      inspectMenuInfo.chunkedText.push(test)
      console.log(`big (more): ${test}`)
      inspectMenuInfo.chunkedText.map((info) => console.log(`%c ${info}`, "background-color: red;"))
    }
  }
  return inspectMenuInfo.chunkedText;
}

export {displayInspect}