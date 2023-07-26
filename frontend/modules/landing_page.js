import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log(cities);
  console.log(`52.66.78.120:8082/cities`);
  console.log("From init()");

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data

  try {
    let response = await fetch(`${config.backendEndpoint}/cities`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;

  }
  // fetch("http://3.6.117.203:8082/cities")
  //   .then((response) =>  response.json())
  //   .then((data) => {
  //     console.log(data);
  //     return data
  //   }).catch((error) =>  error)
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the
  // const container = document.getElementById("data");
  // const cityElement = document.createElement("div");
  // cityElement.classList.add("city");
  // cityElement.dataset.id = id;
  // container.appendChild(cityElement);
  // console.log(container);
  const addCity = document.getElementById("data");
  let cityDivEle = document.createElement("div");
  cityDivEle.classList.add("col-sm-6", "col-lg-3", "mb-4");
  cityDivEle.innerHTML = `<a href="pages/adventures/?city=${id}" id = "${id}">
  <div class = "tile">
  <img src = "${image}" alt = "Image not available"/>
  <div class = "tile-text text-center">
  <h3>${city}</h3>
  <p>${description}</p>

  </div>
  
  </div>
  
  </a>`;
  addCity.appendChild(cityDivEle);
}

export { init, fetchCities, addCityToDOM };
