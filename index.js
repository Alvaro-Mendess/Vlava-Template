

var original = `<div style="border: 1px solid red">
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">TITTLE</a></h4>
<p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
</div>`

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            var services = document.getElementById("Services");
            var ser = document.createElement("div");
            var content = original;
            content = content.replace("TITTLE",element.name);
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
