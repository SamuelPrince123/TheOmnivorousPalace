document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("productList");
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  // Function to fetch products from the server based on category
  function fetchProductsByCategory(category) {
    fetch(`http://localhost:3000/products?category=${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        displayProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  // Function to display products
  function displayProducts(products) {
    productList.innerHTML = ""; // Clear the list first

    for (let key in products) {
      if (products.hasOwnProperty(key)) {
        const product = products[key];
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(listItem);
      }
    }
  }

  // Fetch products based on category when the page loads
  fetchProductsByCategory(category);
});
