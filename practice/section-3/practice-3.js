'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const rawObject = getTotalCountOfEachKey(collectionA)
  return rawObject.map((value)=>{
    return (isInObject(objectB,value.key)) ? ({"key":value.key, "count":value.count-getQuotient(value.count)}) : ({"key":value.key, "count":value.count})
  })
}

function isInObject(objectB,val){
  return objectB.value.indexOf(val) > -1
}
function getQuotient(num){
  const quotient = Math.floor(num/3);
  return quotient > 0 ? quotient : 1;
}
function getTotalCountOfEachKey(collectionA) {
  let out = [];
  const isInCollection = (object,val) => object.some(ov => ov.key === val);
  collectionA.forEach(cv => {
    if (out.length === 0 || isInCollection(out,cv) === false) {
      out.push({"key":cv,"count":1});
    } else {
      out.forEach(ov => {
        if (ov.key==cv) ov.count++;
      })
    }
  });
  return out;
}
