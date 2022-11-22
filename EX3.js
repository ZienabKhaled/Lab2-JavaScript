var time = (prompt("Enter Hour"));

var time_part_array = time.split(":");
var ampm="AM";
if (time_part_array[0]>=12)
{
ampm="PM"
}

if (time_part_array[0]>12)
{
time_part_array[0]=time_part_array[0]-12;
}
document.write("Hour is  "+time_part_array[0]+ " "+ampm);

// function timeconversions(s){
// let ampm = s.charAt(8);
// let hours="";
// if (ampm =="A")
// {
// if (s.substring(0,2)=="12"){
//     hours ="00";
// }
// else {
//     hours = s.substring(0,2) ;
// }
// }
// else {
//     if (s.substring(0,2)=="12")
//     {
//         hours = s.substring(0,2) ;
//     }
//     else {
//         hours = parseInt(s.substring(0,2) ,10 ) -12 ;
//     }
// }
// return hours +  s.substring(0,2);
// }








// this code didn't work i don't know why , would you please read it ?
// while (time<25)
// {
// if (time = 0 ){
// alert("Right now time is "+ 12 + " AM");
// break;
// }
// else if (time <12 && time>0 )
// {
// alert ("Right now time is "+ time + " AM");
// break;
// }
// else if  (time = 12){
//     alert ("Right now time is "+ 12 + " PM");  
//     break;
// }
// else (time>12 )
// {
// time = time -12;
// alert ("Right now time is "+ time + " PM");
// }
// break;
// }
