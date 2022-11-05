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
   "Love your family, work super hard, live your passion","One small kind action can make someones day", 
   "if you learn something new every day, you can teach something new every day",
   "New month, new goals, new mindset", "Persist, persever, life is given you the opportunity now dont let one moment escape your capacity to have, be or get what you want",
   "dont be like a parrot; be like an eagle. A parrot speaks but can't fly high whereas an eagle is silent and has the willpower to touch to the sky!",
   "the road to success is always under construction you could ecounter potholes and delays but you must keep your eye on the goal and keep moving",
   "your inner nature is bliss and joy, clean your mind of thoughts and worries and you will find this treasure within you",
   "Always have a distinct character like salt, its presence is not felt but its absence makes all things tasteless",
   "if you loss an opportunity, dont close your eyes with tears.keep your vision clear, so that you dont miss the second chance",
   "Success lies not in the result, but in the effort, being the best is not at all important, doing your best is all that matters",
   "Good decissions come from experience and experience comes from bad decisions. Every failure teaches you a new way to succeed",
   "So many of our dreams at first seem impossible, then they seem improbale and then when we summon the will, they soon become inevitable",
   "Troubles are like washing machines they twist, turn, and knock us around, but in the end we come out cleaner, brighter and better than before",
   "Cherish your wishes and your dreams, as they are the children of your ultimate achievement",
   "No days is perfect; you might have a rough patches, but the point is to come out of it without too many scratches",
   "Take a bowl, put all your mistakes in it and nix them well. this collection of mistakes is EXPERIENCE",
   "Associate yourself with men of good quality if you esteem your own reputation, for its better to be alone than in bad company",
   "we dream, think, plan, hope and even pray; but without the gift of persistence, our lives will be nothing more than empty wishes",
   "To forgive is the highest, most beautiful form of love. in return, you will receive untold peace and happiness",
   "If you dont go after your need, you'll never have it. if you dont ask, the answer is always no. if you dont step forward, you're always in the same place",
   "do not go where the path may lead, go instead where there is no path and leave a trail.Be a trilblazer",
   "To be in the company of a wise man is like going into a perfumery. you may not buy a thing, but the sweet scent will cling to you for a day.",
   "Victory isn't defined by wins or losses. it's defined by effort. if you can truthfully say I did my best, I gave everything I had, then you're a winner",
   "If you have no confidence in yourdelf, you are twise defeated in the race of life. with confindence, you have won even before you have started.",
   "History has it that most notable winners usually encounter obstacles before they triumphed, they won because they refused to become discouraged by their defeats",
   "Champions aren't made in stadiums they are made from something deep inside of them. A desire,dream, and vision they have to have that last minute stamina",
   "To succeed in life, you must be able to work alongside people without alloing yourself to be controlled by their moods or opinions. Never try to impress anyone",
   "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time",
   "The future belongs to those who believe in the beauty of their dreams",
   "The ma who trims himself to suit everybody will soon whitle himself away",
   "You gain strenght and confidence by exprience in which you really stop to look fear in the face. You most do things that you cant do",
   "The pessimist complains about the sun; the opmimist get a tan; the futurist makes electricity. Which do you choose to do ?",
   "You can conquer always any fear if you will only make up your mind to do so. For fear donsn't exist anywhere else except in the mind.",
   "Only in the still waters, dose one find undistored images and only a mind that is calm, can fathom the complexities of life",
   "We can't make people better by trying to eliminate their weaknesses, but we can help the perform better by building on their strenght",
   "The World is not a parking place; it's a racrtrack, keep moving. No matter when and where you start, you can reach your goal and make a new record!",
   "Luck has a peculiar habit of favoring those who don't depend on it. so just believe in yourself and find a way to your dreams.",
   "The weak can never forgive, Forgiveness is the attribute of the strong",
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