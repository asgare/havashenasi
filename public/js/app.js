console.log('from client side');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    messageOne.textContent = 'لطفا كمي صبر كنيد'
    messageTwo.textContent = ''
    const location = search.value
        fetch( '/weather?address=' + location ).then((data)=>{
        data.json().then((data)=>{
            if (data.error) {
                messageOne.textContent = data.error       
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent =data.forecast
            }
        })
    })
})
