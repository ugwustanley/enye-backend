const querystring = require('querystring');

const ExchangeService = require("../services/exchangeService")

const exchangeService = require('../services/exchangeService')


module.exports = class ExchangeController {

     static async getExchange(req, res, next){
        try{
           // if(req.query !== {}){
           //   await  exchangeService.getFewExchange(req.query)
          //      console.log('there')
          //  }
            const rates = await exchangeService.getAllService(req.query)
            console.log(rates)
           /* if(!rates){
                res.status(404).json({error: 'data not found'})
            } */
            
            res.json(rates)     
            next()
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }
}