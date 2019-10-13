
fetch('http://localhost:5000/weather?address=tabriz').then((data)=>{
    data.json().then((data)=>{
        if (data.error) {
            console.log(data.error)            
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})


