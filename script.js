var info_button = document.getElementById('info_button')
var converter_button = document.getElementById('convert_button')

function get_info(){
    event.preventDefault()
    window.location.href = "info_page.html";
}

function convert(){
    event.preventDefault()
    window.location.href = "converter_page.html"
}

function start(){
    info_button.addEventListener('click',get_info)
    converter_button.addEventListener('click',convert)
}

window.addEventListener('load',start)