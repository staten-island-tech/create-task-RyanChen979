import "../style/style.css";
import { DOM } from "./dom.js";
const url = "https://www.boredapi.com/api/activity/";

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
      <div class="activity">Activity: ${activityData.activity}</div>
      <div class="type">Type: ${activityData.type}</div>
      <div class="participants">Participants: ${activityData.participants}</div>
      <div class="accessibility">Accessibility: ${activityData.accessibility}</div>
      `
    );
  } catch (error) {
    console.error(error);
  }
}
suggest(url);

DOM.buttonNew.onclick = async (e, url) => {
  e.preventDefault();
  suggest(url, activityData);
};
/* dom.content.insertAdjacentHTML(
  "beforeend",
  `
    <div class="activity">Activity: ${data.activity}</div>
    <div class="type">Type: ${data.type}</div>
    <div class="participants">Participants: ${data.participants}</div>
    <div class="accessibility">Accessibility: ${data.accessibility}</div>
    `
); */
