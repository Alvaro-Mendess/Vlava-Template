

var original = `<div style="border: 1px solid red">
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">TITTLE</a></h4>
<p class="description">DESCRIPTION</p>
</div>`

/*fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            var services = document.getElementById("Services");
            var ser = document.createElement("div");
            var content = original;
            content = content.replace("TITTLE", element.name);
            ser.innerHTML = content;
            ser.className = "col-lg-4 col-md-6 icon-box";

            services.appendChild(ser);

        });
    })*/

/*fetch("http://localhost:3000/services")
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            var services = document.getElementById("Services");
            var ser = document.createElement("div");
            var content = original;
            content = content.replace("TITTLE", element);
            ser.innerHTML = content;
            ser.className = "col-lg-4 col-md-6 icon-box";

            services.appendChild(ser);

        });
    })*/

//For Excel   
fetch("http://localhost:3000/services") //AJAX Asynchronous JavaScript And XML
    .then(response => response.json())
    .then(json => {
        json.Services.forEach(element => {
            var services = document.getElementById("Services");
            var ser = document.createElement("div");
            var content = original;
            content = content.replace("TITTLE", element.A);
            content = content.replace("DESCRIPTION", element.B);

            ser.innerHTML = content;
            ser.className = "col-lg-4 col-md-6 icon-box";

            services.appendChild(ser);

        });
    })
//Heroku Hosted API https://hostapi211.herokuapp.com/

fetch("https://hostapi211.herokuapp.com/services") //AJAX Asynchronous JavaScript And XML
    .then(response => response.json())
    .then(json => {
        json.Services.forEach(element => {
            var services = document.getElementById("Services");
            var ser = document.createElement("div");
            var content = original;
            content = content.replace("TITTLE", element.A);
            content = content.replace("DESCRIPTION", element.B);

            ser.innerHTML = content;
            ser.className = "col-lg-4 col-md-6 icon-box";

            services.appendChild(ser);

        });
    })

/*for (let i = 0; i < 6; i++) {

    var services = document.getElementById("Services");
    var ser = document.createElement("div");
    ser.innerHTML = content;
    ser.className = "col-lg-4 col-md-6 icon-box";

    services.appendChild(ser);

}*/
