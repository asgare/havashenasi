request({ url: url , json: true }, ( error , response ) => {

    if ( error ) {
        console.log( 'خطا در برقراري ارتباط با سرور' );
    } else if ( response.body.error) {
        console.log( 'درخواست نا معتبر' )        
    } else { 
        console.log( response.body.daily.data[0].summary    +
            'در حال حاضر دما '                             + 
        response.body.currently.temperature                 +
        'مي باشد. همچنين احتمال بارنگي '                  +
        response.body.currently.precipProbability           +
        ' % مي باشد.'
        )   
    }
})