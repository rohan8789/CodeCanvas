const MIN_SIZE = 2;
const MAX_SIZE = 30;
const DEFAULT_SIZE = 15;

const WAITING_TIME = 100;

const MIN_SPEED = 1;
const MAX_SPEED = 4;
const DEFAULT_SPEED = 3;

const arr = [];
var delay;
const size = DEFAULT_SIZE;
const UNSORTED = "red";
const SORTED = "mediumspringgreen";
const COMPARE = "blueviolet";
const SELECTED = "yellow";
//For merge and Quick Sort
const LEFT = "white";
const RIGHT = "black";

init();

function init() {
  for (var i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100) + 9;
  }
  showbars();
}

function showbars() {
  document.getElementById("arrayContainer").innerHTML = "";
  for (var i = 0; i < size; i++) {
    console.log(arr[i]);
    const bar = document.createElement("div");
    bar.id = "barId" + i;
    bar.className = "barr";
    bar.innerHTML = `<b>${arr[i]}</b>`;
    bar.setAttribute("data-value", arr[i]);
    bar.style.color = "white";
    bar.style.backgroundColor = UNSORTED;
    bar.style.height = arr[i] * 4 + "px";
    bar.classList.add("bar");
    arrayContainer.appendChild(bar);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setColor(id, color) {
  document.getElementById("barId" + id).style.backgroundColor = color;
}

function swap(i, j) {
  let tt = document.querySelectorAll(".barr");
  let ttt = tt[i].innerHTML;
  tt[i].innerHTML = tt[j].innerHTML;
  tt[1].innerHTML = ttt;
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  var h1 = document.getElementById("barId" + i).style.height;
  var h2 = document.getElementById("barId" + j).style.height;
  setHeight(i, h2);
  setHeight(j, h1);
}

function setHeight(id, height) {
  document.getElementById("barId" + id).style.height = height;
}

function setHeight2(id, height) {
  document.getElementById("barId" + id).style.height = height * 4 + "px";
}

//for merge and Quick Sort
function setColorRange(p, r, color) {
  for (var i = p; i <= r; i++) {
    document.getElementById("barId" + i).style.backgroundColor = color;
  }
}

//main function
document.addEventListener("DOMContentLoaded", function () {
  const speedSlider = document.getElementById("speed-slider");
  speedSlider.setAttribute("min", MIN_SPEED);
  speedSlider.setAttribute("max", MAX_SPEED);
  speedSlider.setAttribute("value", DEFAULT_SPEED);

  delay = WAITING_TIME * Math.pow(2, MAX_SPEED - DEFAULT_SPEED);
  document.getElementById("initialize").addEventListener("click", function () {
    init();
  });

  setColorRange(0, size - 1, UNSORTED);


  


  document.getElementById("idx1").addEventListener("click", async function () {
    document.getElementById("initialize").disabled = true;
    for (var i = 1; i <= 5; i++) {
      if (i != 1) document.getElementById("idx" + i).disabled = true;
    }
    await selectionSort(arr);
    document.getElementById("initialize").disabled = false;
    for (var i = 1; i <= 5; i++) {
      if (i != 1) document.getElementById("idx" + i).disabled = false;
    }
  });

  document.getElementById("idx2").addEventListener("click", async function () {
    document.getElementById("initialize").disabled = true;
    for (var i = 1; i <= 5; i++) {
      if (i != 2) document.getElementById("idx" + i).disabled = true;
    }
    await insertionSort(arr);
    document.getElementById("initialize").disabled = false;
    for (var i = 1; i <= 5; i++) {
      if (i != 2) document.getElementById("idx" + i).disabled = false;
    }
  });

  document.getElementById("idx3").addEventListener("click", async function () {
    document.getElementById("initialize").disabled = true;
    for (var i = 1; i <= 5; i++) {
      if (i != 3) document.getElementById("idx" + i).disabled = true;
    }
    await bubbleSort(arr);
    document.getElementById("initialize").disabled = false;
    for (var i = 1; i <= 5; i++) {
      if (i != 3) document.getElementById("idx" + i).disabled = false;
    }
  });

  document.getElementById("idx4").addEventListener("click", async function () {
    document.getElementById("initialize").disabled = true;
    for (var i = 1; i <= 5; i++) {
      if (i != 4) document.getElementById("idx" + i).disabled = true;
    }
    await mergeSort(0, size - 1);
    document.getElementById("initialize").disabled = false;
    for (var i = 1; i <= 5; i++) {
      if (i != 4) document.getElementById("idx" + i).disabled = false;
    }
  });

  document.getElementById("idx5").addEventListener("click", async function () {
    document.getElementById("initialize").disabled = true;
    for (var i = 1; i <= 5; i++) {
      if (i != 5) document.getElementById("idx" + i).disabled = true;
    }
    await quickSort(0, size - 1);
    document.getElementById("initialize").disabled = false;
    for (var i = 1; i <= 5; i++) {
      if (i != 5) document.getElementById("idx" + i).disabled = false;
    }
  });

  

  Slider = document.getElementById("speed-slider");
  delay = WAITING_TIME * Math.pow(2, MAX_SPEED - Slider.value);

  speedSlider.addEventListener("input", function () {
    delay = WAITING_TIME * Math.pow(2, MAX_SPEED - this.value);
  });
});
