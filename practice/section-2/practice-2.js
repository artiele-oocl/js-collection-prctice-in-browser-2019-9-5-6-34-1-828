'use strict';

function countSameElements(collection) {
  let out = [];
  collection.forEach((cv) => {
    const val = cv.split("");
    val.length > 1 ? (out.push({"key":val[0],"count":getMultiplier(val)})) : countElements(out,cv);
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
function getMultiplier(arr){
  let multiplier;
  arr.forEach(e => {
    if(0/e === 0) multiplier = e;
  })
  return multiplier/1;
}
