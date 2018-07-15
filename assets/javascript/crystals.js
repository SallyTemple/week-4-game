$(document).ready(function () {


    var wins = 0;
    var loses = 0;
    var totalScore = 0;

    $("#wins").text(wins);
    $("#loses").text(loses);

   
    function totalScore() {
        if (totalScore === numbertoGuess) {
            wins++;
            console.log(wins);
            newCrystals();
           
        } else {
            losses++;
            console.log(losses);
            newCrystals();
            
        }
    }

    $("#red").on("click", function () {
        var blue = Math.floor(Math.random() * 12) + 1;
        totalScore++
        var newDiv = $("<div>");
        newDiv.text(totalScore)
        
        var blue= document.getElementById("blue").innerHTML;
        alert("hello");
    })
    $("#blue").on("click", function () {
        var blue = Math.floor(Math.random() * 12) + 1;
        totalScore++
        var newDiv = $("<div>");
        newDiv.text(totalScore)
        
        var blue= document.getElementById("blue").innerHTML;
        alert("hello");
    })
    $("#yellow").on("click", function () {
        var yellow = Math.floor(Math.random() * 12) + 1;
        totalScore++
        var newDiv = $("<div>");
        newDiv.text(totalScore)
        
        var yellow = document.getElementById("yellow").innerHTML;
        alert("hello");
    })
    $("#green").on("click", function () {
        var green = Math.floor(Math.random() * 12) + 1;
        totalScore++
        var newDiv = $("<div>");
        newDiv.text(totalScore)
        
       document.getElementById(green).innerHTML;
        alert("hello");
    })
   
    

    function newCrystals() {
        numbertoGuess = []
        for (var i = 0; i < 19; i++) {
            var random = Math.floor(math.ramdom() * 120)

            $("#red").on("click", function () {
                var yellow = Math.floor(Math.random() * 12) + 1;
                totalScore++
                newDiv.text = (totalScore)
                var newDiv = $("<div>");
                var red = document.getElementById("red").innerHTML;

                

            })
        }
    };

    newCrystals();
    


});


