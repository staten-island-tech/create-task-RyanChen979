import "../style/style.css";
const url = "https://www.boredapi.com/api/activity/";

async function food(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    console.log(`Activity: ${data.activity}`);
    console.log(`Type: ${data.type}`);
    console.log(`Participants: ${data.participants}`);
    console.log(`Accessibility: ${data.accessibility}`);
  } catch (error) {
    console.error("There's a problem with the API");
  }
}
food(url);
