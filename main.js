const value = document.querySelector("#value")

const incrementbtn = document.querySelector("#incrementbtn")
const decrement = document.querySelector("#decrement")
const Resetbtn = document.querySelector("#Resetbtn")

let startvalue= 0
incrementbtn.addEventListener("click",function(){
    startvalue++;
    value.innerHTML=startvalue
    if(startvalue==10){
        value.style.color="red"
        
    }
    else{
        value.style.color="black"

    }
})

Resetbtn.addEventListener("click",function(){
    startvalue =0;
    value.innerHTML=startvalue
})

decrement.addEventListener("click",function(){
    if(startvalue>0){
        startvalue--
        value.innerHTML=startvalue
        
    }
    if(startvalue==10){
        value.style.color="red"
        
    }
    else{
        value.style.color="black"

    }
})


// startvalue = 0;
// function counter(e) {
//   const btn = e.target.id;
//   if (incrementbtn == 'incrementbtn') {
//     startvalue += 1;
//   } else if (decrement == 'decrement') {
//     startvalue =1 &&startvalue>=1;
//   } else {
//     startvalue == 0;
//   }
// }