

let lunches = [];

function addLunchToEnd(lunches, lunchItem) {
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  lunches.push(lunchItem);
  return lunches;
}
function addLunchToStart(lunches,lunchItem){
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  lunches.unshift(lunchItem);
  return lunches;
}
function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return;
  }
  const removed = lunches.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return lunches;
}
function removeFirstLunch(lunches){
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return;
  }
  const removed = lunches.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return lunches;
}
function getRandomLunch(array){
  if(array.length === 0 ){
    console.log("No lunches available.");
  }else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomLunch = array[randomIndex];
    console.log("Randomly selected lunch: " + randomLunch)
  
}}
  

function showLunchMenu(menu) {
  if (menu.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${menu.join(", ")}`);
  }
}
  



  





