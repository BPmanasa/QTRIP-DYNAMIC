import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let url = new URLSearchParams(search);
  const adventureId = url.get("adventure");
  return adventureId;

}


  // Place holder for functionality to work in the Stubs
//   return null;
// }
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    let response = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`);
    let data = await response.json();
    return data;
  } 
  catch (error) {
    console.log(error);
    return null;
  }

  }
  




  // Place holder for functionality to work in the Stubs
  // return null;


//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  // adventure.forEach((detail) => {
  //   let adventureDetails = document.getElementsByClassName("adventure-detail-card");

  //   const adventureId = document.createElement("a");
  //   adventureId.href = `#`;
  //   adventureId.id = detail.id;

  //   let adventureheading = document.getElementById("adventure-name");
  //    adventureheading.textContent = detail.name;
  //    adventureId.appendChild(adventureheading);


  //  let adventuresubtitle = document.getElementById("adventure-subtitle");
  //   adventuresubtitle.textContent = detail.subtitle;
  //   adventureId.appendChild( adventuresubtitle);


  //   let adventuresImage = document.getElementById("photo-gallery");
  //   let imgElement = document.createElement("img");
  //   imgElement.src = detail.image;
  //   imgElement.alt = detail.name;
  //   adventureId.appendChild(adventuresImage);

  //   let adventureContent = document.getElementById("adventure-content");
  //   adventureContent.textContent = detail.content;
  //   adventureId.appendChild(adventureContent);

  //   adventureDetails.appendChild(adventureId);




    


   



  // });
  const adventureContainer = document.getElementsByClassName("adventure-detail-card")
  
  const nameElement = document.getElementById('adventure-name');
    const subtitleElement = document.getElementById('adventure-subtitle');


    const contentElement = document.getElementById('adventure-content');
    const photoGalleryElement = document.getElementById('photo-gallery');

    // Populate adventure details
    nameElement.textContent = adventure.name;
    subtitleElement.textContent = adventure.subtitle;
    contentElement.textContent = adventure.content;





    // Loop through images and create div elements for each
    adventure.images.forEach(imageSrc => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('activity-card-image'); // Apply the provided CSS class
        const image = document.createElement('img');
        image.src = imageSrc;
        // imageDiv.appendChild(image);
        photoGalleryElement.appendChild(imageDiv);
    });

    // adventureContainer.appendChild(nameElement);
    // adventureContainer.appendChild(subtitleElement);
    // adventureContainer.appendChild(textContent);
    // adventureContainer.appendChild(photoGalleryElement);

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let galleryContainer = document.createElement('div');

  let gallery = document.createElement('div');
  gallery.innerHTML = `
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
              ${images.map((_, index) => `
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}"${index === 0 ? ' class="active"' : ''} aria-label="Slide ${index + 1}"></button>
              `).join('')}
          </div>
          <div class="carousel-inner">
              ${images.map((image, index) => `
                  <div class="carousel-item ${index === 0 ? 'active' : ''}">
                      <img src="${image}" class="d-block w-100" alt="${name}">
                  </div>
              `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>`;
  galleryContainer.appendChild(gallery);

  const mainContainer = document.getElementById('photo-gallery');
  mainContainer.appendChild(galleryContainer);
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
