"use strict"
function findDuplicate(array){
    let map=new Map();
    array.forEach(ele=>{
        map.set(ele, map.has(ele) ? map.get(ele) + 1 : 1);
    })
   return Array.from(map.values()).filter(val=>val>1).length>0;
}

console.log(findDuplicate([2,3,4,1,'2']));