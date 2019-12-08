const run=document.querySelector("#run");
const msg=document.querySelector("#msg");
//const msg=document.querySelector("#msg");

run.addEventListener('click',()=>{
    chrome.tabs.query({
        active:true,
        currentWindow:true
    },(tabs)=>{
        chrome.tabs.executeScript({
            file:'js/content1.js'
        });
    });
});

const msgcode=setInterval(()=>{
    chrome.tabs.query({
        active:true,
        currentWindow:true
    },(tabs)=>{
        chrome.tabs.executeScript({
            file:'js/test.js'
        },function(result){
            msg.innerText=result;
        });
    });
},500);
