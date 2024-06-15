
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const uploadImage = document.getElementById('uploadImage');

// Load the base image
const baseImage = new Image();
baseImage.src = 'dango.jpg';  // Ensure the correct path
baseImage.onload = function() {
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
}

// Handle image upload
uploadImage.addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

// Function to save the meme
function saveMeme() {
    const link = document.createElement('a');
    link.download = 'dango-meme.png';
    link.href = canvas.toDataURL();
    link.click();
}
