const MENU_ITEM_ABOUT = "About";
const MENU_ITEM_CATALOG = "Catalog";
const MENU_ITEM_CART = "Shopping cart";

let fragment = document.createDocumentFragment();
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
headerLICartLink.textContent = MENU_ITEM_CART;
headerLICartLink.href = "./cart.html";
headerLICart.append(headerLICartLink);

document.body.append(fragment);  
