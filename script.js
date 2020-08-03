// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form")
   let faulty = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus")
   let launchStatus = document.getElementById("launchStatus");
 
   
  
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotName = pilotNameInput.value;
      let copilotName = copilotNameInput.value;
      let isFormReady = true;
      


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || fuelLevelInput.value <= 0 || isNaN(cargoMassInput.value) || cargoMassInput.value <= 0) {
         alert("All fields required ya goof!");
         isFormReady = false;
         event.preventDefault();
         
      } 
      if (isFormReady) {
         let isShuttleReady = true;

         if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
            alert("Names can't be numbers!")
         faulty.style.visibility = "invisible";
         // fuelStatus.innerHTML = "Not enough fuel for the journey!";
         // launchStatus.innerHTML = "Shuttle not ready for launch";
         // launchStatus.style.color = "Red";
         isShuttleReady = false;
         event.preventDefault();
         return
           };
      
         if (fuelLevelInput.value < 10000) {
            alert("Enter a correct fuel input!")
         faulty.style.visibility = "visible";
         faulty.innerHTML = `<ol>
         <li id="pilotStatus">${pilotName} Ready</li>
         <li id="copilotStatus">${copilotName} Ready</li>
         <li id="fuelStatus">Fuel level too low for launch! Fuel Up!</li>
         <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>`;
         launchStatus.style.color = "Red";
         isShuttleReady = false;
         event.preventDefault();
        } else {
           fuelLevelInput.innerHTML = "Fuel ready for launch!"
        }
        if (cargoMassInput.value > 10000) {
         faulty.style.visibility = "visible";
         faulty.innerHTML = `<ol>
         <li id="pilotStatus">${pilotName} Ready</li>
         <li id="copilotStatus">${copilotName} Ready</li>
         <li id="fuelStatus">Fuel level high enough for launch</li>
         <li id="cargoStatus">Cargo mass too high for launch! Treadmill time!</li>
         </ol>`;
         launchStatus.style.color = "Red";
         isShuttleReady = false;
         event.preventDefault();
        } else {
           cargoMassInput.innerHTML = "Weight is good!";
        }
      
        
   //   if (Number(copilotNameInput.value) === (copilotNameInput.value)) {
   //    alert("coNames can't be numbers either!")
   // faulty.style.visibility = "invisible";
   // // fuelStatus.innerHTML = "Not enough fuel for the journey!";
   // // launchStatus.innerHTML = "Shuttle not ready for launch";
   // // launchStatus.style.color = "Red";
   // isShuttleReady = false;
   // event.preventDefault();


        if(isShuttleReady) {
           let pilotName = pilotNameInput.value;
           let copilotName = copilotNameInput.value;
         
         faulty.style.visibility = "visible";
         faulty.innerHTML = `<ol>
         <li id="pilotStatus">${pilotName} Ready</li>
         <li id="copilotStatus">${copilotName} Ready</li>
         <li id="fuelStatus">Fuel level high enough for launch</li>
         <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>`;
         launchStatus.innerHTML = "Shuttle is ready for launch!";
         launchStatus.style.color = "Green";
         event.preventDefault()
            };
          };
        });
      });



   
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
        let data = json;
        console.log(data);
         div.innerHTML = `
         <ul>
         <h2>Mission Destination</h2><ol>
         <li>Name: ${data[4].name}</li> 
         <li>Diameter: ${data[4].diameter}</li>
         <li>Star: ${data[4].star}</li>
         <li>Distance from Earth: ${data[4].distance}</li>
         <li>Number of Moons: ${data[4].moons}</li>
         <img src=${"https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg"}>
         </ul>
         </ol>
         `
        })
      })
    });