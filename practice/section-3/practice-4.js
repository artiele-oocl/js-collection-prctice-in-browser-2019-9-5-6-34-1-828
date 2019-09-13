'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return getTotalCountOfEachKey(collectionA).map((value)=>{
    return (isInObject(objectB.value,value.key)) ? ({"key":value.key, "count":value.count-getQuotient(value.count)}) : ({"key":value.key, "count":value.count})
  })
}

function getTotalCountOfEachKey(collectionA) {
  let out = [];
  const isInCollection = (object,val) => object.some(ov => ov.key === val);
  collectionA.forEach(cv => {
    const splitted = cv.split("");
    if (splitted.length > 1) {
      getTotalCountOfAlphanumericKey(out,splitted)
    } else {
      if (out.length === 0 || isInCollection(out,cv) === false) {
        out.push({"key":cv,"count":1});
      } else {
        out.forEach(ov => {
          if (ov.key==cv) ov.count++;
        })
      }
    }
  });
  return out;
}
function getTotalCountOfAlphanumericKey(out,splitted) {
  if (isInObject(out,splitted[0])) {
    out.forEach(ov => {
      if (ov.key==splitted[0]) ov.count+=getMultiplier(splitted);
    })
  } else {
    out.push({"key":splitted[0],"count":getMultiplier(splitted)})
  }
}
function getMultiplier(arr){
  let multiplier=[];
  arr.forEach(e => {
    if(e/1 == e) multiplier.push(parseInt(e));
  })
  return parseInt(multiplier.toString().replace(",",""));
}
function isInObject(objectB,val){
  return objectB.indexOf(val) > -1;
}
function getQuotient(num){
  const quotient = Math.floor(num/3);
  return quotient > 0 ? quotient : 1;
}
