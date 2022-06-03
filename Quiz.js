const form = document.getElementById ("form")
form.addEventListener("submit",processing);
function processing (event){
event.preventDefault()

//const correctansw =document.getElementById("correctansw").value
let points_scored =0;
const questionone =document.querySelector("input[name='quizansw']:checked").value;

const questiontwo =document.querySelector("input[name='quizansw1']:checked").value;

const questionthree =document.querySelector("input[name='quizansw2']:checked").value;

const questionfour =document.querySelector("input[name='quizansw3']:checked").value;

const questionfive =document.querySelector("input[name='quizansw4']:checked").value;

if (questionone=="Kempiski" ) {
points_scored+=1;

}

else {
const correct_answer= document.createElement("p");
correct_answer.innerHTML="Kempiski";
document.getElementById("qzone").appendChild(correct_answer);

}
//question two
if (questiontwo=="Ximp" ) {
    points_scored+=1;
    
    }
    
    else {
    const correct_answer= document.createElement("p");
    correct_answer.innerHTML="Ximp";
    document.getElementById("qztwo").appendChild(correct_answer);
    
    }

//question three
if (questionthree=="Ultra fitness Gym" ) {
    points_scored+=1;
    
    }
    
    else {
    const correct_answer= document.createElement("p");
    correct_answer.innerHTML="Ultra fitness Gym";
    document.getElementById("qzthree").appendChild(correct_answer);
    
    }

//question four
if (questionfour=="Nyumba Cinema" ) {
    points_scored+=1;
    
    }
    
    else {
    const correct_answer= document.createElement("p");
    correct_answer.innerHTML="Nyumba Cinema";
    document.getElementById("qzfour").appendChild(correct_answer);
    
    }

//question five
if (questionfive=="Hertz Car Rentals" ) {
    points_scored+=1;
    
    }
    
    else {
    const correct_answer= document.createElement("p");
    correct_answer.innerHTML="Hertz Car Rentals";
    document.getElementById("qzfive").appendChild(correct_answer);
    
    }



total_marks=points_scored;
console.log(total_marks)

if(total_marks<=3){
    document.querySelector(".score-board").style.display="flex"
    document.getElementById("high").textContent="You can do better.Score  " + total_marks
    
   
}
else{
    document.querySelector(".score-board").style.display="flex"
    document.getElementById("high").textContent="Congrats.Your Score is " + total_marks

}


}
