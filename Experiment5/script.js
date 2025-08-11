document.addEventListener("DOMContentLoaded", function () {
  const productForm = document.querySelector("form");

  productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("ID").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("cat").value;

    const tableBody = document.querySelector("#productsTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${category}</td>
        `;

    tableBody.appendChild(newRow);

    productForm.reset();

    saveProductToLocalStorage(id, name, price, category);
  });

  loadProductsFromLocalStorage();
});

function saveProductToLocalStorage(id, name, price, category) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({ id, name, price, category });

  localStorage.setItem("products", JSON.stringify(products));
}

function loadProductsFromLocalStorage() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const tableBody = document.querySelector("#productsTable tbody");

  tableBody.innerHTML = "";

  products.forEach((product) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
        `;
    tableBody.appendChild(newRow);
  });
}
