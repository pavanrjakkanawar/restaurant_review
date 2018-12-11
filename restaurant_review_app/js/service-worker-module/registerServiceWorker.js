if(navigator.serviceWorker) {
    navigator.serviceWorker.register('/serviceWorker.js', {
        scope: '/'
      })
    .then(function(reg) {
        console.log("Service Worker Registered");
    })
    .catch(function(err){
        console.log(`Registering Service Worker Failed ${err}`);
    })
}
else {
    console.log("Service Worker not supported.");
}