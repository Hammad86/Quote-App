let codeContainer = document.getElementById("qoute-container");
const qoute = document.getElementById("qoute");
let auther = document.getElementById('auther-name');
let newQouteBtn = document.getElementById("new-qoute-btn");
let twitterBtn = document.getElementById("twitter-btn");
let loader = document.getElementById("loader");

// Is loading
let showLoader = () =>{
    loader.hidden = false;
    codeContainer.hidden = true;
}

// When loading complete
let hideLoader = () =>{
    loader.hidden = true;
    codeContainer.hidden = false;
}

// Get Code API:
let getQoute = async() =>{
    let apiUrl = 'http://quotes.stormconsultancy.co.uk/random.json';
    try {
        showLoader();
        let response = await fetch(apiUrl);
        let responseData = await response.json();

// if else statement for unknown author
auther.innerText = responseData.author === '' ? "Anonymous" : responseData.author;

// if else statement for 120 character quote
responseData.quote >120 ? qoute.classList.add("long-qoute") : qoute.classList.remove("long-qoute");
qoute.innerText = responseData.quote; 
hideLoader();
        
    } catch (e) {
        console.log("error",e);
        qoute.innerText = "Sorry!!! We have a Network Issue so,just click on try again button Or restart your router";
        auther.innerText = "Happy Coding:"
        newQouteBtn.innerText  = "Try Again";
    }
};

// twitterBtn
let twitt = () =>{
    let quote = document.getElementById("qoute").innerText;
    let auther = document.getElementById("auther-name").innerText;
    let twitterApi =  `https://twitter.com/intent/tweet?text=${quote} - ${auther}`;
    window.open(twitterApi,'_blanks');
}

// Add event listner
newQouteBtn.addEventListener('click',getQoute);
twitterBtn.addEventListener('click',twitt);

// on load
getQoute();

