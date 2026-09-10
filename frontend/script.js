/*=========================================
      SINGHAR JEWELERS
      Main JavaScript File
=========================================*/



// Splash Screen
window.addEventListener("load", () => {

    const splash = document.getElementById("splash");

    // Agar splash page par hai tabhi chale
    if (splash) {

        setTimeout(() => {

            splash.classList.add("hide");

            setTimeout(() => {

                splash.style.display = "none";

            }, 800);

        }, 3000);

    }

});