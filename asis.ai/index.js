let box = document.querySelector('.box');
let btn = document.querySelector('button');

// Function for speaking
const speakFunc = (input) => {
    let speakinput = new SpeechSynthesisUtterance(input);
    speakinput.lang = 'en-IN';
    window.speechSynthesis.speak(speakinput);
}

window.onload = () => {
    greetingFunc();
    // speakFunc('Hello just for code');
}

const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 0 && hour < 12) {
        speakFunc("Good morning, how can I help you!");
    } else if (hour >= 12 && hour < 16) {
        speakFunc("Good afternoon, how can I help you!");
    }
     
    
    
    else {
        speakFunc("Good evening, how can I help you!");
    }
}

const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';

        recognition.onresult = (e) => {
            // Corrected to use e.results
            let spokentext= e.results[0][0].transcript; // Properly logging result

            handleCommand(spokentext.toLowerCase());
             box.classList.remove("btn-box")
            btn.innerHTML=`  <i class="fa-solid fa-microphone-lines-slash"></i>`;
        };

        recognition.onerror = (e) => {
            console.error("Speech recognition error:", e.error);
        };

        recognition.start();
    } else {
        alert('Sorry! Your browser does not support voice input.');
    }
}

btn.onclick = () => {
    box.classList.add("btn-box")
    btn.innerHTML=` <i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}
const handleCommand=(command)=>{
    console.log(command);
    
if(command.includes('hello')||command.includes('hii')||command.includes("hey")){
    speakFunc('Hello How can i help you !');
}
else if(command.includes('Who are you')||command.includes('develop')||command.includes("hu r u")){
    speakFunc('I am virtual Asistance ,Developed by Santosh patel !');
}

else if(command.includes('open google')){
    speakFunc('Opening google');
    window.open('https://www.youtube.com/?feature=ytca')
}
else{
    speakFunc(`This is what i found on internate regrading  ${command}`)
    window.open(`https://www.google.com/search?q=${command}`)
}
}












