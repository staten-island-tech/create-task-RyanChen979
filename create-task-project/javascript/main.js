import "../style/style.css";
import { DOM } from "./dom.js";
const url = "https://www.boredapi.com/api/activity/";
const activitySuggestions = [];

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
        <div class="activity">Activity: ${activityData.activity}</div>
        <div class="type">Type: ${activityData.type}</div>
        <div class="participants">
          Participants: ${activityData.participants}
        </div>
        <div class="accessibility">
          Accessibility: ${activityData.accessibility}
        </div>
      </div>
      `
    );
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

/* dom.content.insertAdjacentHTML(
  "beforeend",
  `
    <div class="activity">Activity: ${data.activity}</div>
    <div class="type">Type: ${data.type}</div>
    <div class="participants">Participants: ${data.participants}</div>
    <div class="accessibility">Accessibility: ${data.accessibility}</div>
    `
); */
