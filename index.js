import { dogsData } from "./data.js";
import Dog from "./Dog.js";

// List the dogs to cycle through.
let dogArray = ['one', 'two', 'three'];
let contentImage = document.getElementById('content-image');
let contentReaction = document.getElementById('content-reaction')
const heartButton = document.getElementById('heart-btn');
const xmarkButton = document.getElementById('xmark-btn');

// Get the next in the dogArray.
function getNewDog() {
  const nextDogData = dogsData[dogArray.shift()];
  return nextDogData ? new Dog(nextDogData) : undefined;
}
let dog = getNewDog();

function render() {
  console.log(dog);
  if (dog) {
    contentImage.innerHTML = dog.getDogHtml();
  } else {
    contentImage.innerHTML = `
    <div id="reset-container">
      <div class="done">You have exhausted your options!</div>
      <button id="reset-btn">Reset</button>
    </div>
    `;
    document.getElementById('reset-btn').addEventListener('click', reset);
  }
}
render();

function reactToPost(e) {
  console.log(e.target)
  if (e.target.id === 'heart-btn' || e.target.parentElement.id === 'heart-btn') {
    contentReaction.innerHTML = `
      <img class="like-img" src="./images/like-image.png"></img>
    `
    dog.hasBeenLiked = true;
    dog.hasBeenSwiped = true;
  } else if (e.target.id === 'xmark-btn' || e.target.parentElement.id === 'xmark-btn') {
    contentReaction.innerHTML = `
      <img class="nope-img"src="./images/nope-image.png"></img>
    `
    dog.hasBeenSwiped = true;
  }

  setTimeout(() => {
    contentReaction.innerHTML = ``
    dog = getNewDog();
    console.log("newDog", dog);

    render()
  }, 1000);
}

function reset() {
  dogArray = ['one', 'two', 'three'];
  dog = getNewDog();
  render();
}

heartButton.addEventListener('click', reactToPost);
xmarkButton.addEventListener('click', reactToPost);
