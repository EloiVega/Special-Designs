var letters = document.querySelectorAll("div>span");
var phase1Button = document.querySelector(".letsGo");
var Phase2Container = null;

phase1Button.addEventListener("click", () => {
    var i = 0;
    for (const idx of letters) {
        console.log(idx.style.left)
        setTimeout(() => {
            idx.style = "left:" + idx.style.left + ";transform: translateY(" + -50 + "%);"
        }, i++ * 30);
        setTimeout(() => {
            idx.style = "left:" + idx.style.left + ";transform: translateY(" + 0 + "%);"
        }, i++ * 30 + (80));
        setTimeout(() => {
            idx.style = "left:" + idx.style.left + ";transform: translateY(" + -3500 + "%);"
        }, i++ * 30 + (300));
    }

    setTimeout(() => {
        phase1Button.style = " animation: fadeout 0.3s linear;";
    }, i * 30);
    setTimeout(() => {
        letters = document.querySelector(".container");
        console.log(letters);
        letters.innerHTML = "<div class=\"Phase2Container\"></div>";
        Phase2Container = document.querySelector(".Phase2Container");
        Phase2Container.style = "animation: openUp 1s linear forwards;";
        changeText(paragraph[inc]);
        Phase2 = true;

        phase1Button = null;
    }, i * 30 + (200));

});

// PHASE TWO 
var paragraph = ["For helping me with going through such an insanely annoying week", "For being productive and positive even when you were scepticle about the whole idea", "For staying by my side and understanding the reason why I couldn't act as I usually would", "In short", "Thank you for being a great friend <3"];
var inc = 0;
var Phase2 = false;
document.addEventListener("click", () => {
    if (Phase2) {
        changeText(paragraph[inc]);
    }
});

function changeText(str) {
    if (inc == paragraph.length - 1) {
        document.querySelector(".Phase2Container").className = "special";
    }
    if (inc == paragraph.length) return;
    const arr = str.split(" ");
    var element;
    var i = 0;
    for (var member of arr) {
        element = document.createElement("div");
        element.className = "Phase2Span";
        element.textContent = member;
        Phase2Container.appendChild(element);
    }

    inc++;
}