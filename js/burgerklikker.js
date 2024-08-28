let num = 0;
let burgerklik = document.getElementById("burgerklikker-burger");
let point = document.getElementById("point");
let kurv = document.getElementById("kurv");

/* alle kouponer */
let soda = document.getElementById("sodakoup");
let cocio = document.getElementById("cociokoup");
let pommes = document.getElementById("pomfkoup");
let cct = document.getElementById("chilikoup");
let burger = document.getElementById("burgkoup");
let sandwich = document.getElementById("sandkoup");

let kurvarray = [soda, cocio, pommes, cct, burger, sandwich];

function klikburger() {
  num += 1;

  point.innerHTML = "Point: " + num;
}

/* 50 point -----------------------------------------------------------------------------------------*/
function Sodavand() {
  if (num >= 50) {
    console.log(kurvarray[0]);

    kurv.innerHTML +=
      "<div class='koupon active'>" + kurvarray[0].innerHTML + "</div>";

    num = num - 50;
    point.innerHTML = "Point: " + num;
  } else {
    alert("Du har ikke point nok");
  }
}

function Cociokoup() {
  if (num >= 50) {
    console.log(kurvarray[1]);

    kurv.innerHTML +=
      "<div class='koupon active'>" + kurvarray[1].innerHTML + "</div>";

    num = num - 50;
    point.innerHTML = "Point: " + num;
  } else {
    alert("Du har ikke point nok");
  }
}
/* 50 point -----------------------------------------------------------------------------------------*/

/* 100 point -----------------------------------------------------------------------------------------*/
function Pomfkoup() {
  if (num >= 100) {
    console.log(kurvarray[2]);

    kurv.innerHTML +=
      "<div class='koupon active'>" + kurvarray[2].innerHTML + "</div>";

    num = num - 100;
    point.innerHTML = "Point: " + num;
  } else {
    alert("Du har ikke point nok");
  }
}

function Chilikoup() {
  if (num >= 100) {
    console.log(kurvarray[3]);

    kurv.innerHTML +=
      "<div class='koupon active'>" + kurvarray[3].innerHTML + "</div>";

    num = num - 1;
    point.innerHTML = "Point: " + num;
  } else {
    alert("Du har ikke point nok");
  }
}
/* 100 point -----------------------------------------------------------------------------------------*/

/* 150 point -----------------------------------------------------------------------------------------*/
function Burgerkoup() {
  if (num >= 150) {
    console.log(kurvarray[4]);

    kurv.innerHTML +=
      "<div class='koupon active'>" + kurvarray[4].innerHTML + "</div>";

    num = num - 150;
    point.innerHTML = "Point: " + num;
  } else {
    alert("Du har ikke point nok");
  }
}

function Sandkoup() {
  if (num >= 150) {
    console.log(kurvarray[4]);

    kurv.innerHTML +=
      "<div class='koupon active'>" + kurvarray[4].innerHTML + "</div>";

    num = num - 150;
    point.innerHTML = "Point: " + num;
  } else {
    alert("Du har ikke point nok");
  }
}
/* 150 point -----------------------------------------------------------------------------------------*/

// Valg af sodavand
function Valgafsoda() {
  let valgafsodabox = document.getElementById("valgsoda");
  let valgSoda = ["Coca-cola", "Coca-cola Zero", "Fanta", "Sprite Zero"];
  let oversigt = document.getElementById("oversigt");

  valgafsodabox.classList.add("active");

  for (let s = 0; s < valgSoda.length; s++) {
    let valgbtn = document.createElement("valgbtn");
    let t = document.createTextNode(valgSoda[s]);
    valgbtn.classList.add("valgbtn");
    valgbtn.appendChild(t);
    oversigt.appendChild(valgbtn);
    valgbtn.addEventListener("click", Bekraft);

    function Bekraft() {
      valgbtn.classList.toggle("active");
    }
  }
}
