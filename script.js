const gelirKutusu = document.getElementById("gelirKutusu");
const gelir = document.getElementById("gelir");
const gelirTuru = document.getElementById("gelirTuru");
const gelirBtn = document.getElementById("gelirBtn");
//---------------------------------------------------------
const giderKutusu = document.getElementById("giderKutusu");
const gider = document.getElementById("gider");
const giderBtn = document.getElementById("giderBtn");
const giderTuru = document.getElementById("giderTuru");
//-------------------------------------------------------
const gelirBox = document.getElementById("gelirBox");
const giderBox = document.getElementById("giderBox");

gelirBtn.addEventListener("click", addGelir);

function addGelir() {
    let gelirValue = gelir.value;
    let gelirTuruValue = gelirTuru.value;

    const Turspan = document.createElement("span");
    Turspan.textContent = gelirTuruValue;
    Turspan.className = "gelirType";

    const Fiyatspan = document.createElement("span");
    Fiyatspan.textContent = gelirValue + "₺";
    Fiyatspan.className = "gelirPrice";

    const div = document.createElement("div");
    div.className = "expense-item";

    gelirBox.appendChild(div);
    div.appendChild(Turspan);
    div.appendChild(Fiyatspan);



}

//------------------------------------------
giderBtn.addEventListener("click", addGider);

function addGider() {
    let giderValue = gider.value;
    let giderTuruValue = giderTuru.value;

    const div = document.createElement("div");
    div.className = "expense-item";


    const giderType = document.createElement("span");
    giderType.className = "giderType";
    giderType.textContent = giderTuruValue;


    const giderPrice = document.createElement("span");
    giderPrice.className = "giderPrice";
    giderPrice.textContent = giderValue + "₺";
    giderBox.appendChild(div);
    div.appendChild(giderType);
    div.appendChild(giderPrice);







}