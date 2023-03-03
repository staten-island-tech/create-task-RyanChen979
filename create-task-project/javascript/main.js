import "../style/style.css";
import { DOM } from "./dom.js";
const url = "https://www.boredapi.com/api/activity/";
let activityHistory = [];

async function suggest(url) {
  try {
    let response = await fetch(url);
    let activityData = await response.json();

    console.log(activityData);
    console.log(`Activity: ${activityData.activity}`);
    console.log(`Type: ${activityData.type}`);
    console.log(`Participants: ${activityData.participants}`);
    console.log(`Accessibility: ${activityData.accessibility}`);

    DOM.content.insertAdjacentHTML(
      "beforeend",
      `
      <div class="box">
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

    activityHistory.push(activityData);
    console.log(activityHistory);
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
  activityHistory.forEach((el) =>
    DOM.content.insertAdjacentHTML(
      "beforeend",
      `
      <div class="box">
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
});
