document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        let likeCountElement = this.querySelector('.like-count');
        let likes = parseInt(likeCountElement.getAttribute('data-likes'));

        likes++; // Increment the likes
        likeCountElement.textContent = likes; // Update the text
        likeCountElement.setAttribute('data-likes', likes); // Update the data-likes attribute

        this.classList.toggle('liked');
        this.textContent = this.classList.contains('liked') ? `Liked (${likes})` : `Like (${likes})`;
    });
});
