// =========================
// PRODUCT MODAL
// =========================
function openModal(img, title, desc, price) {
    const modal = document.getElementById("productModal");
    document.getElementById("modalImg").src = img;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modalPrice").innerText = price;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// =========================
// THEME TOGGLE
// =========================
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// =========================
// IMAGE SWITCH (for product pages)
// =========================
function changeImg(src) {
    const mainImg = document.getElementById("mainImg");
    if (mainImg) mainImg.src = src;
}
