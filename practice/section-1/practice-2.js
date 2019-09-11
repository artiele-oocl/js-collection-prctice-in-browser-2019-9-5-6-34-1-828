'use strict';

function collectSameElements(collectionA, collectionB) {
  let out = [];
  collectionA.forEach((av)=>{
    collectionB[0].find((bv)=>{
      if(av==bv) out.push(av);
    })
  })
  return out;
}
