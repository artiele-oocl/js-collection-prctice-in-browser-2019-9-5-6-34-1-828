'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((value)=>{
    return (isInObject(objectB,value.key)) ? ({"key":value.key, "count":value.count-getQuotient(value.count)}) : ({"key":value.key, "count":value.count})
  })
}

function isInObject(object,val){
  return object.value.indexOf(val) > -1
}
function getQuotient(num){
  const quotient = Math.floor(num/3);
  return quotient > 0 ? quotient : 1;
}
