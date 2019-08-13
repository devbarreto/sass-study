let text = "";
let isWriting = true;
let isStopped = false;
let idxCurrentCharacterToWrite = 0;
const speed = 100; /* The speed/duration of the effect in milliseconds */
const aditionalDelayFactor = 10;
const reducerDelayFactor = 0.5;

const textsToWrite = ["tech lovers", "powered by coffee", "developers"];
const paragraphToAlternateText = document.getElementById("text");

function incrementOneCharacterText() {
    paragraphToAlternateText.innerHTML += text.charAt(idxCurrentCharacterToWrite);
    idxCurrentCharacterToWrite++;
    setTimeout(typeWriter, speed);
}

function deleteOneCharacterText() {
    const paragraphText = paragraphToAlternateText.innerHTML;
    paragraphToAlternateText.innerHTML = paragraphText.substr(0, idxCurrentCharacterToWrite);
}

function toggleWriting() {
    const btnToggleWritting = document.getElementById("btn-toggle");
    isStopped = !isStopped;
    btnToggleWritting.innerHTML = isStopped ? "Continue" : "Stop";

    if (!isStopped) {
        typeWriter();
    }
}

function typeWriter() {
    if (!isStopped) {
        if (isWriting) {
            if (idxCurrentCharacterToWrite < text.length) {
                incrementOneCharacterText();
            } else {
                isWriting = false;
                setTimeout(typeWriter, aditionalDelayFactor * speed);
            }
        } else {
            idxCurrentCharacterToWrite--;
            if (idxCurrentCharacterToWrite != -1) {
                deleteOneCharacterText();
            } else {
                isWriting = true;
                selectNewTextToType();
            }
            setTimeout(typeWriter, reducerDelayFactor * speed);
        }
    }
}

function selectNewTextToType() {
    let currentIndex = textsToWrite.indexOf(text);

    if (currentIndex == -1 || currentIndex == textsToWrite.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    text = textsToWrite[currentIndex];
}

(function initialize() {
    selectNewTextToType();
    typeWriter();
    document.getElementById("btn-toggle").addEventListener("click", toggleWriting);
})();
