var form = document.querySelector('form')
var currency_input = document.getElementById('currency_input')
var body = document.querySelector('body')
var description_body = document.getElementById('description_body')

function after_submit(){
    event.preventDefault()
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.coingecko.com/api/v3/coins/'+currency_input.value)
    xhr.setRequestHeader('Content-type','application/json')
    xhr.send()
    xhr.onload = function(){
        var response = JSON.parse(this.response)
        if(xhr.status==404){
            alert('Wrong coin name !!!')
        }
        var description_content = document.createElement('p')
        var description_image = document.createElement('img')
        console.log(response.image.thumb)
        description_image.setAttribute('src',response.image.small)
        description_image.setAttribute('class','coin_image')
        description_content.innerHTML = response.description.en
        if(description_body.hasChildNodes()){
            description_body.innerHTML = null
        }
        description_body.append(description_image)
        description_body.append(description_content)
    }
}

form.addEventListener('submit',after_submit)