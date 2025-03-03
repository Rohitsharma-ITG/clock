// jai shree ganesh:

setInterval(clock,1000);
let second_hand = document.querySelector(".second-hand");
let minute_hand = document.querySelector(".minute-hand");
let hour_hand = document.querySelector(".hour-hand");
let sec_store = "";
let minute = "";
let min_store = 0;
let sec = 0;
let hour_store = ""
let hour = 0;

function clock(){
    let date = new Date();
    let min = date.getMinutes()
    let secnd = date.getSeconds()
    let hours = date.getHours()
    let digidate = date.getDate()

    sec = secnd * 6
    mimute = min * 6 + (secnd/10)
    hour = hours * 30  + (min/2)

    sec_store = "rotate(" + secnd * 6 + "deg)"
    min_store = "rotate(" + mimute + "deg)"
    hour_store = "rotate(" + hour + "deg)"

    second_hand.style.transform = sec_store
    minute_hand.style.transform = min_store
    hour_hand.style.transform = hour_store


    document.getElementById("digi-hour").innerHTML = hours%12 + " : " + min + " : " + secnd


    document.getElementById("set_alarm").addEventListener("click",function(){
       
        var digihour = prompt("enter Hour")
        var digimin = prompt("enter minute")
        var digisec = prompt("enter second")

        if(hours%12 == digihour && min == digimin && secnd == digisec){
            alert("hello")
         }
   });
   
}








// function printSquareWithX(size) {
//   for (let i = 0; i < size; i++) {
//     let row = ''; // Initialize an empty row
    
//     for (let j = 0; j < size; j++) {
//       // Check if it's on the border or on one of the diagonals
//       if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j || i + j === size - 1) {
//         row += '*'; // Border or diagonal (X pattern)
//       } else {
//         row += ' '; // Inside the square (not border or diagonal)
//       }
//     }
    
//     console.log(row); // Print the row
//   }
// }

// // Call the function with a desired size (e.g., 7)
// printSquareWithX(7);





// function printSquareWithDiagonal(size) {
//     for (let i = 0; i < size; i++) {
//       let row = ''; // Initialize an empty row
//       for (let j = 0; j < size; j++) {
//         // Check if it's on the border or the diagonal
//         if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
//           row += '*'; // Border or diagonal
//         } else {
//           row += ' '; // Inside the square (not border or diagonal)
//         }
//       }
//       console.log(row); // Print the row
//     }
//   }
  
//   // Call the function with a desired size (e.g., 5)
//   printSquareWithDiagonal(10);