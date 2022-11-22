var age = Number(prompt("Enter your age "));
while(age>0)
 {
if ( age<=10 ){
    alert("You are a child"); 
}
else if ( age<=18){
    alert(" You are a teenager");
} 
else if (age<=50){
    alert("You are a Grown up"); 
}
else {
    alert("You are Old");
}
 age = Number(prompt("Enter your age "));
 }
 


