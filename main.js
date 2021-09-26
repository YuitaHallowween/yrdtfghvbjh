var SpeechRecognition =window.webkiSpeechRecongnition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

regonition.onresult = function run (event) {

    console.log(event);

    var Content = event.result[0] [0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;
}