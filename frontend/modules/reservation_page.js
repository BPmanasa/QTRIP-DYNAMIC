import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try{
  const response = await fetch(`${config.backendEndpoint}/reservations`);
  const data = await response.json();
  return data;

  // if(response.ok){
  //   return reserved;

  // }
  // else{
  //   throw new Error('Failed to fetch reservations');
  // }
}
catch(error){
    console.log(error);
    return null;

  }
  
}




  // Place holder for functionality to work in the Stubs
//   return null;


//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table

  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>,
     class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm

  */
    const reservationTable = document.getElementById('reservation-table');
    const noReservationBanner = document.getElementById('no-reservation-banner');
    const reservationTableParent = document.getElementById('reservation-table-parent');

    
    if (reservations.length === 0) {
        noReservationBanner.style.display = 'block';
        reservationTableParent.style.display = 'none';
    } else {
        noReservationBanner.style.display = 'none';
        reservationTableParent.style.display = 'block';
    }
    reservationTable.innerHTML="";
    
    reservations.map((key, index) => {
      const row = document.createElement("tr");
      const formattedDate = new Date(key.date).toLocaleDateString("en-IN");
      const options = {
               year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true
            };
      const formattedTime = new Date(key.time).toLocaleString("en-IN", options).replace(" at", ",");
      row.innerHTML = 
      `<td>${key.id}</td>
       <td>${key.name}</td>
       <td>${key.adventureName}</td>
       <td>${key.person}</td>
       <td>${formattedDate}</td>
       <td>${key.price}</td>
       <td>${formattedTime}</td>
       <td><div class = 'reservation-visit-button' id='${key.id}'>
       <a href="../detail/?adventure=${key.adventure}">Visit Adventure</a></div>
       
  `
  reservationTable.appendChild(row);



     
    });
        // for (const reservation of reservations) {
        //     const row = reservationTable.insertRow();

        //     const transactionIdCell = row.insertCell();
        //     const bookingNameCell = row.insertCell();
        //     const adventureCell = row.insertCell();
        //     const personsCell = row.insertCell();
        //     const dateCell = row.insertCell();
        //     const priceCell = row.insertCell();
        //     const bookingTimeCell = row.insertCell();
        //     const actionCell = row.insertCell();

        //     const formattedDate = new Date(reservation.date).toLocaleDateString('en-IN');
        //     const options = {
        //       year: "numeric",
        //       month: "long",
        //       day: "numeric",
        //       hour: "numeric",
        //       minute: "numeric",
        //       second: "numeric",
        //       hour12: true
        //     };
            
        //     const formattedTime = new Date(reservation.time).toLocaleString("en-IN", options)
        //       .replace(" at", ",");
        //     // const formattedBookingTime = new Date(reservation.time).toLocaleString('en-IN', {
        //     //     year: 'numeric',
        //     //     month: 'long',
        //     //     day: 'numeric',
        //     //     hour: 'numeric',
        //     //     minute: 'numeric',
        //     //     second: 'numeric',
        //     //     hour12: true
        //     // });

        //     transactionIdCell.textContent = reservation.id;
        //     bookingNameCell.textContent = reservation.name;
        //     adventureCell.textContent = reservation.adventureName;
        //     personsCell.textContent = reservation.person;
        //     dateCell.textContent = formattedDate;
        //     priceCell.textContent = reservation.price;
        //     bookingTimeCell.textContent = formattedTime;

        //     const adventureLink = document.createElement('a');
        //     const reservationDivElement = document.createElement('div');
        //     adventureLink.className = 'reservation-visit-button';
        //     adventureLink.textContent = 'Visit Adventure';
        //     adventureLink.href = `../detail/?adventure=${reservation.adventure}`;
        //     adventureLink.id = reservation.id; // Assuming reservation id
        //     reservationDivElement.appendChild(adventureLink);
        //     actionCell.appendChild(adventureLink);
        // }
    
}

export { fetchReservations, addReservationToTable };
