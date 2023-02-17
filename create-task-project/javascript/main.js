import "../style/style.css";
import { dom } from "./dom.js";
const url = "https://www.boredapi.com/api/activity/";

async function food(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    console.log(`Activity: ${data.activity}`);
    console.log(`Type: ${data.type}`);
    console.log(`Participants: ${data.participants}`);
    console.log(`Accessibility: ${data.accessibility}`);

    dom.content.insertAdjacentHTML(
      "beforeend",
      `<div class="activity">Activity: ${data.activity}</div>
      <div class="type">Type: ${data.type}</div>
      <div class="participants">Participants: ${data.participants}</div>
      <div class="accessibility">Accessibility: ${data.accessibility}</div>`
    );
  } catch (error) {
    console.error("There's a problem with the API");
  }
}
food(url);
