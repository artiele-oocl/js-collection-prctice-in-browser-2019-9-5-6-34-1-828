'use strict';

function countSameElements(collection) {
  let out = [];
  collection.forEach((cv) => {
    if (out.length === 0 || isInObject(out,cv) === false) {
      out.push({"key":cv,"count":1});
    }
    else {
      out.forEach(ov => {
        if (ov.key==cv) ov.count++;
      })
    }
  })

  return out;
}

function isInObject(object,val){
  return object.some(ov => ov.key === val)
}