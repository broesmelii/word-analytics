const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
    // input validation
    if (textareaEl.value.includes('<script>')) {
        alert('You cannot use that')
        textareaEl.value = textareaEl.value.replace('<script>', '')
    }

  // determine new numbers
  const numberOfCharacters = textareaEl.value.length;
  numberOfWords = (numberOfCharacters > 0) ? textareaEl.value.trim().split(" ").length : 0;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  // add visual indicator if limit is exceeded
  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  // set new numbers
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
  wordsNumberEl.textContent = numberOfWords;

};

textareaEl.addEventListener("input", inputHandler);
