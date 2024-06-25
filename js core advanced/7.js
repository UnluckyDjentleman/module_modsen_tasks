function HandlingArray(array){
    try{
        if(array.length>0){
            console.log(array)
        }
        else{
            throw Error;
        }
    }
    catch(e){
        console.error("This array is empty")
    }
}

HandlingArray([1,2,3,4,5,6])
HandlingArray([]);