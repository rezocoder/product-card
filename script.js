const cardData = [
    {
        description: "Extra fresh fruits and vegetables",
        classification: "Apples, bananas, berries, citrus fruits like oranges and lemons",
        imageUrl: "/images/illustration.png",
        tags: ["Fruits", "Vegetables", "Citrus", "Fruits", "Vegetables", "Citrus", "Fruits", "Vegetables", "Citrus"],
        location: "Newport Beach, CA, USA",
        price: 390
    },
    {
        description: "Fruits and vegetables are packed with essential vitamins, minerals, and nutrients that are essential for maintaining a healthy body and mind",
        classification: "Fruits and vegetables",
        imageUrl: "/images/illustration.png",
        tags: ["Healthy eating", "Nutrition", "Fruits", "Vegetables", "Citrus", "Fruits", "Vegetables", "Citrus"],
        location: "Newport Beach, CA, USA",
        price: 9999
    },

    {
        description: "Extra fresh fruits and vegetables",
        classification: "Apples, bananas, berries, citrus fruits like oranges and lemons, tropical fruits like pineapple and mango, and stone fruits like peaches and plums",
        imageUrl: "/images/illustration.png",
        tags: ["Fruits", "Vegetables", "Citrus", "Fruits", "Vegetables", "Citrus", "Fruits", "Vegetables", "Citrus"],
        location: "Newport Beach, CA, USA",
        price: 390
    },

    {
        description: "Fruits and vegetables are packed with essential vitamins, minerals, and nutrients",
        classification: "Fruits and vegetables",
        imageUrl: "/images/illustration.png",
        tags: ["Healthy eating", "Nutrition", "Fruits", "Vegetables", "Citrus", "Fruits", "Vegetables", "Citrus"],
        location: "Newport Beach, CA, USA",
        price: 390
    }
];

const cardContainer = document.getElementById("card-container");

cardData.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const tagsHTML = card.tags.map(tag => `
        <div class="tag-container">
            <div class="tag">${tag}</div>
            <div class="tag-divider"></div>
        </div>
    `).join(' ');

    cardDiv.innerHTML = `
      <img src="${card.imageUrl}" alt="">
      <div class="content">
        <h2 class="description">${card.description}</h2>
        <p class="classification">${card.classification} <span>$ ${card.price}</span></p>
        <div class="tags">${tagsHTML}</div>
        <div class="location"><img src="images/location_icon.png" alt=""> ${card.location}</div>
      </div>
    `;

    cardContainer.appendChild(cardDiv);
});
