const dice = document.getElementById("dice");

const num = ['<img src="https://www.speedymath.com/images/dice/4-border.gif">',
         '<img src="https://www.speedymath.com/images/dice/2-border.gif">',
         '<img src="https://www.speedymath.com/images/dice/3-border.gif">',
         '<img src="https://www.speedymath.com/images/dice/4-border.gif">',
         '<img src="https://www.speedymath.com/images/dice/5-border.gif">',
         '<img src="https://www.speedymath.com/images/dice/6-border.gif">'];
    dice.addEventListener("click", ()=>{
        
        dice.innerHTML =num[Math.floor(Math.random()*num.length)];
  });

