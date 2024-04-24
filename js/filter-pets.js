document.addEventListener('DOMContentLoaded', function() {
    const petFilterDropdown = document.getElementById('pet-filter');
    const petCards = document.querySelectorAll('.pet-card');

    function filterPets(animalType) {
        petCards.forEach(card => {
            if (card.getAttribute('data-animal-type') === animalType || animalType === 'all') {
                card.style.display = ''; 
            } else {
                card.style.display = 'none'; 
            }
        });
    }

    petFilterDropdown.addEventListener('change', function() {
        filterPets(this.value);
    });
});
