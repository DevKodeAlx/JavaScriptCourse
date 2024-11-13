// Script.JS //

document.addEventListener('DOMContentLoaded', () => {
    const roseColorSelect = document.getElementById('roseColor');
    const roseImage = document.getElementById('roseImage');
    const noticeList = document.getElementById('noticeList');

    // Change image based on selected color //
    roseColorSelect.addEventListener('change', (event) => {
        const color = event.target.value;
        roseImage.src = `images/${color}-rose.jpg`;
    });

    // Enlarge image on hover. //
    roseImage.addEventListener('mouseover', () => {
        roseImage.style.transition = 'transform 0.5s ease'; // Smooth transition
        roseImage.classList.add('enlarge');
    });

    // Return image to original size when not hovering. //
    roseImage.addEventListener('mouseout', () => {
        roseImage.style.transition = 'transform 0.5s ease'; // Smooth transition
        roseImage.classList.remove('enlarge');
        noticeList.innerHTML = '';    
    });

    // Adds notice list on image click. //
    roseImage.addEventListener('click', () => {
        const notice = document.createElement('li');
        notice.textContent = `You clicked on the ${roseColorSelect.value} rose.`;
        noticeList.appendChild(notice);
    });
    

});