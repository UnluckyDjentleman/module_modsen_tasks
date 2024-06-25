const fetchUserData=async (id)=>{
    await fetch('http://dummyjson.com/users/'+id).then(resp=>resp.json()).then(result=>{
        console.log(result);
    })
}

fetchUserData(44);