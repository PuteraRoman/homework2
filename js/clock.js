(function(){
function updateClock(){
    const clockContainer = document.querySelector('.clock');
clockContainer.innerText = new Date().toLocaleTimeString();
clockContainer.style.color = "blue";
clockContainer.style.border = "dashed blue";
}
setInterval(updateClock,1000)
})()