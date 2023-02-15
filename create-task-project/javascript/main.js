import "../style/style.css";
const url = "www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";

async function food(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
food();
