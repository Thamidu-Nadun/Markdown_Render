import render from "./main.js";

const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview");

function updatePreview() {
    const mdText = input.value;
    preview.innerHTML = render(mdText);
}

// Initial render
updatePreview();

// Update on input
input.addEventListener("input", updatePreview);
