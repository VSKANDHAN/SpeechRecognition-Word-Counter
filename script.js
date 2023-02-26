let start=document.getElementById('start');
let lang=document.getElementById('lang');
let textarea=document.querySelector('textarea');
let wordcount=document.getElementById('wordCount');
start.addEventListener('click',()=>{
    start.innerText="Recording";
    start.setAttribute('class','recording');
    let speech=true;
    let langValue=lang.value;

let SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
let recog=new SpeechRecognition();
recog.lang=langValue;
recog.interimResults=true;
recog.addEventListener('result',(e)=>{
    let sentence='';
    let translatedWord=Array.from(e.results).map(r=>r[0]).map(r=>r.transcript);
    sentence+=translatedWord;
    textarea.innerHTML=sentence;
   let words= sentence.split(' ');
   let wordslen=words.length;
   let response;
   switch(langValue){
    case 'ta-IN':
        response="இந்த வாக்கியத்தில் உள்ள சொற்களின் எண்ணிக்கை: ";
    
        break;
    case 'en-IN':
        response="Number Of Words In This Sentence Is: "  ;
        break;
    case 'te-IN':
        response=" ఈ వాక్యంలో పదాల సంఖ్య ఉంది: ";
        break;
    case 'kn-IN':
        response="ಈ ವಾಕ್ಯದಲ್ಲಿ ಪದಗಳ ಸಂಖ್ಯೆ ಇದೆ: ";
        break;
    case 'ml-IN':
        response="ഈ വാക്കിൽ ഉള്ള വാക്കുകളുടെ എണ്ണം: ";
        break;
    case 'hi-IN':
        response="इस वाक्य में शब्दों की संख्या है: ";
        break;         

   }
   wordcount.innerHTML=`${response} <span>${wordslen}</span>`;
   if(e.results[0].isFinal){
    start.innerText="Start";
    start.setAttribute('class','start');
   }

})
if(speech==true){
    recog.start();
}


})