let selectedPlace = '';

function selectPlace(place) {
    selectedPlace = place;
    document.getElementById('goButton').style.display = 'block';
}

function sendWhatsApp() {
    const message = `I would like to go to ${selectedPlace}!`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
}
