# Counter
## Table of content

- [Counter](#counter)
  - [Table of content](#table-of-content)
  - [Introduction](#introduction)
  - [Working](#working)
    - [HTML](#html)
    - [Javascript](#javascript)
    - [CSS](#css)

## Introduction
This small project is just a little counter. Nothing else. It is created to demonstrate some simple ways to create little, but powerfull counter. It can be used for counting orders, people or it can be used when you are training yourself in the gym. It is not completed app, but it is created for example to be reprocessed in other projects and maybe reworked to some framework like react for wide use.

## Working

### HTML 
Simple html structure
```
    <div class="counter">
      <div id="btn-left" class="button"><</div>
      <div id="count">0</div>
      <div id="btn-right" class="button">></div>
    </div>
    <h3>you can tap space too!</h3>
```
For centering all i am using just body, but it is not hard to change that. You just need to understand the concept. My styles are created by hand, but i designed it in Figma. I will go later on on that topick.

### Javascript
Using addEventListener from js file
```
/**
 * Increse count on click on right arrow button
 */
document.getElementById("btn-right").addEventListener("click", () => {
  let count = document.getElementById("count");
  count.innerHTML = parseInt(count.innerHTML) + 1;
});
```
This is just simple code to adding to one to counter. I used this because it is much clleaner code in simple html structure and all functionality is done by Javascript. In this code snippet you can see im getting count from *innerHTML* and later a am parsing it before incrementing. It is done because i need to have number back and not string. 

```
/**
 * This part is handling clicking space for incresing
 */
document.getElementsByTagName("body")[0].addEventListener("keyup", () => {
  if (event.keyCode === 32) {
    let count = document.getElementById("count");
    count.innerHTML = parseInt(count.innerHTML) + 1;
  }
});
```
This is basicali same code as on incrementing of number. The incrementing part is same only difference is checking key. Event listener is on body, becouse when you go to site you dont need to add that listener to anything else. Just on body and whenever you click space (space have *keyCode* 32) you can add +1 to your counter. 

### CSS
Body selector and other
```
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  flex-direction: column;
}
```
Only one interesting thing on my css styles is body. There i am predefining *font-family* for document below (whole page). Also i am seting body 100vh and 100vw, so it is basicaly full-screen now. When i add *display flex* + *align-items:center* + *justify-content: center* you have full centered things inside full width/height page. All is in the middle of screen. 

I am using *margin-left: -15px;* for setting buttons under counter for style.