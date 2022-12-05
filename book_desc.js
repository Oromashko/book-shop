const BOOKS_JSON = './books.json';
let fragment;

function $_GET(keys) {
   function getElement(arr, keys) {
       let key = keys.shift();
       return keys.length ? getElement(arr[key], keys) : arr[key];
   }

   function setElement(arr, keys, value) {
       let key = keys.shift();
       if (keys.length) {
           arr[key] = {};
           setElement(arr[key], keys, value)
       } else {    
           if (!key) {
               key = 0;
               while (key in arr) {
                   key++;
               }
           }
           arr[key] = value;
       }
   }

 

   let get = {};
   window.location.search.slice(1).split('&').forEach(function(item) {
       let data = item.split('=');
       let key = data[0].replace(/\[.*/, '');
       let value = data[1] ? data[1] : '';
       if (data[0] !== key) {
           let subkeys = data[0].match(/(?<=\[).*?(?=\])/g);
           get[key] = get[key] ? get[key] : {};
           setElement(get[key], subkeys, value);
       } else {
           get[key] = value;
       }
   });

   if (keys) {
       return getElement(get, keys.constructor !== Array ? keys.split() : keys);
   }

   return get;
}
let bookNumber = $_GET('book');
if (bookNumber != null){
   fetch(BOOKS_JSON) //path to the file with json data
         .then(response => response.json())
         .then(data => {
            for (i=0; i<data.length && i < (bookNumber+1); i++){
               console.log(data[i].title);
               let fragment1 = document.createDocumentFragment();
               let h1 = document.createElement('h1');  
               h1.textContent = data[i].title;
               fragment1.append(h1);
               
               
               let desc = document.createElement('p');
               desc.className = "book-desc";
               desc.textContent = data[i].description;
               
               fragment1.append(desc);
               
               
               document.body.append(fragment1);  

            };
            
      });

   };
     
console.log($_GET('book'));