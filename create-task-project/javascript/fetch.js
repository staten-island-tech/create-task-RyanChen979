const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "07503f6478mshd512f984662b43ep15471fjsn7813465233a5",
    "X-RapidAPI-Host": "maptoolkit.p.rapidapi.com",
  },
};

fetch(
  "https://maptoolkit.p.rapidapi.com/route?points=48.202596%2C16.369801%7C48.208373%2C16.370401&routeType=bike",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
console.log(response);
