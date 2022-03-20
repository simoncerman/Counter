/**
 * Increse count on click on right arrow button
 */
document.getElementById("btn-right").addEventListener("click", () => {
  let count = document.getElementById("count");
  count.innerHTML = parseInt(count.innerHTML) + 1;
});
/**
 * Decrese count on click on left arrow button
 * You cant go below zero
 */
document.getElementById("btn-left").addEventListener("click", () => {
  let count = document.getElementById("count");
  if (parseInt(count.innerHTML) > 0) {
    count.innerHTML = parseInt(count.innerHTML) - 1;
  }
});
/**
 * This part is handling clicking space for incresing
 */
document.getElementsByTagName("body")[0].addEventListener("keyup", () => {
  if (event.keyCode === 32) {
    let count = document.getElementById("count");
    count.innerHTML = parseInt(count.innerHTML) + 1;
  }
});
