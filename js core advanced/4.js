function ArraySumFromZeroToTen(array){
    return array.filter(element=>element>=0&&element<=10).reduce((el,i)=>{
        return el+i
    },0);
}

console.log(ArraySumFromZeroToTen([1,2,23,12,56,2,10,2]));