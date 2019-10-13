const searchTerm = 'tabriz iran'


request({ url: location , json:true }, ( error, response ) =>{
    if ( error) {
        console.log( 'خطا در برقراري ارتباط با سرور' )
    } else if ( response.body.message ) {
        console.log( 'درخواست نا معتبر' )        
    }else if ( response.body.features.length < 1 || response.body.features == undefined ) {
        console.log( 'fدرخواست نا معتبر' ) 
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log( response.body.query );
        console.log( 'lat: '+ latitude + '    long: ' + longitude );
    }

})
