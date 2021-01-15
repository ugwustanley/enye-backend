const https = require("https")

let fullChunk;


module.exports = async function fetchData(base='' , symbols = ''){

    
    let url       = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`
    https.get(url,  (res) =>{ 
     fullChunk = [] 
    res.on("data",  (data)=>{
       let newdata = data
       fullChunk += newdata              
    }) 
    res.on( "end" , async () =>{
        fullChunk = JSON.parse(fullChunk)          
       
    
    })         
  })
  /*return new Promise(function(resolve , reject){
      request.get(url , (err , resp , body) =>{
          if(err){
              reject(err)
          }
          else{
              resolve(JSON.parse(body))
          }
      })
  })*/
 /* console.log(fullChunk , 1) 
  
  /*setInterval( checkData = () => {
     if(fullChunk !== undefined){
         clearInterval(checkData)
         return fullChunk
     } else{
         console.log('not working')
     }
  }, 1000); */
  let test = await fullChunk
  

  if(test){
    console.log(test , 'test')
    return test;
  }
  
      
    
}