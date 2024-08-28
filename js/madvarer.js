// Liste over madvarer (Arrays)
const items = [
    // Burgers
    { name: "Whopper", type: "Burger" },
    { name: "Whopper Cheese", type: "Burger" },
    { name: "Whopper Bacon and Cheese", type: "Burger" },
    { name: "Double Whopper", type: "Burger" },
    { name: "Bacon King", type: "Burger" },
    { name: "Big King XL", type: "Burger" },
    { name: "Extra Long Chili Cheese", type: "Burger" },
    { name: "Double Cheeseburger", type: "Burger" },
    { name: "Whopper Jr.", type: "Burger" },
    { name: "Big King Jr.", type: "Burger" },
    { name: "Chili Cheeseburger", type: "Burger" },
    { name: "Hamburger", type: "Burger" },
    { name: "Cheeseburger", type: "Burger" },
    { name: "Steakhouse Bacon King", type: "Burger" },
    { name: "Gourmet Grill BBQ", type: "Burger" },
    { name: "Double Gourmet Grill BBQ", type: "Burger" },
    { name: "Bøfsandwich", type: "Burger" },
    { name: "Whopper Jr. Cheese", type: "Burger" },
    { name: "Bøfsandwich XL", type: "Burger" },
    { name: "Gourmet Grill Triple Cheese", type: "Burger" },
    { name: "Double Gourmet Grill Triple Cheese", type: "Burger" },
    { name: "Gourmet Chicken Triple Cheese", type: "Burger" },
    { name: "Plant-based Gourmet Grill Triple Cheese", type: "Burger" },
    { name: "Gourmet Grill Aioli", type: "Burger" },
    { name: "Crispy Chicken", type: "Burger" },
    { name: "Chicken Royale", type: "Burger" },
    { name: "Chili Cheese Crispy Chicken", type: "Burger" },
    { name: "Gourmet Chicken BBQ", type: "Burger" },
    { name: "Fish King", type: "Burger" },
    { name: "Chicken Nugget Burger", type: "Burger" },
    { name: "Plant-Based Whopper", type: "Burger" },
    { name: "Plant-Based Royale", type: "Burger" },
    { name: "Plant-based Cheeseburger", type: "Burger" },
    { name: "Plant-based Gourmet Grill BBQ", type: "Burger" },
    { name: "Plant-based Burger", type: "Burger" },
    { name: "Plant-based Big King XL", type: "Burger" },
    { name: "Plant-based Whopper Cheese", type: "Burger" },

    // Sides
    { name: "Chili Cheese 8 stk", type: "Sides" },
    { name: "Chili Cheese 6 stk", type: "Sides" },
    { name: "Chili Cheese 4 stk", type: "Sides" },
    { name: "King Fries Small", type: "Sides" },
    { name: "King Fries Medium", type: "Sides" },
    { name: "King Fries Large", type: "Sides" },
    { name: "Twister Fries Medium", type: "Sides" },
    { name: "Twister Fries Large", type: "Sides" },
    { name: "Mozzarella Sticks 4 stk", type: "Sides" },
    { name: "Mozzarella Sticks 6 stk", type: "Sides" },
    { name: "Mozzarella Sticks 8 stk", type: "Sides" },
    { name: "Onion Rings 4 stk", type: "Sides" },
    { name: "Onion Rings 6 stk", type: "Sides" },
    { name: "Onion Rings 8 stk", type: "Sides" },
    { name: "Chili Cheese Loaded Fries", type: "Sides" },
    { name: "BBQ & Mayo Loaded Fries", type: "Sides" },
    { name: "Ketchup & Mayo Loaded Fries", type: "Sides" },
    { name: "King Wings 4 stk", type: "Sides" },
    { name: "King Wings 6 stk", type: "Sides" },
    { name: "King Wings 8 stk", type: "Sides" },
    { name: "Shaking Nuggets Sour Cream 4 stk", type: "Sides" },
    { name: "Shaking Nuggets Sour Cream 9 stk", type: "Sides" },
    { name: "Shaking Nuggets Sour Cream 20 stk", type: "Sides" },
    { name: "Shaking Nuggets Spicy 4 stk", type: "Sides" },
    { name: "Shaking Nuggets Spicy 9 stk", type: "Sides" },
    { name: "Shaking Nuggets Spicy 20 stk", type: "Sides" },
    { name: "Chicken Nuggets 4 stk", type: "Sides" },

    // Dips
    { name: "BBQ", type: "Dip" },
    { name: "Bearnaise", type: "Dip" },
    { name: "Curry Mayo", type: "Dip" },
    { name: "Garlic", type: "Dip" },
    { name: "Hot Cheese", type: "Dip" },
    { name: "Mayonnaise", type: "Dip" },
    { name: "Sour Cream and Onion", type: "Dip" },
    { name: "Sweet and Sour", type: "Dip" },
    { name: "Truffle", type: "Dip" },
    { name: "Vegan Mayo", type: "Dip" },
    { name: "Ketchup", type: "Dip" },
    { name: "Siracha Dip", type: "Dip" },
    { name: "Curry", type: "Dip" },

    // Drikkevarer
    // Kolde Drikke
    { name: "Coca-Cola Small", type: "Drikkevarer" },
    { name: "Coca-Cola Medium", type: "Drikkevarer" },
    { name: "Coca-Cola Large", type: "Drikkevarer" },
    { name: "Coca-Cola zero Small", type: "Drikkevarer" },
    { name: "Coca-Cola zero Medium", type: "Drikkevarer" },
    { name: "Coca-Cola zero Large", type: "Drikkevarer" },
    { name: "Fanta Small", type: "Drikkevarer" },
    { name: "Fanta Medium", type: "Drikkevarer" },
    { name: "Fanta Large", type: "Drikkevarer" },
    { name: "Sprite Zero Small", type: "Drikkevarer" },
    { name: "Sprite Zero Medium", type: "Drikkevarer" },
    { name: "Sprite Zero Large", type: "Drikkevarer" },
    { name: "Danskvand Small", type: "Drikkevarer" },
    { name: "Danskvand Medium", type: "Drikkevarer" },
    { name: "Danskvand Large", type: "Drikkevarer" },
    { name: "Carlsberg Sport Small", type: "Drikkevarer" },
    { name: "Carlsberg Sport Medium", type: "Drikkevarer" },
    { name: "Carlsberg Sport Large", type: "Drikkevarer" },
    { name: "Monster Mango Loco", type: "Drikkevarer" },
    { name: "Monster Ultra White", type: "Drikkevarer" },
    { name: "Monster Green", type: "Drikkevarer" },
    { name: "Smakis Appelsin", type: "Drikkevarer" },
    { name: "Smakis Æble", type: "Drikkevarer" },
    { name: "Mini Mælk", type: "Drikkevarer" },
    { name: "Kildevæld", type: "Drikkevarer" },

    // Varme Drikke
    { name: "Latte Small", type: "Drikkevarer" },
    { name: "Latte Large", type: "Drikkevarer" },
    { name: "Cappucino Small", type: "Drikkevarer" },
    { name: "Cappucino Large", type: "Drikkevarer" },
    { name: "Coffee Small", type: "Drikkevarer" },
    { name: "Coffee Large", type: "Drikkevarer" },
    { name: "Espresso Small", type: "Drikkevarer" },
    { name: "Espresso Large", type: "Drikkevarer" },
    { name: "Hot Tea Small", type: "Drikkevarer" },
    { name: "Hot Tea Large", type: "Drikkevarer" },
    { name: "Hot Chocolate Small", type: "Drikkevarer" },
    { name: "Hot Chocolate Large", type: "Drikkevarer" },

    // Dessert
    { name: "King Fusion Oreo", type: "Dessert" },
    { name: "King Fusion Smarties", type: "Dessert" },
    { name: "Sundae Jordbær", type: "Dessert" },
    { name: "Sundae Chokolade", type: "Dessert" },
    { name: "Sundae Karamel", type: "Dessert" },
    { name: "Æbletærte", type: "Dessert" },
    { name: "Creamy Shake Oreo", type: "Dessert" },
    { name: "Creamy Shake Strawberry", type: "Dessert" },
    { name: "Creamy Shake Chocolate", type: "Dessert" },
    { name: "Milkshake Chocolate Small", type: "Dessert" },
    { name: "Milkshake Chocolate Medium", type: "Dessert" },
    { name: "Milkshake Chocolate Large", type: "Dessert" },
    { name: "Milkshake Jordbær Small", type: "Dessert" },
    { name: "Milkshake Jordbær Medium", type: "Dessert" },
    { name: "Milkshake Jordbær Large", type: "Dessert" },
    { name: "Milkshake Vanilje Small", type: "Dessert" },
    { name: "Milkshake Vanilje Medium", type: "Dessert" },
    { name: "Milkshake Vanilje Large", type: "Dessert" },
    { name: "Æbletærte & Ice Cream", type: "Dessert" },
    { name: "Æbletærte & Coffee", type: "Dessert" },
    { name: "Æbletærte & Coffee & Ice Cream", type: "Dessert" },
];

// Funktion til at søge efter madvarer (Functions)
function searchItem() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let selectedCategory = document.getElementById("categorySelect").value;
    let results = [];

    // Opret regulært udtryk til at matche hele ordet
    let regex = new RegExp(`\\b${searchInput}\\b`);

    // Loop gennem madvarelisten og find match (Loops)
    for (let i = 0; i < items.length; i++) {
        let nameMatches = regex.test(items[i].name.toLowerCase());
        let typeMatches = regex.test(items[i].type.toLowerCase());

        // Filtrér baseret på valgte kategori
        if (selectedCategory === "all" || items[i].type.toLowerCase() === selectedCategory.toLowerCase()) {
            // Hvis søgeordet matcher enten navn eller type
            if (nameMatches || typeMatches) {
                // Hvis søgeordet matcher begge (navn og type), vis dette først
                if (nameMatches && typeMatches) {
                    results.unshift(items[i]); // Tilføj i starten af listen for at prioritere
                } else {
                    results.push(items[i]);
                }
            }
        }
    }

    // Vis resultaterne
    displayResults(results);
}

// Funktion til at vise resultaterne (Functions)
function displayResults(results) {
    let resultList = document.getElementById("resultList");
    resultList.innerHTML = ""; // Ryd tidligere resultater

    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {  // Loop gennem resultaterne (Loops)
            let listItem = document.createElement("li");
            listItem.innerText = `${results[i].name} - ${results[i].type}`;
            resultList.appendChild(listItem);
        }
    } else {
        resultList.innerHTML = "<li>Ingen resultater fundet</li>";
    }
}

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        searchItem();
    }
});

window.onclick = function (event) {
    console.log("Klik på vinduet:", event.target);
    let searchContainer = document.getElementById("search-container");
    let searchInput = document.getElementById("searchInput");
    let searchButton = document.getElementsByClassName("search-button")[0];

    if (event.target !== searchContainer && event.target !== searchInput && event.target !== searchButton) {
        resultList.innerHTML = ""; // Ryd tidligere resultater
    }
}