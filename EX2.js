
function vowelscount (input) {

    var count =0;
    var vowels = "aoieuAOIEU";
    for (var i=0 ; i< input.length ;i++)
    {
        if (vowels.includes(input[i]))
        {
            ++count; 
        }
    }
    return count ;
}
var input = prompt("Enter your Name");
 console.log(vowelscount(input));


