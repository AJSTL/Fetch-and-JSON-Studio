window.addEventListener("load", function(){

    let json = [];
    let index = 0;

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const astronauts = document.getElementById("container");
            astronauts.innerHTML = `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[index].firstName} ${json[index].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[index].hoursInSpace}</li>
                        <li>Active: ${json[index].active}</li>
                        <li>Skills: ${json[index].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[index].picture">
            </div>`
            index = (index + 1) % json.length;



            // HTML TEMPLATE:
            //<div class="astronaut">
            //    <div class="bio">
            //       <h3>Mae Jemison</h3>
            //       <ul>
            //          <li>Hours in space: 190</li>
            //          <li>Active: false</li>
            //          <li>Skills: Physician, Chemical Engineer</li>
            //       </ul>
            //    </div>
            //    <img class="avatar" src="images/mae-jemison.jpg">
            // </div>

            // EXAMPLE FROM EXERCISES:
            // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            //     response.json().then(function(json) {
            // const destination = document.getElementById("destination");
            // destination.addEventListener("click", function(){
            //     destination.innerHTML = `
            //         <div>
            //         <h3>Planet ${json[index].name}</h3>
            //         <img src=${json[index].image} height=250></img>
            //         </div>
            //     `;
            //     index = (index + 1) % json.length;
        });

    });
});