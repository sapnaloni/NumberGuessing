var msg1= document.getElementById("message1")
var msg2= document.getElementById("message2")
var msg3= document.getElementById("message3")
var answer= Math.floor(Math.random()*100)+1;
var no_guess = 0;
var guess_num = []; 
function play()
{
    var user_guess=document.getElementById("guess").value;
    if (user_guess<1 ||user_guess>100)
    {
        alert("Please enter a number between 1 to 100");
    }
    else
    {
        guess_num.push(user_guess);
        no_guess += 1;

        if(user_guess<answer)
        {
            msg1.textContent = "OOPS SORRY!! TRY A GREATER NUMBER"
            msg2.textContent = "No of Guesses:"  +no_guess;
            msg3.textContent = "Guessed numbers are:"  +guess_num;
        }
        else if(user_guess>answer)
        {
            msg1.textContent = "OOPS SORRY!! TRY A SMALLER NUMBER "
            msg2.textContent = "No of Guesses:" +no_guess;
            msg3.textContent = "Guessed numbers are:" +guess_num;
        }
        else if(user_guess==answer)
        {
            msg1.textContent = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN"
            msg2.textContent = "The Number was :" +answer
            msg3.textContent = "You guessed in :"  + no_guess +  "Guesses";
            
            
        }
    }

}