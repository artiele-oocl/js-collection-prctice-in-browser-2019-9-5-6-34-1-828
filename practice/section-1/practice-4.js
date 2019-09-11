'use strict';

function collectSameElements(collectionA, objectB) {
  let out = [];
  collectionA.forEach((av)=>{
    objectB.value.find((bv)=>{
      if(av.key==bv) out.push(av.key);
    })
  })
  return out;
}
