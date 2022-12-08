const SHOPPING_CART_HEADER = "Shopping cart";

const CHECKOUT_BTN_NAME = "Checkout";
/*let itemCount;*/
let keyNum;
let cartWrapper;
let cartItem;
let cartItemTitle;
let cartItemCount;
let checkoutBtn;
let price = 0;
let cartItemPrice = Array();
let cartItemTotalPrice = Array();
let cartItemPrice1;
let cartItemTotalPrice1;

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

         //add headers
         cartItemTitle = document.createElement('p');
         cartItemTitle.textContent = HEADER_BOOK_TITLE;
         cartItemTitle.id = "cart-item-title-header";
         cartItemTitle.className = "cart-item-title";
         cartWrapper.append(cartItemTitle);

         cartItemCount = document.createElement('p');
         cartItemCount.textContent = HEADER_ITEM_COUNT;
         cartItemCount.id = "cart-item-count-header";
         cartItemCount.className = "cart-item-count";
         cartWrapper.append(cartItemCount);

         cartItemPrice1 = document.createElement('p');
         cartItemPrice1.textContent = HEADER_PRICE;
         cartItemPrice1.id = "cart-item-price-header";
         cartItemPrice1.className = "cart-item-price";
         cartWrapper.append(cartItemPrice1);
                        
         cartItemTotalPrice1 = document.createElement('p');
         cartItemTotalPrice1.textContent = HEADER_TOTAL_PRICE;
         cartItemTotalPrice1.id = "cart-item-total-price-header";
         cartItemTotalPrice1.className = "cart-item-total-price";
         cartWrapper.append(cartItemTotalPrice1);

         for (let i=0; i<data.length; i++){
            /*console.log(i);*/
            for(let j=0; j<localStorage.length; j++) {
               let key = localStorage.key(j);
             /*  console.log(key);*/
               keyNum = Number(key);
               if (i==keyNum){
                 /* cartItem = document.createElement('div');
                  cartItem.className = "cart-item";
                  cartWrapper.append(cartItem);*/

                  cartItemTitle = document.createElement('p');
                  cartItemTitle.textContent = data[i].title;
                  cartItemTitle.className = "cart-item-title";
                  cartWrapper.append(cartItemTitle);

                  cartItemCount = document.createElement('p');
                  cartItemCount.textContent = localStorage.getItem(key);
                  cartItemCount.className = "cart-item-count";
                  cartWrapper.append(cartItemCount);

                  cartItemPrice[i] = document.createElement('p');
                  cartItemTotalPrice[i] = document.createElement('p');
                  console.log(`i=${i}`);   
                  getItemPrice(i).then(response=>{
                        cartItemPrice[i].textContent=response;
                        cartItemPrice[i].className = "cart-item-price";
                        cartItemTotalPrice[i].className = "cart-item-total-price";
                        
                        cartItemTotalPrice[i].textContent = Number(response)*Number(localStorage.getItem(key));
                        console.log(`response=${response}`);
                     },
                     error=>{cartItemPrice[i].className = reject;
                        console.log(`reject=${reject}}`);         
                     }
                  );
                 // cartItemPrice.textContent = getItemPrice(key);
                  
                 
                  cartWrapper.append(cartItemPrice[i]);
                  
                 
                  
                  cartWrapper.append(cartItemTotalPrice[i]);

                  console.log(data[i].title);
                  console.log(itemCount);
               }else {
                  if (key == ITEMS_COUNT) {
                     itemCount = localStorage.getItem(key);
                     console.log(`itemCount=${itemCount}`);
                  }
               }
               
            }
            
         }
         if (localStorage.length>0){
            //Add total string wrapper
            /*totalWrapper = document.createElement('div');
            totalWrapper.className = 'total-wrapper';
            cartWrapper.append(totalWrapper);*/

            //add total string
            totalTitle = document.createElement('p');
            totalTitle.className =  "cart-item-title";
            totalTitle.id = "total-title";
            totalTitle.textContent = TOTAL_TITLE;
            cartWrapper.append(totalTitle);

            //add total count
            totalItemsCount = document.createElement('p');
            totalItemsCount.className =  "cart-item-count";
            totalItemsCount.id = "total-items-count";
            totalItemsCount.textContent = itemCount;
            cartWrapper.append(totalItemsCount);

            //empty field

            emptyField = document.createElement('p');
            emptyField.className =  "cart-item-price";
            cartWrapper.append(emptyField)

            //add total price
            totalItemsPrice = document.createElement('p');
            totalItemsPrice.className = "cart-item-total-price";
            totalItemsPrice.id = "total-items-price";
            getItemsPrice().then(
               response=>{
               totalItemsPrice.textContent = response;
               cartWrapper.append(totalItemsPrice);
               //add checkout button
               checkoutBtn = document.createElement("Button");
               checkoutBtn.textContent = CHECKOUT_BTN_NAME;
               checkoutBtn.id = "checkout-btn";},
               error=>{});

            console.log(`price=${price}`);

            totalItemsPrice.textContent = price;
            cartWrapper.append(totalItemsPrice);
            //add checkout button
            checkoutBtn = document.createElement("Button");
            checkoutBtn.textContent = CHECKOUT_BTN_NAME;
            checkoutBtn.id = "checkout-btn";
            
            checkoutBtn.value = "checkout";
            checkoutBtn.name = "checkout";
            checkoutBtn.id = "checkout-btn";
            checkoutBtn.addEventListener("click", RunDeliveryPage);
            fragment1.append(checkoutBtn);
         }
         document.body.append(fragment1);
        });
 

  