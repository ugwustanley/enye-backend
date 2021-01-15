
const https = require("https")

const fetch = require('./fetch')






module.exports = class ExchangeService {

   static async getAllService(query){
       try{        
          let base  =''
          let symbols = ''
          //let fullChunk ;
   
          if(query !== {}){ 
              base =  query.base;
              symbols =  query.currency;
             
          }
           
           //= await fetch(base , symbols)
          let customSearchURL = `?base=${base}&symbols=${symbols}`
          let url       = `https://api.exchangeratesapi.io/latest${customSearchURL}`
          if(base === undefined || symbols === undefined){
            url  = `https://api.exchangeratesapi.io/latest`
          }
         
          https.get(url,  (res) =>{ 
            global.fullChunk2 = [] 
          res.on("data",  (data)=>{
             let newdata = data
             fullChunk2 += newdata              
          }) 
          res.on( "end" , async () =>{
              fullChunk2 = JSON.parse(fullChunk2)  
              global.fullChunk = fullChunk2        
              console.log(fullChunk, "this is on end")
          
          })         
        })
         
       
        const  mainRates = await  {
                    result:{
                           base  : await fullChunk.base,
                           date  : await fullChunk.date,
                           rates : await fullChunk.rates
                       }
                   }
                   console.log(mainRates , 1)
            return  mainRates
       } 
       catch(error){
          console.log(`${error}: v54he4`)
       }
   }
 
}