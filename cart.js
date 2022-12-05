const SHOPPING_CART_HEADER = "Shopping cart";
const BOOKS_JSON = './books.json';
const CHECKOUT_BTN_NAME = "Checkout";
let itemCount;
let keyNum;
let cartWrapper;
let cartItem;
let cartItemTitle;
let cartItemCount;
let checkoutBtn;

function RunDeliveryPage(event){
   window.open("./delivery.html", event.target);
}

let h1 = document.createElement('h1');
h1.textContent = SHOPPING_CART_HEADER;


fragment.append(h1);
document.body.append(fragment);


   fetch(BOOKS_JSON) //path to the file with json data
        .then(response => response.json())
        .then(data => {
         let fragment1 = document.createDocumentFragment();
         cartWrapper = document.createElement('div');
         cartWrapper.id = "cart-wrapper";
         fragment1.append(cartWrapper);

         for (let i=0; i<data.length; i++){
            /*console.log(i);*/
            for(let j=0; j<localStorage.length; j++) {
               let key = localStorage.key(j);
             /*  console.log(key);*/
               keyNum = Number(key);
               if (i==keyNum){
                  cartItem = document.createElement('div');
                  cartItem.className = "cart-item";
                  cartWrapper.append(cartItem);

                  cartItemTitle = document.createElement('p');
                  cartItemTitle.textContent = data[i].title;
                  cartItemTitle.className = "cart-item-title";
                  cartItem.append(cartItemTitle);

                  cartItemCount = document.createElement('p');
                  cartItemCount.textContent = localStorage.getItem(key);
                  cartItemCount.className = "cart-item-count";
                  cartItem.append(cartItemCount);

                  itemCount = localStorage.getItem(key);

                  console.log(data[i].title);
                  console.log(itemCount);
               }
               
            }
            
         }
         if (localStorage.length>0){
            //add checkout button
            checkoutBtn = document.createElement("Button");
            checkoutBtn.textContent = CHECKOUT_BTN_NAME;
            checkoutBtn.id = "checkout-btn";
            
            checkoutBtn.value = "checkout";
            checkoutBtn.name = "checkout";
            checkoutBtn.addEventListener("click", RunDeliveryPage);
            cartWrapper.append(checkoutBtn);
         }
         document.body.append(fragment1);
        });
 

  