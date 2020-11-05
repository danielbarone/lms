var nope = '';
var yeah = '';
var prevCount = 0;
var count = 0;
var targetName = 'Lauren';
var targetAge = 25;
var startTime = Date.now();

function millisToMinutes(millis) {
  var minutes = Math.floor(millis / 60000);
  return minutes;
}

function getRandomInt(min, max) {
  return Math.floor((Math.random() * Math.floor(max - min)) + min);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const initBtns = () => {
  var buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let label = button.getAttribute('aria-label');
    if (label == 'Nope') {
        nope = button;
    } else if (label == 'Like') {
        yeah = button;
    }
  }
}

const storeHer = () => {
  try {
    let currGirl = document.querySelectorAll("div[aria-live='polite']")[2].querySelectorAll("span[aria-hidden='false']")[0].childNodes[0].getAttribute('style').split('"')[1];
    localStorage.setItem(`112107-${Date.now().toString()}`, currGirl);
    return true;
  } catch (e) {
    alert('Failed to set data in local storage');
    console.error(e);
    return false;
  }
}

const downloadLS = () => {
  // Console API to clear console before logging new data
  console.API;
  if (typeof console._commandLineAPI !== 'undefined') {
    console.API = console._commandLineAPI; //chrome
  } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    console.API = console._inspectorCommandLineAPI; //Safari
  } else if (typeof console.clear !== 'undefined') {
    console.API = console;
  }

  function getCurrentStoryDetail() {
    console.API.clear();
    storyObj = {};
    Object.keys(localStorage).forEach(function(key){
      let val = localStorage.getItem(key);
      if (key.substring(0,6) == '112107'){
        storyObj[key.split('-')[1]] = val;
      }
    });
    console.save(storyObj);
  }

  console.save = function (data, filename) {
    if (!data) {
      console.error('Console.save: No data')
      return;
    }

    if (!filename) filename = '112107.json'

    if (typeof data === "object") {
      data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {
      type: 'text/json'
    }),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
  }

  getCurrentStoryDetail();
}

const checkGirl = () => {
  let currGirlName = document.querySelectorAll("div[aria-live='polite']")[2].querySelectorAll("span[aria-hidden='false']")[0].childNodes[0].getAttribute('aria-label');
  if (currGirlName == targetName) {
    // TODO: What about when more than the curr girl has the target name?
    let currGirlAge = Array.from(document.querySelectorAll("span[itemprop='name']")).find(el => el.textContent === currGirlName).parentNode.nextSibling.innerText;
    if (currGirlAge == targetAge) {
      console.log("FOUND!");
      return true;
    }
  }
  return false;
}

const actReal = async () => {
  let randomInt = getRandomInt(0, 2);
  let waitTime = getRandomInt(5000, 16000);
  if (randomInt == 1) {
    yeah.click();
  } else {
    nope.click();
  }
  await delay(waitTime);
}

const checkExpiration = () => {
  if (millisToMinutes(Date.now() - startTime) >= 3) {
    if (prevCount !== count) {
      downloadLS();
      prevCount = count;
    }
    startTime = Date.now();
  }
}

const nextGirl = () => {
  if (checkGirl()) {
    if (storeHer()) {
      count += 1;
    }
  } 
  checkExpiration();
}

const main = async () => {
  initBtns();
  while (true) {
    nextGirl();
    await actReal();
  }
}