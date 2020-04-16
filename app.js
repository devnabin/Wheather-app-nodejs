const getGeo = require('./libs/getgeo')
const weather = require('./libs/getweather')
let address = process.argv[2]
if(address){
  getGeo( address , (error , {lat , long})=>{
    if(error){
    return console.log(error)
    }

    weather(lat,long,(error , data)=>{
        
        if(error){
          return  console.log(error)
        }
       
        console.log(data);
    })
})
}else{
console.log('Please Provide Address')
}