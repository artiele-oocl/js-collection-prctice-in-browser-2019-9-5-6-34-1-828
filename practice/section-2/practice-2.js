'use strict';

function countSameElements(collection) {
  let out = [];
  collection.forEach((cv) => {
    const val = cv.split("");
    if (val.length > 1) {
      console.log("IF")
      // iterate over val.
      // key = val[0]
      // count = iterate over val and find the number in it
    } else {
      countElements(out,cv)
    }
  })

  return out;
}

function countElements(out,key) {
  if (out.length === 0 || isInObject(out,key) === false) {
    out.push({"key":key,"count":1});
  }
  else {
    out.forEach(ov => {
      if (ov.key==key) ov.count++;
    })
  }
}
function isInObject(object,val){
  return object.some(ov => ov.key === val)
}
function isNumber(){
  return;
}

const collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];

console.log(countSameElements(collection));