const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const dateCheckbox = document.getElementById('dateCheckbox');
const colorPicker = document.getElementById('colorPicker');
const fontSizeInput = document.getElementById('fontSize');

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;

    if (!dateCheckbox.checked) {
        dateElement.textContent = '';
    } else {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayOfWeek = daysOfWeek[now.getDay()];
        const month = months[now.getMonth()];
        const day = now.getDate();
        const year = now.getFullYear();
        const dateString = `${dayOfWeek}, ${month} ${day}, ${year}`;
        dateElement.textContent = dateString;
    }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock when the page loads
updateClock();

// Event listeners for customization options
colorPicker.addEventListener('input', function () {
    timeElement.style.color = colorPicker.value;
    dateElement.style.color = colorPicker.value;
});

fontSizeInput.addEventListener('input', function () {
    const fontSize = fontSizeInput.value + 'px';
    timeElement.style.fontSize = fontSize;
    dateElement.style.fontSize = fontSize;
});

dateCheckbox.addEventListener('change', function () {
    dateElement.classList.toggle('hidden');
});
