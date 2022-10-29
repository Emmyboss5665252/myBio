window.addEventListener('load', ()=>{

    const skills = ["HTML5", "JavaScript", "CSS 3", "Python", "FastAPI", "SQL","Vue 3"]
    let ul = document.querySelector("#list")
    skills.forEach(skills => {
        // function code
        let li = document.createElement("li")
        li.innerHTML = skills
        ul.appendChild(li)
    })

    let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  " Do more of what makes you happy.", "Always remember that happiness is not by chance, but by chioce",
  "A golden egg of opportunity falls into your lap this month.","You are the one never forget that",
  "A smile is your personal welcome mat.","Consistency is the ingredient to success",
  "All your hard work will soon pay off.","Just one small positive thought in the morning can change your whole day", "it is never too late to be what you might have been",
   "Love your family, work super hard, live your passion", 
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow to see more or refresh the page!";
  button.style.cursor = "default";

  
button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);

/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});
})