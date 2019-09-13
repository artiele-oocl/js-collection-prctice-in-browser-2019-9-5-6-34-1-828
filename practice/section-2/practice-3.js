'use strict';

function countSameElements(collection) {
  let out = [];
  collection.forEach(cv => {
    const val = cv.split("");
    if (val.length > 1) {
      if (isInObject(out,val[0])) {
        out.forEach(ov => {
          if (ov.name==val[0]) ov.summary+=getMultiplier(val);
        })
      } else {
        out.push({"name":val[0],"summary":getMultiplier(val)})
      }
    }
    else {
      countElements(out,cv);
    }
  })
  return out;
}

function countElements(out,name) {
  if (out.length === 0 || isInObject(out,name) === false) {
    out.push({"name":name,"summary":1});
  }
  else {
    out.forEach(ov => {
      if (ov.name==name) ov.summary++;
    })
  }
}
function isInObject(object,val){
  return object.some(ov => ov.name === val)
}
function getMultiplier(arr){
  let multiplier=[];
  arr.forEach(e => {
    if(e/1 == e) multiplier.push(parseInt(e));
  })
  return parseInt(multiplier.toString().replace(",",""));
}
