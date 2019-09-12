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


// const collection = [
//   'a', 'a', 'a',
//   'e', 'e', 'e', 'e', 'e', 'e', 'e',
//   'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
//   't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]', // Issue: [ 't', '[', '1', '0', ']' ] 1,0 instead of 10
//   'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
//   'c:8',
//   'g', 'g', 'g', 'g', 'g', 'g', 'g',
//   'b', 'b', 'b', 'b', 'b', 'b',
//   'd-5'
// ];


// console.log(countSameElements(collection))
// // console.log(parse)
