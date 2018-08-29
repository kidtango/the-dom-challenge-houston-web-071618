function _toConsumableArray(array) {
  if (Array.isArray(array)) {
    for (const b = 0, c = Array(a.length); b < a.length; b++) {
      c[b] = a[b];
    }
    return c;
  }
  return Array.from(a);
}

const timer = function() {
  return setInterval(function() {
    let a = document.getElementById("counter");
    let b = parseInt(a.innerText);

    a.innerText = b + 1;
  }, 1e3);
};

let interval = timer();
const minus = document.getElementById("-");
const plus = document.getElementById("+");
const heart = document.getElementById("<3");
const pause = document.getElementById("pause");
const commentForm = document.getElementsByTagName("form")[0];
const currentCounter = document.getElementById("counter");

let playing = true;

minus.addEventListener("click", function() {
  let parsedCounter = parseInt(currentCounter.innerText);
  currentCounter.innerText = parsedCounter - 1;
  console.log("Kiss my ass!");
});

plus.addEventListener("click", function() {
  let parsedCounter = parseInt(currentCounter.innerText);
  currentCounter.innerText = parsedCounter + 1;
  console.log("Fuck you!!!!");
});

heart.addEventListener("click", () => {
  let parsedCurrentCounter = parseInt(currentCounter.innerText);
  let likesElement = document.querySelector(".likes");
  // let li = void 0;

  const li = document.createElement("li");
  li.setAttribute("data-num", parsedCurrentCounter);
  li.innerHTML = parsedCurrentCounter + " has been liked <span>1</span> time";
  likesElement.appendChild(li);
});

pause.addEventListener("click", pauseToggle);

function pauseToggle() {
  if (playing) {
    clearInterval(interval);
    pause.innerText = "resume";
    playing = false;
  } else {
    interval = timer();
    pause.innerText = "pause";
    playing = !0;
  }
}

commentForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let msg = this.children[0].value;
  storedMsg = msg;
  msg = "";
  let msgPlaceholder = document.querySelector(".comments");
  console.log(msgPlaceholder);
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = storedMsg;
  msgPlaceholder.appendChild(newParagraph);
});
