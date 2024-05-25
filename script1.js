// Function to handle search
function handleSearch() {
  // Get the search query entered by the user
  const searchQuery = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  // Check if the search query is not empty
  if (searchQuery) {
    // Perform a search based on the query
    const searchResults = performSearch(searchQuery);

    // Display the search results
    displaySearchResults(searchResults);
  } else {
    // If search query is empty, display a message or handle as per your requirement
    alert("Please enter a search query.");
  }
}

// Example search logic
function performSearch(query) {
  // This is a placeholder for your actual search logic
  // You might search through a list of products or items
  // Here, we just return some example data
  const products = [
    { name: "Camera", category: "Electronics" },
    { name: "Digital Camera", category: "Electronics" },
    { name: "Mirrorless Camera", category: "Electronics" },
    { name: "DSLR Camera", category: "Electronics" },
    // Add more products as needed
  ];

  // Filter products based on the search query
  const searchResults = products.filter((product) => {
    // Check if the product name contains the search query
    return product.name.toLowerCase().includes(query);
  });

  return searchResults;
}

// Function to display search results
function displaySearchResults(results) {
  // This is a placeholder for displaying search results
  // You can customize how you want to display the results
  const resultList = document.getElementById("searchResults");
  resultList.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    // If no results found, display a message
    resultList.innerHTML = "<p>No results found.</p>";
  } else {
    // Display each search result
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.textContent = result.name;
      resultList.appendChild(resultItem);
    });
  }
}
