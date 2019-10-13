const request = require('request')


const forecast = ( lat , long , callback ) =>{
    const url = `https://api.darksky.net/forecast/a1f44e32f300c5ee6c17f53678ecd1c6/${lat},${long}?lang=fa&units=si`
    request({ url: url , json:true }, ( error , response ) =>{
        if ( error ) {
            callback(  'خطا در برقراري ارتباط با سرور' , undefined )
        } else if ( response.body.error ) {
            callback(  'درخواست نا معتبر' , undefined )
        } else {
            callback( undefined, 
                response.body.daily.data[0].summary                 +
                ' در حال حاضر دما '                                 + 
                response.body.currently.temperature                 +
                'مي باشد. همچنين احتمال بارنگي '                  +
                response.body.currently.precipProbability           +
                ' %  مي باشد.'
                )
        }
    } )
}

module.exports = forecast