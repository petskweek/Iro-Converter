if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }
  function show() {
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then(x => x.json())
    .then((y)=>{
    document.getElementById("yes").src = y.message;
    document.getElementById("no").innerHTML = y.status;
    })
  }