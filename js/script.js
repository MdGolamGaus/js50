// Expample-1 Text Change
function textChange(){
    document.getElementById('t_c').innerHTML="Md Golam Gaus";
}

// Expample-2 Play Music
function playMusic(){
    var music= document.getElementById('myMusic');
    music.play();
}

// Example-3 Change Font Size
function fontSizeChange(){
    document.getElementById('c_fs').style.fontSize='35px';
    document.getElementById('c_fs').style.color='red';
}

// Example-4 Show/Hide
function hideText(){
    document.getElementById('t_d').style.display='none';
}
function showText(){
    document.getElementById('t_d').style.display='block';
}

// Example-5 Lower/Upper case
function toLower(){
    var text=document.getElementById('l_u').innerHTML;
    document.getElementById('l_u').innerHTML=text.toLowerCase();
    
}
function toUpper(){
    var text=document.getElementById('l_u').innerHTML;
    document.getElementById('l_u').innerHTML=text.toUpperCase();
}
// Example-6 Document.Write
function docWrite(){
    document.getElementById('d_w').innerHTML=document.write=5+6;    
}
// Example-7 Window Alert
function showAlert(){
    window.alert("Be Careful!!!");
}
// Example-8 Console Log
function cLog(){
    console.log("Be Careful!!!");
}
// Example-9 Window Print
function wPrint(){
    window.print();
}
// Example-10 JS Variable
function jVar(){
    const pi=3.14;
    let person= "Shafin";
    var text= "My name is ";
    document.getElementById('j_v').innerHTML=pi +"; " +text+person;
}
//Example-11 Addition
function jAdd(){
    let x=5+2+3;
    document.getElementById('j_a').innerHTML=x;
}
//Example-12 Incrementing
function jInc(){
    let x=99;
    x++;
    z=x;
    document.getElementById('i_r').innerHTML=z;
}
//Example-13 Decrementing
function jDec(){
    let x=99;
    x--;
    z=x;
    document.getElementById('d_r').innerHTML=z;
}
//Example-14 Math Pow
function mPow(){
    let x=3;
    document.getElementById('p_r').innerHTML=Math.pow(x,3);
}
//Example-15 Operator Precedence
function oPre(){
    let x=100 / 50 * 3;
    document.getElementById('o_p').innerHTML=x;
}
//Example-16 Addition Assignment
function aAss(){
    let x="Hello ";
    x+="World";
    document.getElementById('a_a').innerHTML=x;
}
//Example-17 Exponential Assignment
function eAss(){
    let x=10;
    x**=5;
    document.getElementById('e_a').innerHTML=x;
}
//Example-18 Division Assignment
function dAss(){
    let x=10;
    x/=5;
    document.getElementById('d_a').innerHTML=x;
}
//Example-19 Remainder Assignment
function rAss(){
    let x=10;
    x%=5;
    document.getElementById('r_a').innerHTML=x;
}
//Example-20 Number String
function nStr(){
    let x=10+"Volve";
    document.getElementById('n_s').innerHTML=x;
}
//Example-21 Number String2
function nStr2(){
    let x=10+4+"Volve";
    document.getElementById('n_s2').innerHTML=x;
}
//Example-22 Number String3
function nStr3(){
    let x="Volve"+10+4;
    document.getElementById('n_s3').innerHTML=x;
}
//Example-23 Arrays
function jArr(){
    const cars=["Toyota","Mitsubishi","Volvo"];
    document.getElementById('j_arr').innerHTML=cars[1];
}
//Example-24 Objects
function jObj(){
    const person = {
        firstName : "John",
        lastName  : "Doe",
        age     : 50,
        eyeColor  : "blue"
      };
    document.getElementById('j_obj').innerHTML=person.firstName + " is " + person.age + " years old.";
}
//Example-25 Date
function jDate(){
    document.getElementById('j_date').innerHTML=Date();
}
//Example-26 Addition (Input from HTML)
function abAdd(a,b){
    document.getElementById('ab_Add').innerHTML=parseInt(document.getElementById('a').value)+parseInt(document.getElementById('b').value);
}
//Example-27 Pic Change
function picChange(){
    const myImage = document.querySelector("img");
    myImage.onclick = () => {
      const mySrc = myImage.getAttribute("src");
      if (mySrc === "images/Cat.jpg") {
        myImage.setAttribute("src", "images/Dog.jpg");
      } else {
        myImage.setAttribute("src", "images/Cat.jpg");
      }
    };
}
//Example-28 Change Div Color
function changeColor(){
    const myArea = document.getElementById("rectangle");
    myArea.onclick = () => {   
       if (myArea.style.backgroundColor === 'blue') {
        myArea.style.backgroundColor = 'red';}
       else {
            myArea.style.backgroundColor = 'blue';}
      }
}
//Example-29 Function
function jFunc(cf){
    document.getElementById('f_cel').innerHTML=((5/9) * (parseInt(cf.value)-32));
}
//Example-30 Object Demo
function returnObj(){
    const person = {
        fName: "Md. Golam",
        lName: "Gaus",
        id: 12,
      };
      person.all= function() {
        return (this.fName + " " +this.lName).toUpperCase();
      };
      document.getElementById("demo").innerHTML =
      "My name is " + person.all();  
}
//Example-31 Displaying Properties in a Loop
function disPro(){
    const person = {
        fName: "Md. Golam",
        lName: "Gaus",
        id: 12,
      };
    let text = "";
    for (let x in person) {
      text += person[x] + " ";
    };
    document.getElementById("dis_pro").innerHTML = text; 
}