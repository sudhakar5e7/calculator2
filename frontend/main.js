window.addEventListener("load", function () {
    var firstNumberElement = document.getElementById('firstNumber')
    var secondNumberElement = document.getElementById('secondNumber')
    var sumButtonElement = document.getElementById('addButton')
    var subButtonElement = document.getElementById('subButton')
    var mulButtonElement = document.getElementById('mulButton')
    var divButtonElement = document.getElementById('divButton')
    var resultElement = document.getElementById('result')
    var answer
    var url
    function callServer(url){
        fetch(url,{
            method:"DELETE"
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            resultElement.innerHTML=data.key
        })
        .catch(function(error){
            console.log("error",error)
        })
    }
    sumButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        url="/add?firstNumber="+first+"&secondNumber="+second
        callServer(url)
    })
    subButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        url=`/sub?firstNumber=${first}&secondNumber=${second}`
        callServer(url)
    })
    mulButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        url=`/mul?firstNumber=${first}&secondNumber=${second}`
        callServer(url)
    })
    divButtonElement.addEventListener("click", function () {
        var first = firstNumberElement.value
        var second = secondNumberElement.value
        url="/div?firstNumber="+first+"&secondNumber="+second
        callServer(url)
    })

});