const oneSelect = document.querySelector("select[name='one']");
const twoSelect = document.querySelector("select[name='two']");
const threeSelect = document.querySelector("select[name='three']");
const fourSelect = document.querySelector("select[name='four']");
const fiveSelect = document.querySelector("select[name='five']");
const oneSelectV2 = document.querySelector("select[name='one-v2']");
const twoSelectV2 = document.querySelector("select[name='two-v2']");
const threeSelectV2 = document.querySelector("select[name='three-v2']");
const fourSelectV2 = document.querySelector("select[name='four-v2']");
const fiveSelectV2 = document.querySelector("select[name='five-v2']");
let onePerformed = true;
let twoPerformed = false;
let threePerformed = false;
let fourPerformed = false;
let fivePerformed = false;


function takeSouseg() {
    let oneValue = oneSelect.value;
    let twoValue = twoSelect.value;
    let threeValue = threeSelect.value;
    let fourValue = fourSelect.value;
    let fiveValue = fiveSelect.value;

    if (oneValue === "want") {

        if (onePerformed) {
            console.log("Вы захотели взять колбасу!");
            onePerformed = false;
        }

        if (twoValue === "go" && !twoPerformed) {
            console.log("Вы пошди на кухню");
            twoPerformed = true;
        } else if (twoValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }
        if (threeValue === "go" && !threePerformed) {
            console.log("Вы пошди к холодильнику");
            threePerformed = true;
        } else if (threeValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }

        if (fourValue === "go" && !fourPerformed) {
            console.log("Вы открыли холодильник");
            fourPerformed = true;
        } else if (fourValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }
        if (fiveValue === "take" && !fivePerformed) {
            console.log("Поздравляю мисия выполнена. Вы взяли колбасу");
            fivePerformed = true;
        } else if (fiveValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }
        return;
    } else
    if (oneValue === "not") {
        console.log("Мисия отменена! Вы отказались брать колбасу.");
    }

}


oneSelect.addEventListener("change", takeSouseg);
twoSelect.addEventListener("change", takeSouseg);
threeSelect.addEventListener("change", takeSouseg);
fourSelect.addEventListener("change", takeSouseg);
fiveSelect.addEventListener("change", takeSouseg);

function takeSousegV2() {
    let oneValue = oneSelectV2.value;
    let twoValue = twoSelectV2.value;
    let threeValue = threeSelectV2.value;
    let fourValue = fourSelectV2.value;
    let fiveValue = fiveSelectV2.value;

    if (oneValue === "want") {

        if (onePerformed) {
            console.log("Вы захотели взять колбасу!");
        }

        if (twoValue === "go") {
            console.log("Вы пошди на кухню");
        } else if (twoValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }
        if (threeValue === "go") {
            console.log("Вы пошди к холодильнику");

        } else if (threeValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }

        if (fourValue === "go") {
            console.log("Вы открыли холодильник");

        } else if (fourValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }

        if (fiveValue === "take") {
            console.log("Поздравляю мисия выполнена. Вы взяли колбасу");

        } else if (fiveValue === "not") {

            console.log("Мисия отменена!Вы отказались брать колбасу.");
            return;
        }

        return;
    } else
    if (oneValue === "not") {
        console.log("Мисия отменена! Вы отказались брать колбасу.");
    }
}

const contentDiv = document.querySelector("#content");

let position = 0;


function run() {
    if (position === 0) {
        contentDiv.innerHTML = '';
    }
    contentDiv.insertAdjacentHTML('beforeend', createEl(position));
    position++;
}


function notWant() {
    contentDiv.innerHTML = '';
    contentDiv.insertAdjacentHTML('afterbegin', "Мисия отменена! Вы отказались брать колбасу.");
    position = 0;
}


function createEl(position) {
    let arr = new Array();
    arr = ['Пойти на кухню', 'Подойти к холодильнику', 'Открыть холодильник', 'Взять колбасу'];
    let el = '';
    let inptCh = "<input type='button' name=" + position + "value='Ok'/>"

    if (position < arr.length) {
        el = "<div class='content'><div>" + arr[position] + "</div><button onclick='notWant()'>Передумал</button></div>";
    } else if (position === arr.length) {
        el = "<span> Поздравляю мисия выполнена.Вы взяли колбасу. </span><br/>";
    }
    return el;
}