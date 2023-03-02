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
  } catch (error) {
    console.error(error);
  }
}
suggest(url);

function push2History() {}

DOM.buttonNew.addEventListener("click", function (e) {
  e.preventDefault();
  DOM.content.innerHTML = "";
  suggest(url);
});
