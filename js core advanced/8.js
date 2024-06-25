function CallCallback(text, callback){
    callback(text);
    callback(text)
}

CallCallback("hello", console.log);


function promisification(f){
    return function(...args){
        return new Promise((resolve, reject)=>{
            function callback(err,result){
                if(err){
                    reject(err)
                }
                else{
                    resolve(result)
                }
            }

            args.push(callback);

            f.call(this, ...args)
        })
    }
};

const callCallbackPromise=promisification(CallCallback)
callCallbackPromise("fuck you").then(res=>console.log(res)).catch(err=>console.error(err));

