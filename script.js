const products = [
    {
        id: 1,
        name: "MacBook Pro 14",
        brand: "Apple",
        price: 999.99,
        category: "Laptops",
        image: "https://via.placeholder.com/300",
        rating: 4.8,
        stock: 15,
        description: "Latest Apple M2 chip, 14-inch Retina display"
    },
    {
        id: 2,
        name: "Dell XPS 13",
        brand: "Dell",
        price: 899.99,
        category: "Laptops",
        image: "https://via.placeholder.com/300",
        rating: 4.7,
        stock: 23,
        description: "13-inch 4K display, Intel i7, 16GB RAM"
    },
    {
        id: 3,
        name: "iPhone 15 Pro",
        brand: "Apple",
        price: 999.99,
        category: "Smartphones",
        image: "https://via.placeholder.com/300",
        rating: 4.9,
        stock: 42,
        description: "A17 Pro chip, 48MP camera system"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        brand: "Samsung",
        price: 899.99,
        category: "Smartphones",
        image: "https://via.placeholder.com/300",
        rating: 4.8,
        stock: 38,
        description: "6.8-inch Dynamic AMOLED, AI features"
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        brand: "Sony",
        price: 349.99,
        category: "Audio",
        image: "https://via.placeholder.com/300",
        rating: 4.9,
        stock: 50,
        description: "Noise cancelling headphones with 30hr battery"
    },
    {
        id: 6,
        name: "AirPods Pro",
        brand: "Apple",
        price: 249.99,
        category: "Audio",
        image: "https://via.placeholder.com/300",
        rating: 4.7,
        stock: 65,
        description: "Active noise cancellation, spatial audio"
    },
    {
        id: 7,
        name: "PS5 Console",
        brand: "Sony",
        price: 499.99,
        category: "Gaming",
        image: "https://via.placeholder.com/300",
        rating: 4.9,
        stock: 10,
        description: "Next-gen gaming console with 4K support"
    },
    {
        id: 8,
        name: "Logitech G Pro X",
        brand: "Logitech",
        price: 129.99,
        category: "Gaming",
        image: "https://via.placeholder.com/300",
        rating: 4.6,
        stock: 45,
        description: "Wireless gaming headset with DTS audio"
    },
    {
        id: 9,
        name: "Samsung 49\" Odyssey",
        brand: "Samsung",
        price: 899.99,
        category: "Gaming",
        image: "https://via.placeholder.com/300",
        rating: 4.7,
        stock: 18,
        description: "49-inch curved gaming monitor, 240Hz"
    },
    {
        id: 10,
        name: "iPad Pro 12.9",
        brand: "Apple",
        price: 799.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300",
        rating: 4.8,
        stock: 25,
        description: "12.9-inch Liquid Retina XDR display"
    },
    {
        id: 11,
        name: "Logitech MX Master 3",
        brand: "Logitech",
        price: 99.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300",
        rating: 4.7,
        stock: 55,
        description: "Advanced wireless mouse for productivity"
    },
    {
        id: 12,
        name: "Samsung Galaxy Watch 6",
        brand: "Samsung",
        price: 299.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300",
        rating: 4.6,
        stock: 30,
        description: "Advanced health tracking, sleep monitoring"
    },
    {
        id: 13,
        name: "Sony WF-1000XM4",
        brand: "Sony",
        price: 279.99,
        category: "Audio",
        image: "https://via.placeholder.com/300",
        rating: 4.8,
        stock: 40,
        description: "Wireless noise cancelling earbuds"
    },
    {
        id: 14,
        name: "Dell 27\" 4K Monitor",
        brand: "Dell",
        price: 449.99,
        category: "Accessories",
        image: "https://via.placeholder.com/300",
        rating: 4.5,
        stock: 22,
        description: "27-inch 4K USB-C monitor"
    },
    {
        id: 15,
        name: "Logitech G915",
        brand: "Logitech",
        price: 249.99,
        category: "Gaming",
        image: "https://via.placeholder.com/300",
        rating: 4.7,
        stock: 28,
        description: "Wireless mechanical gaming keyboard"
    }
];
function displayProducts(productsToShow) {
    const container = document.getElementById('productsContainer');
    const productsHTML = productsToShow.map(product => `
    <div class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">$${product.price}</p>
    </div>
    `).join('');
    container.innerHTML = productsHTML;
}
function filterProducts() {
    const maxPrice = document.getElementById('priceRange').value;
    const filteredProducts = products.filter(product => {
        return product.price <= maxPrice;
    });
    displayProducts(filteredProducts);
}
displayProducts(products);