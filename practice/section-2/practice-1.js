'use strict';

function countSameElements(collection) {
  let out = [];
  collection.forEach((cv,ci) => {
    if(ci==0) out.push({"key":cv,"count":0}); // initialize object structure
    out.find((ov,oi) => {
      if (ov.key === cv) {
        console.log("IF")
        out[oi].count++
      } else {
        console.log("ELSE")
      }
    })
  });
  return out;
}

const collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd', 'd', 'd', 'd', 'd'
];
console.log(countSameElements(collection)) //  {key: 'a', count: 3},