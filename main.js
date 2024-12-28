alert("Hello Friend 👋")
alert("I hope you are fine!")
alert("Want to find your percentage here I will help you!")

let Obtained = prompt("Enter your Obtained number ");

let Total = prompt("Enter your Total number ");

let Percentage = (Obtained / Total) * 100;

let round = Math.round(Percentage)

alert("Your percentage is " + Percentage + "%");

if (Percentage === 80) {
    alert("Congratulations! You got an A+!");
}

else if (Percentage >= 70 && Percentage < 80) {
    alert("Congratulations! You got an A!");
}

