import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let url = new URLSearchParams(search);
  const cityId = url.get("city");
  return cityId;
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the
  try {
    let response = await fetch(
      `${config.backendEndpoint}/adventures?city=${city}`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  // adventures.forEach( ({id, category, image, name, costPerHead, duration}) => {
  //   let ele = document.createElement("div");
  //   ele.className = "col-6 col-lg-3 mb-4";
  //   ele.innerHTML = `<a href = "detail/adventure=${id}"id = ${id}>
  //   <div class = "activity-card"
  //   <div class = "category-banner>${category}</div>
  //   <img class="img-responsive" src = ${image} alt="${name}"/>
  //   <div class="activity-card-text text-mad-center w-100 mt-3 px-2">
  //   <div class="d-block d-md-flex justify-content-between flex-wrap pl-3 pr-3">
  //   <h5 class= "text-left>${name}</h5>
  //   <p>${costPerHead}</p>
  //   </div>

  //   <div class="d-block d-md-flex justify-content-between flex-wrap pl-3 pr-3">
  //   <h5 class= "text-left>Duration</h5>
  //   <p>${duration}</p>
  //   </div>
  //   </div>
  //   </div>

  //   </a>`;
  //   document.getElementById("data").appendChild(ele);

  // });

  const adventureContainer = document.getElementById("data");

  adventures.forEach((adventure) => {
    const divElement = document.createElement("div");
    divElement.classList.add("col-6", "col-lg-3", "mb-4");

    const adventureCard = document.createElement("a");
    adventureCard.href = `detail/?adventure=${adventure.id}`;
    adventureCard.id = adventure.id;


    const cardDiv = document.createElement("div");
    adventureCard.classList.add("activity-card");
   

    const categoryBanner = document.createElement("div");
    categoryBanner.classList.add("category-banner");
    categoryBanner.textContent = adventure.category;
    adventureCard.appendChild(categoryBanner);

    // // create an image element
    // const imgDiv = document.createElement("div");

    const adventureImage = document.createElement("img");
    adventureImage.classList.add("img-responsive");
    adventureImage.src = adventure.image;
    adventureImage.alt = adventure.name;
    adventureCard.appendChild(adventureImage);

    const textDiv = document.createElement("div");
    textDiv.classList.add(
      "activity-card-text",
      "text-md-center",
      "w-100",
      "mt-3",
      "px-2"
    );

    const textDiv1 = document.createElement("div");
    textDiv1.classList.add(
      "d-block",
      "d-md-flex",
      "justify-content-between",
      "flex-wrap",
      "pl-3",
      "pr-3"
    );
    const heading = document.createElement("h5");
    heading.classList.add("text-left");
    heading.textContent = adventure.name;
    const para = document.createElement("p");
    para.textContent = "₹" + adventure.costPerHead;

    textDiv1.appendChild(heading);
    textDiv1.appendChild(para);

    const textDiv2 = document.createElement("div");
    textDiv2.classList.add(
      "d-block",
      "d-md-flex",
      "justify-content-between",
      "flex-wrap",
      "pl-3",
      "pr-3"
    );
    const heading2 = document.createElement("h5");
    heading2.classList.add("text-left");
    heading2.textContent = "Duration";

    const para2 = document.createElement("p");
    para2.textContent = adventure.duration + " hours";
    textDiv2.appendChild(heading2);
    textDiv2.appendChild(para2);

    textDiv.appendChild(textDiv1);
    textDiv.appendChild(textDiv2);
    adventureCard.appendChild(cardDiv);

    adventureCard.appendChild(textDiv);

    divElement.appendChild(adventureCard);
    adventureContainer.appendChild(divElement);

    // const adventureName = document.createElement('p');
    // adventureName

    //
  });
  // }
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods

  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object

  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
