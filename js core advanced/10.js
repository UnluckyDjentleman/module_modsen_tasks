async function numbers(){
    for(let i=1;i<=10;i++){
        console.log(i);
        await new Promise((resolve)=>{
            setTimeout(resolve,1000)
        });
    }
}

numbers();