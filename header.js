const MENU_ITEM_ABOUT = "About";
const MENU_ITEM_CATALOG = "Catalog";
const MENU_ITEM_CART = "Shopping cart";
const ITEMS_COUNT = "items_count";
const BOOKS_JSON = './books.json';

var itemCount = 0;
var headerLICartLink;
var headerLICart;
var fragment;
let iCountSuccess;

function getItemCount() {
   let iCount = 0;
   let key;
   
         for(let j=0; j<localStorage.length; j++) {
            key = localStorage.key(j);
            key = key.replace(ITEMS_COUNT,'');
            if (key){
               key = Number(key);
               
                  console.log(`KEY = ${key}`);
                  let item = localStorage.getItem(key);
                  console.log(`item = ${item}`);
                  if (item){
                     item = Number(item);
                     iCount = iCount+item;
                     console.log(`iCount = ${iCount}`);
                  }
               
            }
         };
      
      return iCount;

   
}

function allowDrop(event)
{
  event.preventDefault();
}

function drag(event)
{   event.dataTransfer.setData("Item",event.target.id);
}

function drop(event)
{
   let itemNum;
   let data;
   let headerLICartLink1;

  event.preventDefault();
   itemCount = localStorage.getItem(ITEMS_COUNT);
  if (itemCount){
   itemCount++;
   localStorage.setItem(ITEMS_COUNT,itemCount);
  }else{
   localStorage.setItem(ITEMS_COUNT,'1');
   }
   console.log(itemCount);
  //update items number in shopping cart 
  headerLICartLink1 = document.createElement('a');
   itemCount = localStorage.getItem(ITEMS_COUNT);
   if (!itemCount){  
   localStorage.setItem(ITEMS_COUNT,'0');
   itemCount = 0;
   }
  headerLICartLink1.textContent = MENU_ITEM_CART+" ("+itemCount+" items)";
   headerLICartLink1.href = "./cart.html";
   headerLICartLink1.addEventListener("drop", drop);
   headerLICartLink1.addEventListener("dragover", allowDrop);

  headerLICart.replaceChildren(headerLICartLink1);
  /*remove(headerLICartLink);
  headerLICart.append(headerLICartLink1);
  document.body.remove(fragment); 
  document.body.append(fragment); */
  
   data=event.dataTransfer.getData("Item");
  itemNum = data.replace('item','');
  console.log(itemNum);
  let cartItemCount  = localStorage.getItem(itemNum);
  if (cartItemCount){
   cartItemCount++;
   localStorage.setItem(itemNum, cartItemCount);
   
   console.log(localStorage.getItem(itemNum));

   }else {
   localStorage.setItem(itemNum, '1');
   console.log(localStorage.getItem(itemNum));
   }
  /*targetElement = document.getElementById('target-grid');

  selectedElement = document.getElementById(data);
   targetElement.appendChild($selectedElement);
   
 document.getElementById('itemcount').innerHTML = (itemCount+" Items");
  $selectedElement.innerHTML += "<i class='icon-remove' data-item="+data+"></i>"; */
}
let iCount1 = getItemCount()
console.log(`Count = ${iCount1}`);
iCountSuccess = localStorage.setItem(ITEMS_COUNT, getItemCount());
fragment = document.createDocumentFragment();
let header = document.createElement('header');
fragment.append(header);
let nav = document.createElement('nav');
header.append(nav);
headerUL = document.createElement('ul');
headerUL.className = "main-menu";
header.append(headerUL);

headerLI1st = document.createElement('li');
headerLI1st.className = "main_menu-first_element";
headerUL.append(headerLI1st);

headerLI1stLink = document.createElement('a');
headerLI1stLink.textContent = MENU_ITEM_ABOUT;
headerLI1stLink.href = "./index.html";
headerLI1st.append(headerLI1stLink);

headerLI = document.createElement('li');
headerLI.className = "main_menu-element";
headerUL.append(headerLI);

headerLILink = document.createElement('a');
headerLILink.textContent = MENU_ITEM_CATALOG;
headerLILink.href = "./index.html";
headerLI.append(headerLILink);

headerLICart = document.createElement('li');
headerLICart.className = "main_menu-cart";
headerUL.append(headerLICart);

headerLICartLink = document.createElement('a');
itemCount = localStorage.getItem(ITEMS_COUNT);
  if (!itemCount){  
   localStorage.setItem(ITEMS_COUNT,'0');
   itemCount = 0;
}
headerLICartLink.textContent = MENU_ITEM_CART+" ("+itemCount+")";
headerLICartLink.href = "./cart.html";
headerLICartLink.addEventListener("drop", drop);
headerLICartLink.addEventListener("dragover", allowDrop);
headerLICart.append(headerLICartLink);
document.body.append(fragment);  
