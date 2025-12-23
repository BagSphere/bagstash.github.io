// Theme toggle
function toggleTheme(){document.body.classList.toggle("dark");}

// Animate product cards on load
document.addEventListener("DOMContentLoaded",()=>{
  const cards=document.querySelectorAll(".product-card");
  cards.forEach((c,i)=>{c.style.animationDelay=`${i*0.15}s`;});
});

// Filter for products page
const filterBtns=document.querySelectorAll(".filter-btn");
const productGrid=document.getElementById("productGrid");

if(filterBtns.length && productGrid){
  const products=[
    {name:"Hard Shell Suitcase",type:"suitcase",price:"₹2,999",img:"Images/suitcase.jpg",link:"product-suitcase.html"},
    {name:"Adventure Backpack",type:"backpack",price:"₹689",img:"Images/backpack1.jpg",link:"product-backpack1.html"},
    {name:"Urban Backpack",type:"backpack",price:"₹789",img:"Images/backpack2.jpg",link:"product-backpack2.html"}
  ];

  // Render products with skeleton
  setTimeout(()=>{
    productGrid.innerHTML="";
    products.forEach(p=>{
      const a=document.createElement("a");
      a.href=p.link;
      a.className="product-card";
      a.innerHTML=`<img src="${p.img}" alt="${p.name}"><h4>${p.name}</h4><span>${p.price}</span>`;
      productGrid.appendChild(a);
    });
  },1000);

  filterBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
      filterBtns.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const filter=btn.dataset.filter;
      const filtered=products.filter(p=>filter==="all"?true:p.type===filter);
      productGrid.innerHTML="";
      filtered.forEach(p=>{
        const a=document.createElement("a");
        a.href=p.link;
        a.className="product-card";
        a.innerHTML=`<img src="${p.img}" alt="${p.name}"><h4>${p.name}</h4><span>${p.price}</span>`;
        productGrid.appendChild(a);
      });
    });
  });
}
