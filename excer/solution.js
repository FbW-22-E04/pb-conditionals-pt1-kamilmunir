/*const int1=50;//.1,2
const int2=99;
const int3=65;
if(int1>=50 || int2<=99|| int3 >=50 || int3<=99){
    console.log('Condition is true');
}*/


/*
const a=270;//.3
const b=100;
const c=190;

if((a>b) && (a>c)){
  console.log('a is the greatest');
}
else if ((b>a) && (b>c)) {
    console.log('b is the greatest');

}
else if((c>a)&& (c>b))
{
console.log('c is the largest');
}
    
        
 const int1=50;
 const int2=160;
 const int3=80;

if((int1>int2) && (int1>int3)){
  console.log('int1 is the greatest');
}
else if ((int2>int1) && (int2>int3)) {
    console.log('int2 is the greatest');

}
else if((int3>int1)&& (int3>int2))
{
console.log('int3 is the largest');
}
*/


//.4

/*
const str='thon';
const str2=(str.substring(0,2));
if(str2==='Py'){
    console.log(str+"  "+ 'String is True');
}
else{
    console.log('Py'+str);
}
  
*///.5

/*

const int1=20;
const int2=40;
if((int1+int2)>=50 && (int1+int2<=80)){
    console.log('65');
}
else{
    console.log('80');
}

*/

//.6
/*
const int1=50;
const int2=43;

if((int1+int2==8)){
    console.log('True'+"  "+ int1+int2);
}
else if(int1-int2==8) {
    console.log('True');
}
else{
    console.log('False');
}
*/
//.8
/*
const int4=17;
const int5=8;

if((int4+int5==15)){
    console.log('True');
}
else if((int4==15)||(int5==15)) {
    console.log('Condition is True');
}
else
    console.log('False');
*/

//multiple of 7
/*

const a=[22.33,25,69,44,66,77,49,56,35,100];
const b=a.forEach(multiples);

function multiples(value,index)
{
    let x=value%11;
    let b=value%7;
    if(x==0){
        console.log('Multiple of 11 '+"  "+value);
    }

    if(b==0){
        console.log('Multiple of 7'+"  " + value);
    }
    
}

*/
//.9

/*
let  int1=40;
let int2=20;
if(int1==int2) {
    console.log('True');
    let d=0;
    let c=0;
    for(a=1;a<=3;a++){
       d=int1+int2;
        c=c+d;
    //console.log(c);

    }
    console.log(c);
}
else{
    let e=int1+int2;
    console.log('Total'+"   "+e);
}

*/
//.10

/*
 let x=2;
 if(x>19){
    let c=0;
    c=(x+19)*2;
    console.log(c);
 }
 else{
    console.log(x-19);
 }
 */

 /*
   const firstname='Kamil';
   age=10;
   if(age<=12){
    console.log('He is a child');
   }
   else if(age>=13 && age<20) {
   console.log('Teenager');
   }
   else if(age>=20 && age<30){
    console.log('Adult');
   }
   else{
    console.log(firstname+"   is a "+ " adult ");
   }

 
*/
//Body mass Calculator



/*
const consts1='Mark'
const markheight=105;
const markmass=285;
let markbm=0;

const const2='John';
const johnheight=120;
const johnmass=178;
let johnbm=0;

 b=Boolean;
 let c=markheight*markheight;
 //console.log(c);

    markbm=(markmass/c);

    johnbm=(johnmass/(johnheight*johnheight));
   
   // b=markbm>johnbm?console.log('Mark Body is Greater'+"    "+ Number( markbm).toFixed(2)):console.log('Johns Body Mass is greater'+"  " + Number(johnbm).toFixed(2));

    b=markbm>johnbm;
    console.log(b);
    if(b==true){
        console.log('Marks Body Mass is greater');
    }
    else{
        console.log('John Body Mass is greater');
    }
*/

// ternary


/*
let b='dog';
b='dog'?console.log('is pat , pat'):console.log('find me a dog');

*/

/*
let speedlimit=50;
let yourspeed=140;

 let c=speedlimit>yourspeed?console.log('Your r driving slow'):console.log('Your r driving too fast');
*/

/*

let age=20;

let c=age<16?console.log('server butter beer'):console.log('server beer');

*/

/*
let b=Boolean;
let c=Boolean;
b=true;
b===true?console.log('Ticket 5.00'):console.log('Ticket 10.00');


let okmarie='cake';
okmarie==='cake'?console.log('let them eat cake'):console.log('oh,bother');

*/


//Ternary Operator
///.1
let result;
    let a=3;
    let b=0;
    /*
    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }*/

    result=(a+b)<4?console.log('Below'):console.log('Over');

    //.2

    let score = 42;
    let msg = "";
/*
    if (score > 1337)
    {
        msg = "This is a new highscore!";
    }
    else
    {
        msg = "You need more points to beat the highscore!";
    }*/
    
    score>1337?msg='This is a new highscore':msg = "You need more points to beat the highscore!";

    console.log(msg);

    //.3

    let message;
    let login='Weight';
   

        login=='Employee' ? message='Hello'
         : login=='Director' ? message='Greetings'
         : login==' ' ? message='No login' 
         : login=='Football' ? message='Sports man'
         : login=='Weight' ? message='WeightLifter'
         : message='';

         console.log(message);



         //.On the Block
         let newvar=-80;
          newvar>0 ? x=newvar+2:x=newvar/2;

          console.log(x);

