'use strict';

// function collectSameElements(collectionA, collectionB) {
//   let out = [];
//   const pool = collectionA.concat(collectionB).sort();
//   const filtered = pool.map((v,i)=>{
//     if (v==pool[i+1]) out.push(v);
//     return;
//   })
//   return out;
  
// }

function collectSameElements(collectionA, collectionB) {
  let out = [];
  collectionA.forEach((av)=>{
    collectionB.find((bv)=>{
      if(av==bv) out.push(av);
    })
  })
  return out;}