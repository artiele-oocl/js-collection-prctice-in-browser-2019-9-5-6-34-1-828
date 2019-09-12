'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const updatedCollection = collectionA.map((value)=>{
    if(isInObject(objectB,value.key)) return value.count--;
    return {"key":value.key,"count":value.count}
  })
  return updatedCollection;
}

function isInObject(object,val){
  console.log(object.value)
  return object.value.indexOf(val) > -1
}

const collectionA = [
  {key: 'a', count: 2},
  {key: 'e', count: 2},
  {key: 'h', count: 2},
  {key: 't', count: 2},
  {key: 'f', count: 2},
  {key: 'c', count: 2},
  {key: 'g', count: 2},
  {key: 'b', count: 2},
  {key: 'd', count: 2}
];

const objectB = {value: ['a', 'd', 'e', 'f']};
console.log(createUpdatedCollection(collectionA, objectB))