document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-button-recipes');
    // console.log(expandButtons.length + " buttons found"); 

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("Button clicked"); 
            const card = this.closest('.recipes-card'); // control individual card
            // if (!card) {
            //     console.log("No card found"); 
            // }
            const instructions = card.querySelector('.instructions-wrapper');
            // if (!instructions) {
            //     console.log("No instructions wrapper found"); 
            // }

            // toggle can help switch between two status
            instructions.classList.toggle('hidden');
            instructions.classList.toggle('expanded');

            // update button text based on the card status
            this.textContent = instructions.classList.contains('hidden') ? '👇 Show Instructions' : '👆 Hide Instructions';
        });
    });
});

