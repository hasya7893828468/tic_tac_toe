let boxes = document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let newGameBtn =document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turnO= true;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
 const resetGame =()=>{
    turnO = true;
    enabledbox()
    msgContainer.classList.add("hide")
    
 }


boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        console.log("box is clicked")
       if(turnO){
        box.innerText="O"
        box.classList.add("O")

        turnO=false
       }
       else{
       box.innerText="X"
        box.classList.add("X")
        turnO=true
        

       }
       
       box.disabled=true
       checkWinner()
    })

})



const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`
    msgContainer.classList.remove("hide") 
    disabledbox()
}

const checkWinner =()=>{

    for(let pattern of winPatterns){
       
        let position1Value =    boxes[pattern[0]].innerText
        let position2Value =     boxes[pattern[1]].innerText
        let position3Value =    boxes[pattern[2]].innerText


        if(position1Value != "" && position2Value != "" && position3Value !=""){
            if( position1Value == position2Value && position2Value == position3Value ){
            
                console.log("Winner",position1Value);
                showWinner(position1Value)
                
                
            }
        }

        

    }
}

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)