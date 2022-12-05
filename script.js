const BOOKS_JSON = './books.json';
const SHOW_MORE_LINK_TEXT = "Show more";
const SHOW_MORE_LINK_TITLE = "Show more";
const ADD_TO_BAG_BTN_NAME = "Add to bag";
const BOOK_CATALOG_HEADER = "Book Catalog";
const HOST = window.location.origin+'/book-shop';
const DESC_PAGE = "desc.html";
const ADD_TO_BAG_STRING = "The item is added to cart";

let url;
let data;
let author;
let title;
let price;
let desc;
let addButtonID;
let divBookCatalog;
let divBookCatalogImg = [];
let divBookCatalogRColumn = [];
let divBook = [];
console.log(window.location.origin);
/*async function doRequest(url, data) {
   let res = await fetch(url, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
   });

   if (res.ok) {

       // let text = await res.text();
       // return text;

       let ret = await res.json();
       return JSON.parse(ret.data);

   } else {
       return `HTTP error: ${res.status}`;
   }
}*/


function AddToBag(event){

   const buttonID = event.target;
  
   let cartItemCount  = localStorage.getItem(buttonID.id);
   if (cartItemCount){
      cartItemCount++;
   localStorage.setItem(buttonID.id, cartItemCount);
   console.log(localStorage.getItem(buttonID.id))
   }else {
      localStorage.setItem(buttonID.id, '1');
      console.log(localStorage.getItem(buttonID.id))
   }
   alert(ADD_TO_BAG_STRING);
   /*let fragment2 = document.createDocumentFragment();
   let infoDiv = document.createElement('div');
   infoDiv.className = "cart-add-info";
   fragment2.append(infoDiv);
   let cartAddInfoText = document.createElement('p');
   cartAddInfoText.className = "cart-add-info-text";
   cartAddInfoText.textContent = ADD_TO_BAG_STRING;
   infoDiv.append(cartAddInfoText);
   divBookCatalogRColumn[buttonID.id].append(fragment2);
*/
   
}

function showBookDescHandler(event){

   let newWin = window.open("desc.html", "Book Information", "width=200,height=200, popup=1");
   newWin.document.write("Hello, world!");
}



fetch(BOOKS_JSON) //path to the file with json data
        .then(response => response.json())
        .then(data => {
         console.log(data);
         let fragment = document.createDocumentFragment();
         let h1 = document.createElement('h1');
         h1.textContent = BOOK_CATALOG_HEADER;
         fragment.append(h1);
         divBookCatalog = document.createElement('div');
         divBookCatalog.className = "book-catalog";
         
         fragment.append(divBookCatalog);
         
         let bookImg = [];
        /*  let divBook = [];*/
         
   /*      let divBookCatalogImg = [];
         let divBookCatalogRColumn = [];*/
         let pBookAuthor = [];
         let pBookTitle = [];
         let pBookPrice = [];
         let pBookDesc = [];
         let bookForm = [];
         let bookFormBtn = [];
         bookFormName = [];
         
         for (i=0; i<data.length; i++){
            console.log("i=",i);
            divBook[i] = document.createElement('div');
            divBook[i].className="book"; 
            divBookCatalogImg[i] = document.createElement('img');
            divBookCatalogImg[i].className = "book-img";
            divBookCatalogImg[i].src = data[i].imageLink;
            divBook[i].append(divBookCatalogImg[i]);

            divBookCatalogRColumn[i] = document.createElement('div');
            divBookCatalogRColumn[i].className="book-catalog-rcolumn";
            divBook[i].append(divBookCatalogRColumn[i]);
            divBookCatalog.append(divBook[i]);  

            pBookAuthor[i] = document.createElement('p');
            pBookAuthor[i].className = "book-author";
            pBookAuthor[i].textContent = data[i].author;
            divBookCatalogRColumn[i].append(pBookAuthor[i]);

            pBookTitle[i] = document.createElement('p');
            pBookTitle[i].className = "book-title";
            pBookTitle[i].textContent = data[i].title;
            divBookCatalogRColumn[i].append(pBookTitle[i]);

            pBookPrice[i] = document.createElement('p');
            pBookPrice[i].className = "book-price";
            pBookPrice[i].textContent = "Price: "+data[i].price;
            divBookCatalogRColumn[i].append(pBookPrice[i]);

            pBookDesc[i] = document.createElement('a');
            pBookDesc[i].className = "book-desc";
            
            url = HOST+"/"+DESC_PAGE+"?"+"book="+i;
            /*author = "\'"+"author"+"\'"+": "+pBookAuthor[i].textContent;
            
            title = "\'"+"title"+"\'"+": "+pBookTitle[i].textContent;
            price = "\'"+"price"+"\'"+": "+pBookPrice[i].textContent;
            desc = "\'"+"description"+"\'"+": "+pBookDesc[i].textContent;
            
            data = new Array(author, title, price, desc);
            */
            
            /*pBookDesc[i].href = HOST+"/"+DESC_PAGE+"?"+"author="+pBookAuthor[i].textContent+"&title="+pBookTitle[i].textContent+"&price="+pBookPrice[i].textContent+"&description="+pBookDesc[i].textContent;*/
            pBookDesc[i].href = url;
            
            pBookDesc[i].title = SHOW_MORE_LINK_TITLE;
            pBookDesc[i].textContent = SHOW_MORE_LINK_TEXT;
            divBookCatalogRColumn[i].append(pBookDesc[i]);
           // pBookDesc[i].addEventListener("click", showBookDescHandler);
            // TODO popup window with book description

            bookForm[i] = document.createElement('form');
            bookForm[i].className = "book-form";
            bookFormName[i] = "bookForm"+i;
            bookForm[i].name = bookFormName[i];
            divBookCatalogRColumn[i].append(bookForm[i]);

            bookFormBtn[i] = document.createElement('button');
            bookFormBtn[i].className = "addToBag-btn";
            
            bookFormBtn[i].id = i;
            bookFormBtn[i].form = bookFormName[i];
            bookFormBtn[i].name = "addToBag";
            bookFormBtn[i].value = "addToBag";
            bookFormBtn[i].formTarget = "frame";
            bookFormBtn[i].textContent = ADD_TO_BAG_BTN_NAME;
            bookFormBtn[i].addEventListener("click", AddToBag);
            divBookCatalogRColumn[i].append(bookFormBtn[i]);
              } 
               
              document.body.append(fragment);  
        
        });