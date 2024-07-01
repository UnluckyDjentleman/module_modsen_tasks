const express=require('express')
const app=express();

const apiWeatherData=async(lat,lon)=>{
    const apiKey="74ce4b9369ad4ebe3862daffd8df4f21"
    const weatherUrl=`https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const resp=await fetch(weatherUrl).then(data=>data.json());
    return resp;
}

app.get('/',async (req,res)=>{
    try{
        const dataWeatherApi=await apiWeatherData(req.query.lat, req.query.lon);
        res.status(Math.floor(100+Math.random()*300)).json(dataWeatherApi);
    }
    catch(error){
        res.status(Math.floor(400+Math.random()*200)).json(error)
    }
})

app.listen(3021)