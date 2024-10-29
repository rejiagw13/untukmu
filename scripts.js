let selectedPlace = ''; // Declare selectedPlace globally

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
        <h4>${place}</h4>`;
}

function sendWhatsApp() {
    const message = `I would like to go to ${selectedPlace}!`;
    const phoneNumber = '+6285765317040'; // Replace with your actual phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
}
