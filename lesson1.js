let score= JSON.parse(localStorage.getItem(`score`))|| { win:0,
lose:0,
tie:0 
};
updatescore();

function function2(play){
 const computerMoce= function1();
if(play===`Rock`){
  if (computerMoce===`Rock`)
    result=`Tie`;
else if (computerMoce=== `Paper`)
  result=`You Lose`;
else if(computerMoce===`Scissor`)
  result=`You Win`;
}
else if( play===`Scissor`)
{
  if (computerMoce===`Rock`)
      result=`You Lose`;
  else if (computerMoce===`Paper`)
    result=`You Win`;
  else if(computerMoce===`Scissor`)
    result=`Tie`;
}
else if(play===`Paper`){
  
    if (computerMoce===`Rock`)
      result=`You Win`;
  else if (computerMoce=== `Paper`)
    result=`Tie`;
  else if(computerMoce===`Scissor`)
    result=`You Lose`;
}

if (result=== `You Win`)
  score.win++;
else if(result===`You Lose`)
  score.lose++;
else if(result===`Tie`)
  score.tie++;
localStorage.setItem('score',JSON.stringify(score));
updatescore();
matchresult();
document.querySelector(`.moves-all`)
.innerHTML= `Your move was:  "${play}" , 
Computer move was:   "${computerMoce}"`;
}

function updatescore(){
   const dude= document.querySelector('.JS-score');
dude.innerHTML = `win: ${score.win}, loss: ${score.lose}, tie: ${score.tie}`;
}

function matchresult(){
document.querySelector(`.result-match`)
.innerHTML=result;
}
    function function1(){
  const random= Math.random();
  let computerMoce='';
  if( random>1/3&& random<2/3)
    computerMoce=(`Rock`);
  else if (random<1/3)
    computerMoce=(`Paper`);
  else if (random>2/3)
    computerMoce=(`Scissor`);
return computerMoce;
}