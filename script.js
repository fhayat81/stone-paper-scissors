let userScore = 0;
let compScore = 0;
let draw = 0;
let choices = document.querySelectorAll(".box");

let you = document.querySelector(".you");
let comp = document.querySelector(".comp");

let user_score = document.querySelector("#youScore");
let draw_score = document.querySelector("#drawScore");
let comp_score = document.querySelector("#compScore");

let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector(".new");

let array1=["Rock", "Paper", "Scissors"];
let array2 = ["<i class='fa-solid fa-hand-fist'></i>", "<i class='fa-solid fa-hand'></i>", "<i class='fa-solid fa-hand-scissors'></i>"];

function addPlay(choice)
{
    for(let i = 0; i < 3; i++)
    {
        if(choice === array1[i])
        {
            you.innerHTML = array2[i];
            you.setAttribute("id", array1[i]);
        }
    }
}

function draw_point()
{
    draw++;
    draw_score.innerHTML = draw;
    msg.innerHTML = "Draw";
    msg.style.backgroundColor = "lightgrey";
    msg.style.color = "black";
}

function user_point()
{
    userScore++;
    user_score.innerHTML = userScore;
    msg.innerHTML = you.getAttribute("id") + " beats " + comp.getAttribute("id");
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
}

function comp_point()
{
    compScore++;
    comp_score.innerHTML = compScore;
    msg.innerHTML = comp.getAttribute("id") + " beats " + you.getAttribute("id");
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
}

function result(userMove, compMove)
{
    if(userMove === compMove) draw_point();
    else if(userMove === "Rock")
    {
        if(compMove === "Paper") comp_point();
        else if(compMove === "Scissors") user_point();
    }
    else if(userMove === "Paper")
    {
        if(compMove === "Scissors") comp_point();
        else if(compMove === "Rock") user_point();
    }
    else if(userMove === "Scissors")
    {
        if(compMove === "Rock") comp_point();
        else if(compMove === "Paper") user_point();
    }
}

function compChoice()
{
    let num = Math.floor(Math.random()*3);
    comp.innerHTML = array2[num];
    comp.setAttribute("id", array1[num]);

    let userMove = you.getAttribute("id");
    let compMove = comp.getAttribute("id");

    result(userMove, compMove);
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        addPlay(userChoice);
        compChoice();
    });
})

newGameBtn.addEventListener("click", ()=>{
    userScore = 0;
    draw = 0;
    compScore = 0;
    draw_score.innerHTML = draw;
    user_score.innerHTML = userScore;
    comp_score.innerHTML = compScore;
    you.innerHTML = "";
    you.setAttribute("id", "");
    comp.innerHTML = "";
    comp.setAttribute("id", "");
    msg.innerHTML = "Pick Your Move";
    msg.style.backgroundColor = "lightgrey";
    msg.style.color = "black";
})

