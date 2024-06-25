function generateId(length){
    let id=''
    for(let i=0; i<length;i++){
        id+=String.fromCodePoint(Math.floor(Math.random()*256))
    }
    return id;
}

console.log(generateId(20));