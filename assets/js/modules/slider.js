
const sliderHTML = document.querySelector("#slider");
const coverUrl = "./assets/img/cover/";

const initSlider = () => {
    const coverSlider = document.createElement("img");
    coverSlider.src = coverUrl + catalogue[currentTrack].cover;
    coverSlider.id = "coverSlider";
    // prepend insere un element avant ceux qui existent déjà dans le parent
    //sliderHTML.prepend(coverSlider);
    // append insere un element après ceux qui existent déjà dans le parent
    sliderHTML.append(coverSlider);

    const imgA = document.createElement("img");
    imgA.src = coverUrl + catalogue[currentTrack].cover;
    imgA.id = "imgA";
    sliderHTML.append(imgA);


}



const slider = (status = "init") => {
    console.log("initialisation du slider");
    /* console.dir(catalogue);
    console.log(catalogue[0].cover); */
    //console.log(catalogue[0]["cover"]);

    const nextSlider = () => {
        document.querySelector("#coverSlider").src =
          coverUrl + catalogue[currentTrack].cover;
        document.querySelector("#imgA").classList.add("transSlider");
        document.querySelector("#imgA").classList.add("slideLeft");

        setTimeout(() => {
          document.querySelector("#imgA").src =
            coverUrl + catalogue[currentTrack].cover;
          document.querySelector("#imgA").classList.remove("transSlider");
          document.querySelector("#imgA").classList.remove("slideLeft");
        },500);
      };

    switch (status) {
        case "init":
            initSlider();

            break;
        case "next":
            document.querySelector("#coverSlider").src =
                coverUrl + catalogue[currentTrack].cover;
            break;
        case "prev":
            document.querySelector("#coverSlider").src =
                coverUrl + catalogue[currentTrack].cover;
            break;
        default:
            break;
    }



};

export { slider };

