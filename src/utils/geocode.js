const request = require('request')


const geocode = ( address , callback ) =>{
    const location = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNnYXJlIiwiYSI6ImNqdjk1dHoybjBkYzc0Nm1tenl5ODJmMWsifQ.sJR_4x6hEBtOd2kWdyTyRQ&limit=1&language=fa`

    request({ url: location , json: true }, ( error , response ) =>{
        if ( error ) {
            callback( 'خطا در برقراري ارتباط با سرور', undefined )
        } else if ( response.body.message ){
            callback( 'درخواست نا معتبر' , undefined )  
        }else if ( response.body.features.length < 1 || response.body.features == undefined ){
            callback( 'درخواست نا معتبر' , undefined )  
        } else {
            callback( undefined , {
                latitude  : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                placeName : response.body.features[0].place_name
            } )
        }
    })
}

module.exports = geocode