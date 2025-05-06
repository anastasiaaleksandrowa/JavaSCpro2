const initialData = [{
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            { id: "3", text: "Интересный дизайн, но дорогой." },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            { id: "4", text: "Люблю играть на PS5, графика на высоте." },
        ],
    },
];

function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    initialData.forEach(product => {
        product.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.textContent = review.text;
            reviewsContainer.appendChild(reviewDiv);
        });
    });
}

function addReview(text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
    }

    const newReview = {
        id: (initialData.reduce((maxId, product) => Math.max(maxId, ...product.reviews.map(r => parseInt(r.id))), 0) + 1).toString(),
        text,
    };
    initialData[0].reviews.push(newReview);
}