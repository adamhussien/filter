'use strict'
const products = [
{
name: 'donald',
price: '$5,00',
category: "sweet",
info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, odit',
Image: 'img/sweet2.jpg'
},
{
    name: 'cacks',
    price: '$8,00',
    category: "sweet",
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, odit',
    Image: 'img/sweet1.jpg'
    },
    {
        name: 'cack',
        price: '$15,00',
        category: "sweet",
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, odit',
        Image: 'img/sweet3.jpg'
        },
        {
            name: 'milk with strawberry',
            price: '$10,00',
            category: "milkshake",
            info: 'Lorem ipsum, dolor sit amet  Doloribus, odit',
            Image: 'img/mil1.webp'
            },
            {
                name: 'cack',
                price: '$11,00',
                category: "milkshake",
                info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, odit',
                Image: 'img/milk.webp'
                },


                {
                    name: 'burga',
                    price: '$8,00',
                    category: "ham",
                    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, odit',
                    Image: 'img/h2.avif'
                    },
                    {
                        name: 'king burg',
                        price: '$10,00',
                        category: "ham",
                        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, odit',
                        Image: 'img/ham1.avif'
                        },
]

const btncontainer = document.querySelector(".btncontainer");
const container = document.querySelector(".cardcontainer");
const searchbtn= document.querySelector(".btn-search")
const input = document.querySelector(".input")
const showItems = function (products) {
    let items = products.map(pro => {
        return `
            <div class="card">
                <img src="${pro.Image}" alt="">
                <h4 class="title">${pro.name}</h4>
                <p class="price">${pro.price}</p>
                <p class="text">${pro.info}?</p>
            </div>
        `;
    });
    container.innerHTML = items.join('');
};

// Initial rendering of all products
showItems(products);
btncontainer.addEventListener("click", function(e){
    const btn = e.target.closest(".btn")
    if(!btn) return
   const category = btn.dataset.id;
console.log(category);
const filteredProducts = category === 'all' ? products : products.filter(pro => pro.category === category)
showItems(filteredProducts)
})
searchbtn.addEventListener("click", function(){
    const searchItem = input.value.trim().toLowerCase()
    if(searchbtn !== ''){
    const filteredProducts = products.filter(product =>{
        return product.name.toLowerCase().includes(searchItem)
        
    }) 
    showItems(filteredProducts)
    }else{
        showItems(products)
    }
})






























// Event listener for search button

/* Event listener for search button
searchbtn.addEventListener('click', function() {
    const searchItem = input.value.trim().toLowerCase(); // Get the search query and convert to lowercase
    if (searchItem !== '') {
        const filteredProducts = products.filter(product => {
            // Check if the product name contains the search query
            return product.name.toLowerCase().includes(searchItem);
        });
        showItems(filteredProducts); // Show filtered products
    } else {
        showItems(products); // If search query is empty, show all products
    }
});
 */











