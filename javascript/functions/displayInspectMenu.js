import {inspectMenuInfo} from '../data/inspectInfoMenu.js';

function displayInspect(text, limit) {
  inspectMenuInfo.chunkedText = [];
  inspectMenuInfo.textSplitter = 0;
  let snipTime = Math.floor(text.length/limit)+1;
  if (snipTime == 1) {
    return inspectMenuInfo.chunkedText.push(text);
  }
  for(let i = 0; i<snipTime;i++) {
    if (i==0) {
      inspectMenuInfo.textSplitter = limit;
      while (text[inspectMenuInfo.textSplitter] != " " && text[inspectMenuInfo.textSplitter] != "" && inspectMenuInfo.textSplitter < text.length) {
        inspectMenuInfo.textSplitter++;
      }
      let test = text.slice(0, inspectMenuInfo.textSplitter)
      inspectMenuInfo.chunkedText.push(test);
    } else {
      inspectMenuInfo.prevTextSplitter = inspectMenuInfo.textSplitter;
      inspectMenuInfo.textSplitter = inspectMenuInfo.prevTextSplitter + limit;
      while (text[inspectMenuInfo.textSplitter] != " " && inspectMenuInfo.textSplitter < text.length) {
        inspectMenuInfo.textSplitter++;

        if (inspectMenuInfo.textSplitter == text.length-1) {
          if (text.slice(inspectMenuInfo.prevTextSplitter, inspectMenuInfo.textSplitter) == '') {
            return;
          } else {
            return inspectMenuInfo.chunkedText.push(text.slice(inspectMenuInfo.prevTextSplitter, inspectMenuInfo.textSplitter));
          }
        }
      }
      let choppedText = text.slice(inspectMenuInfo.prevTextSplitter, inspectMenuInfo.textSplitter)
      if (!choppedText == '') {
        inspectMenuInfo.chunkedText.push(choppedText)
      }
    }
  }
  return inspectMenuInfo.chunkedText;
}

export {displayInspect}