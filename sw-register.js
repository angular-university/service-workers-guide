
if ('serviceWorker' in navigator) {

    window.addEventListener('load', function () {

        navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        })
        .then(registration => {

            console.log("Service Worker registration completed ...");

        });

    });

}

