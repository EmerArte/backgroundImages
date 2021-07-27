const link =
  "https://api.unsplash.com/photos/?client_id=JaG19GvYsAJ3tA30CeTCDzK6b94avjuZ_wvYLF6Of0M";
const boton = document.querySelector("#add");
const container = document.querySelector("#img");
let contador=0;

fetch(link)
  .then((response) => response.json())
  .then((data) => {
    //data.forEach((element) => {
      //let img = document.createElement("img");
      //const cont = document.createElement("div");
      //img.classList = "w-full";
      //img.src = element.urls.full;
      //cont.classList = "w-1/2 mx-auto box-border mt-4";
      
      boton.addEventListener("click", (event) => {
        let img = document.createElement("img");
        const cont = document.createElement("div");
        img.classList = "w-full";
        img.src=data[contador].urls.full;
        cont.classList = "w-1/2 mx-auto box-border mt-4";
        cont.append(img);
        container.append(cont);
        contador++;
    });
    //});
  });

