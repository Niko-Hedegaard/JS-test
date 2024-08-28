// function til åbning af knap

function newsletterBtn() {
    let show = document.getElementById("newsletter-container");
    if (show.style.display === "none") {
      show.style.display = "flex";
    } else {
      show.style.display = "none";
    }
  }

  // input fleter, med console log

  function opretBtn() {
    let newsletterUser = {
        newsletterName: document.getElementById("input-name").value,
        newsletterEmail: document.getElementById("input-email").value
    };

    if (newsletterUser.newsletterName == "") {
        alert("Empty Name");
    } else if (newsletterUser.newsletterEmail == "") {
        alert("Empty Email");
    } else {
        console.log("User info:", newsletterUser);
    }
}

// textindhold to højrel indputfelt

let checklist = ["<p>Nyheder</p>", "<hr>", "<p>Kuponer</p>", "<hr>", "<p>Weekends tilbud</p>"];
for (let inputPosition = 0; inputPosition < checklist.length; inputPosition++) {
  document.getElementById("checklist-container").innerHTML += checklist[inputPosition];
}

// function til at lukke newletter.

function openNewsletter() {
  console.log("Åbner modalboksen");
  document.getElementById("newsletter-container").style.display = "flex";
}

// Lukker modalboksen
function closeNewsletter() {
  console.log("Lukker modalboksen");
  document.getElementById("newsletter-container").style.display = "none";
}

// Lukker modalboksen, hvis brugeren klikker udenfor
window.onclick = function (event) {
  console.log("Klik på vinduet:", event.target);
  let modalContainer = document.getElementById("newsletter-container");
      closeNewsletter();
}