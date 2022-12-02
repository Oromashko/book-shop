const BOOKS_JSON = './books.json';
const SHOW_MORE_LINK_TEXT = "Show more";
const SHOW_MORE_LINK_TITLE = "Show more";
const ADD_TO_BAG_BTN_NAME = "Add to bag";
fetch(BOOKS_JSON) //path to the file with json data
        .then(response => response.json())
        .then(data => {
         console.log(data);
         let fragment = document.createDocumentFragment();
         let h1 = document.createElement('h1');
         let divBookCatalog = document.createElement('div');
         divBookCatalog.className = "book-catalog";
         document.body.append(divBookCatalog);
         
         let bookImg = [];
          let divBook = [];
         
         let divBookCatalogImg = [];
         let divBookCatalogRColumn = [];
         let pBookAuthor = [];
         let pBookTitle = [];
         let pBookPrice = [];
         let pBookDesc = [];
         let bookForm = [];
         let bookFormBtn = [];
         bookFormName = [];
         
         for (i=0; i<data.length; i++){
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
            pBookDesc[i].href = data[i].href;
            pBookDesc[i].title = SHOW_MORE_LINK_TITLE;
            pBookDesc[i].textContent = SHOW_MORE_LINK_TEXT;
            divBookCatalogRColumn[i].append(pBookDesc[i]);
        // TODO popup window with book description

            bookForm[i] = document.createElement('form');
            bookForm[i].className = "book-form";
            bookFormName[i] = "bookForm"+i;
            bookForm[i].name = bookFormName[i];
            divBookCatalogRColumn[i].append(bookForm[i]);

            bookFormBtn[i] = document.createElement('button');
            bookFormBtn[i].className = "addToBag-btn";
            bookFormBtn[i].form = bookFormName[i];
            bookFormBtn[i].name = "addToBag";
            bookFormBtn[i].value = "addToBag";
            bookFormBtn[i].formTarget = "frame";
            bookFormBtn[i].textContent = ADD_TO_BAG_BTN_NAME;
            divBookCatalogRColumn[i].append(bookFormBtn[i]);
              } 
               
              document.body.append(fragment);  
        
        });