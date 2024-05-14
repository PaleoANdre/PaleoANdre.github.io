let colorList = ["red", "orange", "yellow", "green", "deepskyblue", "rebbecapurple", "fuchsia"];
let rainbowLetters = document.createElement('ul');
for (let i = 0; i < colorList.length; i++){
    let rainbow = document.createElement('li');
    rainbowLetters.appendChild(rainbow);
    rainbow.innerText = colorList[i];
    rainbow.style.color = colorList[i];
    
}
document.body.appendChild(rainbowLetters);