// Genel Tanımlamalar
const giderCategoryBtnOpenModal = document.querySelector(".giderCategoryBtnOpenModal");
const giderCategoryModal = document.querySelector(".giderCategoryModal");
const gelirCategoryModal = document.querySelector(".gelirCategoryModal");



// Tıklandığında Gelir Türü Ekleme Pop Up Açılır
const gelirCategoryBtnOpen = document.getElementById("gelirCategoryBtnOpen");
gelirCategoryBtnOpen.addEventListener("click", openGelirCategory);

function openGelirCategory() {
    gelirCategoryModal.style.display = "flex";
}

// Tıklandığında Gider Türü Ekleme Pop Up Açılır
const giderCategoryBtnOpen = document.getElementById("giderCategoryBtnOpen");
giderCategoryBtnOpen.addEventListener("click", openGiderCategory);

function openGiderCategory() {
    giderCategoryModal.style.display = "flex";
}

// Yeni Gelir Türü Filtreye Ekleme
const addGelirCategoryBtn = document.getElementById("addGelirCategoryBtn");
addGelirCategoryBtn.addEventListener("click", addGelirCategoryValue);
const gelirCategory = document.getElementById("gelirCategory");
const gelirCategoryList = document.getElementById("gelirCategoryList");



function addGelirCategoryValue() {
    let gelirCategoryValue = gelirCategory.value;
    console.log(gelirCategoryValue);
    const option = document.createElement("option");
    option.className = "gelirCategoryListItem";
    option.textContent = gelirCategoryValue;
    gelirCategoryList.appendChild(option);
    gelirCategoryModal.style.display = "none";
}

// Yeni Gider Türü Filtreye Ekleme

const addGiderCategoryBtn = document.getElementById("addGiderCategoryBtn");
addGiderCategoryBtn.addEventListener("click", addGiderCategoryValue);
const giderCategory = document.getElementById("giderCategory");
const giderCategoryList = document.getElementById("giderCategoryList");



function addGiderCategoryValue() {
    let giderCategoryValue = giderCategory.value;
    console.log(giderCategoryValue);
    const option = document.createElement("option");
    option.className = "giderCategoryListItem";
    option.textContent = giderCategoryValue;
    giderCategoryList.appendChild(option);
    giderCategoryModal.style.display = "none";

}



// Tabloya Gelirleri Ekleme
const gelirKutusu = document.getElementById("gelirKutusu");
const gelir = document.getElementById("gelir");
const gelirTuru = document.getElementById("gelirTuru");
const gelirKategorisi = document.getElementById("gelirCategoryList");
const gelirBox = document.getElementById("gelirBox");


const gelirBtn = document.getElementById("gelirBtn");
gelirBtn.addEventListener("click", addGelir);

function addGelir() {
    let gelirValue = parseFloat(gelir.value);
    let gelirTuruValue = gelirTuru.value;
    const secilenText = gelirKategorisi.options[gelirKategorisi.selectedIndex].text;


    const Turspan = document.createElement("span");
    Turspan.textContent = gelirTuruValue;
    Turspan.className = "gelirType";

    const Fiyatspan = document.createElement("span");
    Fiyatspan.textContent = gelirValue + "₺";
    Fiyatspan.className = "gelirPrice";

    const Kategorispan = document.createElement("span");
    Kategorispan.textContent = secilenText;
    Kategorispan.className = "gelirCategoryListItem";

    const div = document.createElement("div");
    div.className = "expense-item";

    gelirBox.appendChild(div);
    div.appendChild(Turspan);
    div.appendChild(Fiyatspan);
    div.appendChild(Kategorispan);

    toplamGelirTutari = toplamGelirTutari + gelirValue;
    toplamGelir.textContent = toplamGelirTutari;






}

// Tabloya Giderleri Ekleme
const giderKutusu = document.getElementById("giderKutusu");
const gider = document.getElementById("gider");
const giderBtn = document.getElementById("giderBtn");
const giderTuru = document.getElementById("giderTuru");
const giderKategorisi = document.getElementById("giderCategoryList");
const giderBox = document.getElementById("giderBox");



giderBtn.addEventListener("click", addGider);

function addGider() {
    let giderValue = parseFloat(gider.value);
    console.log(typeof giderValue);
    let giderTuruValue = giderTuru.value;
    const secilenText = giderKategorisi.options[giderKategorisi.selectedIndex].text;

    const Turspan = document.createElement("span");
    Turspan.textContent = giderTuruValue;
    Turspan.className = "giderType";

    const Fiyatspan = document.createElement("span");
    Fiyatspan.textContent = giderValue + "₺";
    Fiyatspan.className = "giderPrice";

    const Kategorispan = document.createElement("span");
    Kategorispan.textContent = secilenText;
    Kategorispan.className = "giderCategoryListItem";

    const div = document.createElement("div");
    div.className = "expense-item";

    giderBox.appendChild(div);
    div.appendChild(Turspan);
    div.appendChild(Fiyatspan);
    div.appendChild(Kategorispan);

    toplamHarcamaTutari = toplamHarcamaTutari + giderValue;
    toplamHarcama.textContent = toplamHarcamaTutari;

}

// Toplam Harcamalar
const toplamHarcama = document.querySelector(".totalHarcama");
let toplamHarcamaTutari = 0;

const toplamGelir = document.querySelector(".totalGelir");
let toplamGelirTutari = 0;