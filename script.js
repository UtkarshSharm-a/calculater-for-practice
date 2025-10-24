
let buttons=document.querySelectorAll('button')
let input=document.getElementById("inputBox")
let string="";
let arr=Array.from(buttons)//convert the button elem into array
arr.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            input.value=string;

        }else if(e.target.innerHTML=="AC"){
            string=" ";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1);
            input.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            input.value=string;
        }
    })
})

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('calc-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/icon-192x192.png',
        '/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(() => console.log("Service Worker registered!"));
}








//////////////////////////////////////////////////////////////////////////

///java script practice

//(1) concatination of string

// let str=["hi","hello","huge","!"];
// function concat(str){
//     let result="";

//     for(let i=0;i<str.length;i++){
//         result=result+str[i];

//     }

//     return result;
// }
// let s=concat(str)
// console.log(s)

///ans   ===> hihellohuge!


///(2)scope

// let sum=23;

// function scope(a,b){
//     // let sum=a+b;
//     console.log(sum)
// }
// scope(2,3)
// console.log(sum)

///(3)

/// WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber.
// function filterfunction(array,target){

//     return array.filter(element => element>target)

// }

// const number=[2, 3, 4, 5, 7, 8, 9];
// const target=3;
// let result=filterfunction(number,target);
// console.log(result)



