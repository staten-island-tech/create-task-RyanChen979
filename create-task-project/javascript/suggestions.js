import "../style/style.css";
import { DOM } from "./dom.js";
const url = "https://www.boredapi.com/api/activity/";
let activityHistory = [];
let soloHistory = [];
let multiHistory = [];

async function suggest(url) {
  try {
    let response = await fetch(url);
    let activityData = await response.json();

    DOM.content.insertAdjacentHTML(
      "beforeend",
      `
      <div data-aos="zoom-out-up" class="box">
        <div class="activity"><h2>Activity: ${activityData.activity}</h2></div>
        <div class="type"><h3>Type: ${activityData.type}</h3></div>
        <div class="participants">
          <h3>Participants: ${activityData.participants}</h3>
        </div>
        <div class="accessibility">
          <h3>Accessibility: ${activityData.accessibility}</h3>
        </div>
      </div>
      `
    );

    if (activityData.participants > 1) {
      activityHistory.push(activityData);
      multiHistory.push(activityData);
    } else {
      activityHistory.push(activityData);
      soloHistory.push(activityData);
    }

    console.log(activityData);
    console.log(activityHistory);
    console.log(soloHistory);
    console.log(multiHistory);
  } catch (error) {
    console.error(error);
  }
}
suggest(url);

DOM.buttonNew.addEventListener("click", function (e) {
  e.preventDefault();
  DOM.content.innerHTML = "";
  suggest(url);
});

DOM.buttonTen.addEventListener("click", function (e) {
  e.preventDefault();
  DOM.content.innerHTML = "";
  for (let x = 0; x < 10; x++) suggest(url);
});

DOM.historyButton.addEventListener("click", function (e) {
  e.preventDefault();
  DOM.content.innerHTML = "";

  if (activityHistory.length > 0) {
    activityHistory.forEach((el) =>
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `
      <div data-aos="zoom-out-up" class="box">
        <div class="activity"><h2>Activity: ${el.activity}</h2></div>
        <div class="type"><h3>Type: ${el.type}</h3></div>
        <div class="participants">
          <h3>Participants: ${el.participants}</h3>
        </div>
        <div class="accessibility">
          <h3>Accessibility: ${el.accessibility}</h3>
        </div>
      </div>
      `
      )
    );
  } else {
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `
      <h2>Sorry, there's nothing here. Try asking for more suggestions.</h2>`
    );
  }
});

DOM.soloButton.addEventListener("click", function (e) {
  e.preventDefault();
  DOM.content.innerHTML = "";

  if (soloHistory.length > 0) {
    soloHistory.forEach((el) =>
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `
        <div data-aos="zoom-out-up" class="box">
          <div class="activity"><h2>Activity: ${el.activity}</h2></div>
          <div class="type"><h3>Type: ${el.type}</h3></div>
          <div class="participants">
            <h3>Participants: ${el.participants}</h3>
          </div>
          <div class="accessibility">
            <h3>Accessibility: ${el.accessibility}</h3>
          </div>
        </div>
        `
      )
    );
  } else {
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `
      <h2>Sorry, there's nothing here. Try asking for more suggestions.</h2>`
    );
  }
});

DOM.multiButton.addEventListener("click", function (e) {
  e.preventDefault();
  DOM.content.innerHTML = "";

  if (multiHistory.length > 0) {
    multiHistory.forEach((el) =>
      DOM.content.insertAdjacentHTML(
        "beforeend",
        `
        <div data-aos="zoom-out-up" class="box">
          <div class="activity"><h2>Activity: ${el.activity}</h2></div>
          <div class="type"><h3>Type: ${el.type}</h3></div>
          <div class="participants">
            <h3>Participants: ${el.participants}</h3>
          </div>
          <div class="accessibility">
            <h3>Accessibility: ${el.accessibility}</h3>
          </div>
        </div>
        `
      )
    );
  } else {
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `
      <h2>Sorry, there's nothing here. Try asking for more suggestions.</h2>`
    );
  }
});
