'use strict';

function collectSameElements(collectionA, objectB) {
  let out = [];
  collectionA.forEach((av)=>{
    objectB.value.find((bv)=>{
      if(av==bv) out.push(av);
    })
  })
  return out;
}
