//your JS code here. If required.
// get the size info element
const sizeInfo = document.getElementById('sizeInfo');

// function to update the size of the info text

function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// update the size info text on page load
updateSize();

// add an event listener for the window resize event
window.addEventListener("resize", updateSize);