'use strict';

var counter_right = 0;

alert("You are welcome to the greatest website in the world and as a matter of fact, the greatest website that ever will be")
var name = prompt("Please what is your name")
alert(name + " , " + " you are welcome to the making of the greatest guessing site that ever will be")

var coding = prompt("Does Silas like coding?");
//coding.toLowerCase();

if (coding.toLowerCase() === 'yes' || coding.toLowerCase() === 'y'){
 // console.log("You answered "  + coding + " and you are absolutely right" );
 counter_right++;
  alert("You answered "  + coding + " and you are absolutely right" );
}else{
  // console.log("You answered "  + coding + " and you are absolutely wrong");
  alert("You answered "  + coding + " and you are absolutely wrong");
}

var instrument = prompt('Does Silas play any musical instrument?');
//var instrument_answer = instrument.toLowerCase();
if (instrument.toLowerCase() === 'yes' || instrument.toLowerCase() === 'y'){
  //console.log("You answered "  + instrument + " and you are absolutely wrong");
  
  alert("You answered "  + instrument + " and you are absolutely wrong");
}else{
  // console.log("You answered "  + instrument + " and you are absolutely right");
  alert("You answered "  + instrument + " and you are absolutely right");
  counter_right++;
}

var house = prompt('Does Silas have a house?');
//house.toLowerCase();
if (house.toLowerCase() ==='yes' || house.toLowerCase() === 'y'){
  //console.log("You answered " + house + " and you are absolutely right");
  counter_right++;
  alert("You answered " + house + " and you are absolutely right");
}else{
  //console.log('You answered '  + house + " and you are absolutely wrong");
  alert('You answered '  + house + " and you are absolutely wrong");

}

var commute = prompt('Does Silas drive to Code Fellows?');
//commute.toLowerCase();
if (commute.toLowerCase() ==='yes' || commute.toLowerCase === 'y'){
  //console.log("You answered " + commute + " and you are absolutely wrong");
  alert("You answered " + commute + " and you are absolutely wrong");

}else{
  //console.log('You answered '  + commute + " and you are absolutely right");
  counter_right++;
  alert('You answered '  + commute + " and you are absolutely right");

}

var phobia = prompt('Does Silas have phobia for rattle snakes?');
//phobia.toLowerCase();
if (phobia.toLowerCase() ==='yes' || phobia.toLowerCase() === 'y'){
  //console.log("You answered "  + phobia + " and you are absolutely right");
  counter_right++;
  alert("You answered "  + phobia + " and you are absolutely right");

}else{
  //console.log("You answered "  + phobia + " and you are absolutely wrong");
  alert("You answered "  + phobia + " and you are absolutely wrong");
}


var counter =1;
for (var guess =0; guess < 4; guess++){
  //var counter =1;
var age = parseInt(prompt("How old is Silas' laptop"));
console.log(typeof(age));
if (age > 4){
  alert("You answered " +  age + " and that's too high");
  counter++;
}else if (age < 4){
  alert("You answered " + age + " and that's low");
  counter++;
} else if (age === 4) {
  alert("You answered " + age + " and you are right");
  counter_right++;
  counter++;
  break;
  //counter++;
  
} else {
  alert("You gave no valid answer");
  counter++;
}
}

alert(name + " , " + " thank you for exploring the greatest guessing site that ever will be");
alert ("You made  " + (counter - 1) + " guesses in guessing how old Silas's laptop is");
alert("The right answer is 4");

var numbers = [3,6,9,12,15,18,21,24,27];
var counter = 1;
for (var start = 0; start < 6; start++){
  var answer = parseInt(prompt("Please guess a number in the array between 1 and 20"));
  var tester = numbers.includes(answer, 0);
  if (tester){
    counter_right++;
    alert("You guessed one of the right numbers");
    break;
  }else{
    alert("Keep guessing almost there");
    counter++;
  }
}
alert ("You made " + counter + " attempts");
alert ("These are the right numbers " + numbers);
alert ("Out of 7 questions, you answered " + counter_right + " right")

