'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map((value)=>{
    return (isInObject(objectB,value.key)) ? ({"key":value.key, "count":value.count-1}) : ({"key":value.key, "count":value.count})
  })
}

function isInObject(object,val){
  return object.value.indexOf(val) > -1
}
