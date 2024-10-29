let selectedPlace = '';

function showMainPage() {
    document.getElementById('greeting').style.display = 'none'; // Hide greeting
    document.getElementById('mainContent').style.display = 'block'; // Show main content
}

function bye() {
    // Do nothing, maintain current page
}

function selectPlace(place) {
    selectedPlace = place; // Store the selected place
    document.getElementById('goButton').style.display = 'block'; // Show the button when a place is selected
    
    // Display the selected choice dynamically
    const choiceDiv = document.getElementById('selectedChoice');
    choiceDiv.innerHTML = `
        <h3>You have selected:</h3>
        <h4>${place}</h4>
        <p>Pros and Cons:</p>
        <ul>
            ${getProsAndCons(place)}
        </ul>`;
}

function getProsAndCons(place) {
    switch (place) {
        case 'Hidden Place':
            return `
                <li><strong>Pros:</strong> Secluded atmosphere, unique decor, good food options.</li>
                <li><strong>Cons:</strong> Accessibility issues, limited space.</li>`;
        case 'Floc.Co':
            return `
                <li><strong>Pros:</strong> Charming ambiance, diverse menu, good coffee.</li>
                <li><strong>Cons:</strong> Busy during peak hours, limited outdoor seating.</li>`;
        case 'Earthbake':
            return `
                <li><strong>Pros:</strong> Artisan bakery, warm atmosphere, healthy options.</li>
                <li><strong>Cons:</strong> Limited dinner options, potential wait times.</li>`;
        case 'Gunung Sibayak':
            return `
                <li><strong>Pros:</strong> Scenic views, hiking experience, natural hot springs nearby.</li>
                <li><strong>Cons:</strong> Weather dependency, active volcano risks.</li>`;
        default:
            return '';
    }
}

function sendWhatsApp() {
    const message = `I would like to go to ${selectedPlace}!`;
    const phoneNumber = '1234567'; // Replace with your actual phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
}
