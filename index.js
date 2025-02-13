const products = [
  { id: 1, name: "Product 1", desc: "description of product", price: 25 },
  { id: 2, name: "Product 2", desc: "description of product", price: 45 },
  { id: 3, name: "Product 3", desc: "description of product", price: 30 },
];
const cart = {};
const addToCart = (id) => {
  // const score = {};
  // score["maths"] = 95;
  // //console.log(score);
  // score["maths"] = score["maths"] + 2 ;
  // console.log(score);
  if (!cart[id]) cart[id] = 1;
  console.log(cart);
  showCart();
};

const showCart = () => {
  let str = "";
  products.map((value) => {
    if (cart[value.id]) {
      str += `
      <li>${value.name}-$${value.price}-<button onclick='decrement(${
        value.id
      })'>-</button>${cart[value.id]}<button onclick='increment(${
        value.id
      })'>+</button>-${value.price * cart[value.id]}</li>
      `;
    }
  });
  divCart.innerHTML = str;
  let count = Object.keys(cart).length;
  cartcount.innerHTML = count;
  showtotal();

  //showCartCount()
};
//   const showtotal = () => {
//     let total = 0;
//     products.forEach((value) => {
//       if (cart[value.id]) {
//         total += value.price * cart[value.id];
//       }
//     });
//     divtotal.innerHTML=`<h3>Total:${total}<h3>`
//   };
const showtotal = () => {
  let total = products.reduce((sum, value) => {
    //  if(cart[value.id]){
    // return sum + value.price * cart[value.id];
    // }
    // return sum;
    return sum + value.price * (cart[value.id] ? cart[value.id] : 0);
  }, 0);

  divtotal.innerHTML = `<h3>Total: $${total}</h3>`;
};

const showProducts = () => {
  let str = "<div class='row'>";
  products.map((value) => {
    str += `
    <div class='box'>
      <h3>${value.name}</h3>
      <p>${value.desc}</p>
      <h4>${value.price}</h4>
      <button onclick=addToCart(${value.id})>Add to cart</button>
      </div>
    `;
  });
  divProducts.innerHTML = str+"</div>";
};
const increment = (id) => {
  cart[id] = cart[id] + 1;
  //cart[id]++;
  showCart();
};
const decrement = (id) => {
  if (cart[id] > 1) cart[id]--;
  else delete cart[id];

  showCart();
};
//       const showCartCount = () => {
//   let count = Object.keys(cart).length;
//  cartcount.innerHTML = `<h3>Cart Items: ${count}</h3>`;
// };
const displaycart = () => {
  //divCartBlock.style.display="block"
  divCartBlock.style.left = "70%";
};
const hidecart = () => {
  //divCartBlock.style.display = "none";
  divCartBlock.style.left = "100%";
};
