const sliderHTML = document.querySelector("#slider");
const coverUrl = "./assets/img/cover/";

const initSlider = () => {
    const coverSlider = document.createElement("img");
    coverSlider.src = coverUrl + catalogue[currentTrack].cover;
    coverSlider.id = "coverSlider";
    sliderHTML.innerHTML = ''; // Supprimez le contenu précédent du slider
    sliderHTML.append(coverSlider);

    const imgA = document.createElement("img");
    imgA.src = coverUrl + catalogue[currentTrack].cover;
    imgA.id = "imgA";
    sliderHTML.append(imgA);
}

const nextSlider = () => {
    document.querySelector("#imgA").style.transform = "translateX(-100%)"; // Effectue une translation vers la gauche
    setTimeout(() => {
        document.querySelector("#imgA").src = coverUrl + catalogue[currentTrack].cover;
        document.querySelector("#imgA").style.transform = "translateX(0)"; // Remet l'image à sa position d'origine
    }, 400);
};

// Mettez à jour votre fonction slider pour qu'elle appelle nextSlider lorsque vous passez à la piste suivante
const slider = (status = "init") => {
    console.log("Initialisation du slider");
    switch (status) {
        case "init":
            initSlider();
            break;
        case "next":
            nextSlider();
            break;
        case "prev":
            // Mettez en place la logique pour la transition précédente si nécessaire
            break;
        default:
            break;
    }
}

// Gestion du bouton "next"
nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  audio("pause");
  audio();//"init";
  audio("play");
  console.log(isPlaying);
  isPlaying = true;
  statusButtonPlayPause();

});
// Gestion du bouton "playPause"
playPause.addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    audio("play");
  } else {
    isPlaying = false;
  
    audio("pause");


  }
  statusButtonPlayPause();
  // isPlaying = !isPlaying
});





// Initialisation de la page
slider();
audio();

