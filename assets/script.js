//----------------------------------------Assignment Code----------------------------------------
const startButton = document.getElementById("startButton");
const intro = document.getElementById("intro");
const answerOptions = document.querySelector("ol");

const prompts = [
    {
        question: "Commonly used data types DO NOT include _____.",
        options: ["strings", "booleans", "alets", "integers"],
        answer: "alets"
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curley brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["integers and strings", "booleans", "other arrays", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must enclosed within _____ when being assigned to variables",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debuggin for printing content to the debugger is _____.",
        options: ["JavaScript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        question: "In JavaScript, we can compare strings and integers assuming only numbers are inside the string.",
        options: ["true", "false"],
        answer: "true"
    },
    {
        question: "In JavaScript variable can hold an integer value and later be reassigned a boolean value.",
        options: ["true", "false"],
        answer: "true"
    },
    {
        question: "The term used to define a function prototype is _____.",
        options: ["let", "funct", "function", "none is required"],
        answer: "function"
    },
    {
        question: "Java and JavaScript are considered to be basically the same in all aspects.",
        options: ["true", "false"],
        answer: "false"
    },
    {
        question: "Who is the best programmer in class.",
        options: ["Krystian", "Krystian", "Krystian", "Krystian"],
        answer: "Krystian"
    }
];

function displayIntro(boolean) {
    if(boolean) {
        startButton.style.display = 'block';
        intro.style.display = 'block';
        answerOptions.style.display = 'none';
    }
    else {
        startButton.style.display = 'none';
        intro.style.display = 'none';
        answerOptions.style.display = 'block';
    }
};

startButton.addEventListener("click", function() {
    displayIntro(false);
});