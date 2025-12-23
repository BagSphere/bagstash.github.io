// Product Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    productCards.forEach(card => {
      if(filter === "all" || card.dataset.category === filter){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Load Skeleton Simulation
window.addEventListener("load", () => {
  document.querySelectorAll(".skeleton-img").forEach(skel => {
    skel.style.background = "none";
  });
});
