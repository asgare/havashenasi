const path = require('path')
const express = require('express')
const geocode  = require('./utils/geocode')
const forecast = require('./utils/forecast')
const hbs = require('hbs')
const app = express()


const publicDirectory = path.join( __dirname , '..' , 'public' )
const viewsPath = path.join( __dirname , '..' , 'templates' , 'views' )
const partialsPath = path.join( __dirname , '..' , 'templates' , 'partials' )


app.use( express.static( publicDirectory ) )
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', ( req , res ) =>{
    res.render('index',{
        title: 'وضعيت آب و هوا',
        name: 'اصغر افتخاري'
    })
})

app.get('/about', ( req , res )=>{
    res.render('about',{
        title: 'درباره من',
        name: 'اصغر افتخاري'
    })
})

app.get('/help', ( req , res ) =>{
    res.render('help', {
        title: 'راهنماي استفاده',
        name: 'اصغر افتخاري'   
    })
})

app.get('/help/*', ( req , res ) =>{
    res.render('404', {
        message: 'راهنماي مورد نظر يافت نشد'
    })
})

app.get( '/weather' , ( req , res ) =>{
    if (!req.query.address) {
        return res.send({
            error: 'آدرس معتبري ارائه نشده است.'
        })
    }
    geocode( req.query.address , ( error , { latitude, longitude, placeName } ={} ) => {
        if ( error ) {
            return res.send({
                error : error
            })
        }
        forecast( latitude , longitude , ( error , forecastResponse ) =>{
            if ( error ) {
                return res.send({
                    error : error
                })
            }
            res.send({
                location : placeName,
                forecast : forecastResponse
            })

        })
    })

})


app.get('*', ( req , res )=>{
    res.render('404', {
        message: 'چنين صفحه اي وجود ندارد'
    })
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log( 'server running ' , port )    
})