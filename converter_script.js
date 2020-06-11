var from_selection = document.getElementById('from_selection')
var to_selection = document.getElementById('to_selection')
var form = document.querySelector('form')
var result_box = document.getElementById('result_box')
var response_global;


function start(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.coingecko.com/api/v3/exchange_rates')
    xhr.setRequestHeader('Content-type','application/json')
    xhr.send()
    xhr.onload = function(){
        var response = JSON.parse(this.response)
        response_global = response
        var keys = Object.keys(response.rates)
        for(i=0;i<keys.length;i++){
            var option = document.createElement('option')
            option.innerText = keys[i]
            from_selection.appendChild(option)
        }
        for(i=0;i<keys.length;i++){
            var option = document.createElement('option')
            option.innerText = keys[i]
            to_selection.appendChild(option)
        }     
    }
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function convert(){
    event.preventDefault()
    var from_value = document.getElementById('currency_from_value')
    var temp = from_value.value/response_global.rates[from_selection.value].value
    var ans = round(temp*response_global.rates[to_selection.value].value,8)
    if(result_box.hasChildNodes()){
        result_box.innerHTML = null
    }
    var result = document.createElement('p')
    result.setAttribute('class','result')
    result.innerHTML = ans +' '+ to_selection.value
    result_box.appendChild(result)
}

form.addEventListener('submit',convert)
window.addEventListener('load',start)