"use strict";

$(document ).ready(function() {

    let wins=0
    let loss=0 
    //Set the variables for each character
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let e=0;
    //random number, will add to it


    //Character numbers
    let randomNumber;
    let char1;
    let char2;
    let char3;
    let char4;
    let char5;

    //Character generates a number function

    //Creates new game without reloading page
    function game (){
        char1= (Math.floor(Math.random()*(11))+1);
        char2= (Math.floor(Math.random()*(11))+1);
        char3= (Math.floor(Math.random()*(11))+1);
        char4= (Math.floor(Math.random()*(11))+1);
        char5= (Math.floor(Math.random()*(11))+1);
        randomNumber=Math.floor((Math.random()*100)+25);
    }
    game()

    $('#scoreboard').text(randomNumber)

    //Button 1 press
    $('#btn1').click(function(){
        a = a+char1;
        let f=a+b+c+d+e;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    $('#btn2').click(function(){
        b = b+char2;
        let f=b+a+c+d+e;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    $('#btn3').click(function(){
        c = c+char3;
        let f=c+a+b+d+e;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    $('#btn4').click(function(){
        d = d+char4;
        let f=d+a+b+c+e;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    $('#btn5').click(function(){
        e = e+char5;
        let f=e+a+b+c+d;
        $('#sum').text(f)
        if(f===randomNumber){
            $("#message").text('You won!')
            wins++
        }else if (f > randomNumber){
            $("#message").text('You lost')
            loss--
        }

    });

    
    


    //Reset button
    $("#reset").click(function(){
        randomNumber="";
        $('#scoreboard,#sum').empty()
    });

    //Variables for adding the numbers 


    //Function for pressing the button

 
    






});