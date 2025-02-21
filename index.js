
//h1 tag function 
function changeImage(selectedImage) {
    let images = document.querySelectorAll("#project-image");

    images.forEach(img => {
        if (img.src.includes(selectedImage)) {
            img.style.display = "block"; // Show the clicked image
        } else {
            img.style.display = "none"; // Hide other images
        }
    });
}

// Initially, show only the first image
window.onload = function () {
    changeImage('fanzone.jpg');
};

