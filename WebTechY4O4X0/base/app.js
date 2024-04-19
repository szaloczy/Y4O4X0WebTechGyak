const box = document.querySelector(".slider-box");
const menuItems = document.querySelectorAll(".menu-item");

const products = [
    {
        id: 1,
        title: "Rolex",
        price: 1200,
        colors: [
            {
                code: "silver",
                img: "./assets/rolex1.png",
            },
            {
                code: "gold",
                img: "./assets/rolex.png"
            }
        ],
    },
    {
        id: 2,
        title: "Orient",
        price: 5200,
        colors: [
            {
                code: "silver",
                img: "./assets/orient1.png",
            },
            {
                code: "gold",
                img: "./assets/orient.png"
            }
        ],
    },
    {
        id: 3,
        title: "Cartier",
        price: 5200,
        colors: [
            {
                code: "silver",
                img: "./assets/cartier1.png",
            },
            {
                code: "gold",
                img: "./assets/cartier.png"
            }
        ],
    },
    {
        id: 4,
        title: "Baume",
        price: 3200,
        colors: [
            {
                code: "silver",
                img: "./assets/baume1.png",
            },
            {
                code: "gold",
                img: "./assets/baume2.png"
            }
        ],
    },
    {
        id: 5,
        title: "Chopard",
        price: 2200,
        colors: [
            {
                code: "silver",
                img: "./assets/chopard1.png",
            },
            {
                code: "gold",
                img: "./assets/chopard2.png"
            }
        ],
    }
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductType = document.querySelectorAll(".type");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        box.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change text of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColor.forEach((color, index) => {
            currentProductColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColor.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

/* const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

console.log(payment);

productButton.addEventListener("click", () => {
   payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
}); */