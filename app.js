var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input"); 
var txtOutput = document.querySelector("#txt-output"); 

var serverUrl = "https://google-translate1.p.rapidapi.com/language/translate/v2/detect"

function gettranslationUrl(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(){
    console.log("error has occured");
    alert("Error occured. Please Try again later.");
}

function clickevent(){
    var inputTxt =txtInput.value;

    fetch(gettranslationUrl(inputTxt))
    .then(response=> response.json())
    .then(json=>{
        var transtxt = json.contents.translated;
        txtOutput.innerText= transtxt;
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickevent);

