document.addEventListener('DOMContentLoaded', function() {
    const typeFilter = document.getElementById('cloth-type-filter');
    const seasonFilter = document.getElementById('cloth-season-filter');
    const clothingCards = document.querySelectorAll('.clothing-card');

    function filterClothes() {
        const typeValue = typeFilter.value;
        const seasonValue = seasonFilter.value;

        clothingCards.forEach(card => {
            const typeTag = card.querySelector('.tag.type').textContent; // retrieves all the text contained within it
            const seasonTags = Array.from(card.querySelectorAll('.tag.season'), tag => tag.textContent.trim());

            const typeMatches = typeValue === 'all' || typeTag === typeValue;
            const seasonMatches = seasonValue === 'all' || seasonTags.includes(seasonValue);

            if (typeMatches && seasonMatches) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    typeFilter.addEventListener('change', filterClothes);
    seasonFilter.addEventListener('change', filterClothes);

    filterClothes();
});
