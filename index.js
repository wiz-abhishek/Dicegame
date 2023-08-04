var a=Math.random()*6;
a++;
a=Math.floor(a);
var randomNumber1=a;
var b=Math.random()*6;
b++;
b=Math.floor(b);
var randomNumber2=b;
var randomDice1="dice"+randomNumber1+".png";
var p1 = document.querySelectorAll("img")[0];
p1.setAttribute("src",randomDice1);
var randomDice2="dice"+randomNumber2+".png";
var p2 = document.querySelectorAll("img")[1];
p2.setAttribute("src",randomDice2);
var c;
if(randomNumber1>randomNumber2){
    c="🚩Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    c="Player 2 wins🚩";
}
else{
    c="Draw";
}

document.querySelector("h1").innerHTML=c;
