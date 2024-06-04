const numbers = [3, 5, 7, 8, 9];
const target = 8;
let listHtml = document.querySelector('.div-list-grid')  //Creates html of array using loop 
let a = 0; // Used as slider for div of circle (it is giving bug for document.querySelector('.div-circle').style.left)
//Creation of html for array
for(let i=0; i<5; i++){
  listHtml.innerHTML = listHtml.innerHTML + `
  <div class="element-${i}">${numbers[i]}</div>
  `
}
// let variation = listHtml.style.width ;
// console.log(variation)
let intervalId = setInterval(showAnimation, 2000); //Used as actual loop
i=0; //Used i as loop initialisation in function showAnimation
function showAnimation(){
  if(numbers[i]===target){
    document.querySelector('.div-result-text').innerHTML = `Found at : ${i}` //Indicates index at which target is found
    clearInterval(intervalId); //escaping the loop
    return;
  }
  a += 40; //Hardcoded sliding value for circle
  document.querySelector('.div-circle').style.left = `${a}px` //assigning slider value
  i++; //loop incrementer
}