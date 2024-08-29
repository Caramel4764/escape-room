import {inspectMenuInfo} from '../../data/inspectInfoMenu.js';
import { toggleInspectMenu } from './toggleInspectMenu.js';
import { displayInspectImg } from './displayInspectImg.js';
let inspectText = document.querySelector('#inspect-text');

function displayInspect(text, limit, newImg) {
  toggleInspectMenu();
  console.log(text)
  if (text.length <= limit) {
    inspectText.textContent = text;
  }
  if (newImg) {
    displayInspectImg(newImg);
  }
  inspectMenuInfo.chunkedText = [];
  inspectMenuInfo.textSplitter = 0;
  let snipTime = Math.floor(text.length/limit)+1;
  if (snipTime == 1) {
    inspectMenuInfo.chunkedText.push(text);
    return
  }
  for(let i = 0; i<snipTime;i++) {
    if (i==0) {
      inspectMenuInfo.textSplitter = limit;
      while (text[inspectMenuInfo.textSplitter] != " " && text[inspectMenuInfo.textSplitter] != "" && inspectMenuInfo.textSplitter < text.length) {
        inspectMenuInfo.textSplitter++;
      }
      let test = text.slice(0, inspectMenuInfo.textSplitter)
        inspectText.textContent = test;

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