let slides = document.getElementsByClassName("slide");

// Funktion til at opdatere det aktuelle slide baseret på tid
function updateSlide() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    console.log(`Current hour: ${hours}`); // Log den nuværende time

    if (hours >= 6 && hours < 12) {
        showSlide(0);
    } else if (hours >= 12 && hours < 16) {
        showSlide(1);
    } else if (hours >= 16 && hours < 20) {
        showSlide(2);
    } else {
        showSlide(3);
    }
}

// Funktion til at vise et bestemt slide
function showSlide(index) {
    // Skjul alle slides først
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    // Vis det valgte slide
    slides[index].classList.add("active");
}

// Opdater slidet ved indlæsning af siden
updateSlide();

// Tjek tiden hver time for at opdatere slidet
setInterval(updateSlide, 60 * 60 * 1000);

