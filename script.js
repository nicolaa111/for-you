const messages = {
  happy: [
    "I’m really glad you’re feeling okay right now.",
    "Enjoy this moment. You earned it."
  ],
  sad: [
    "It’s okay to feel like this.",
    "You don’t have to fix anything today."
  ],
  angry: [
    "Take a breath. You’re allowed to be frustrated.",
    "This feeling will pass. I promise."
  ],
  tired: [
    "You’ve done enough for today.",
    "Rest is not a failure."
  ],
  confused: [
    "You don’t need all the answers right now.",
    "Being unsure doesn’t mean you’re lost."
  ],
  hopeful: [
    "Hold onto that spark.",
    "Good things are allowed to happen to you."
  ]
};

function chooseMood(mood) {
  document.getElementById("clickSound").play();

  const output = document.getElementById("output");
  const options = messages[mood];
  const message = options[Math.floor(Math.random() * options.length)];

  output.innerText = message;
}
