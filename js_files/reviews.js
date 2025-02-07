document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviews');

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const reviewerName = document.getElementById('reviewerName').value;
        const reviewText = document.getElementById('reviewText').value;

        if (reviewerName && reviewText) {
            addReview(reviewerName, reviewText);
            reviewForm.reset();
        }
    });

    function addReview(name, text) {
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `
            <div class="reviewer-name">${name}</div>
            <div class="review-text">${text}</div>
            <button class="delete-review">Delete</button>
        `;

        reviewItem.querySelector('.delete-review').addEventListener('click', () => {
            reviewItem.remove();
        });

        reviewsList.appendChild(reviewItem);
    }
});