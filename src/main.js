
// query selector variables go here 👇
var image = document.querySelector('.poster-img');
var title = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');
var showRandomPosterButton = document.querySelector('.show-random');
var posterImageInput = document.querySelector('#poster-image-url');
var posterTitleInput = document.querySelector('#poster-title');
var posterQuoteInput = document.querySelector('#poster-quote');
var savedPosterGrid = document.querySelector('.saved-posters-grid');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener('load', function(event) {
  var firstPoster = getRandomPoster();
  loadPoster(firstPoster)
});

showRandomPosterButton.addEventListener('click', function(event) {
  var randomPoster = getRandomPoster();
  loadPoster(randomPoster)
});

document.querySelector('.show-form').addEventListener('click', showForm);
document.querySelector('.show-main').addEventListener('click', showMain);
document.querySelector('.show-saved').addEventListener('click', viewSaved);
document.querySelector('.back-to-main').addEventListener('click', viewSaved);
document.querySelector('.make-poster').addEventListener('click', makeMyPoster);
document.querySelector('.save-poster').addEventListener('click', saveThisPoster);


// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadPoster(poster) {
  image.src = poster.imageUrl;
  title.innerText = poster.title;
  quote.innerText = poster.quote
}

function createPoster(imageUrl, title, quote) {
  return {
    id: Date.now(), 
    imageUrl: imageUrl,
    title: title, 
    quote: quote
  }
}
  
function makeMyPoster() {
  event.preventDefault();
  image.setAttribute('src', posterImageInput.value);
  title.innerText = posterTitleInput.value;
  quote.innerText = posterQuoteInput.value;

  images.push(posterImageInput.value);
  titles.push(posterTitleInput.value);
  quotes.push(posterQuoteInput.value);
  var userPoster = createPoster(posterImageInput.value, posterTitleInput.value, posterQuoteInput.value);
  showMain();
  currentPoster = userPoster;
  return currentPoster
}
  
function getRandomPoster() {
  var randomImageIndex = getRandomIndex(images);
  var randomTitleIndex = getRandomIndex(titles);
  var randomQuoteIndex = getRandomIndex(quotes);
  var newPoster = createPoster(images[randomImageIndex],titles[randomTitleIndex],quotes[randomQuoteIndex]);
  currentPoster = newPoster;
  title.innerText = newPoster.title;
  quote.innerText = newPoster.quote;
  image.setAttribute("src", newPoster.imageUrl);
  return currentPoster
}




function saveThisPoster() {
  if(!savedPosters.includes(currentPoster)) {
  savedPosters.push(currentPoster);
      savedPosterGrid.insertAdjacentHTML('afterbegin',
      `<div class="mini-poster">
        <img src="${currentPoster.imageUrl}" alt="motivational poster">
        <h2>${currentPoster.title}</h2>
        <h4>${currentPoster.quote}</h4>
        </div>`)
  }
}

savedPosterGrid.addEventListener('dblclick', function(event) {
  var clickedElement = event.target.closest("div");
  clickedElement.remove()
});


// Button Functions
function showForm() {
  document.querySelector('.poster-form').classList.toggle('hidden');
  document.querySelector(".main-poster").classList.toggle('hidden')
}

function showMain() {
  document.querySelector('.poster-form').classList.toggle('hidden');
  document.querySelector(".main-poster").classList.toggle("hidden")
}

function viewSaved() {
  document.querySelector('.saved-posters').classList.toggle('hidden');
  document.querySelector(".main-poster").classList.toggle('hidden')
}


