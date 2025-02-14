const robuxButtons = document.querySelectorAll('.robuxOptionButton');

robuxButtons.forEach(robuxButton => {
    robuxButton.addEventListener('click', function() {
        robuxButtons.forEach(button => {
            button.disabled = true;
        });

        this.disabled = false;
    })
});