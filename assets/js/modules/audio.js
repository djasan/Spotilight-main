const audio = ( status = "init") => {

    const urlAudio = "./assets/audio/";



    switch (status) {
        case "init":
            console.log('initialisation de l\'audio');
            track = new Audio(urlAudio + catalogue[currentTrack].audio);
            break;

        case "play":

            track.play();
            break;
        case "pause":
            track.pause();
            break;
        default:
            console.log("erreur dans la fonction audio");
            break;

    }


};

export { audio };