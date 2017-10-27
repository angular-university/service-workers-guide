

const VERSION = 'v2';

self.addEventListener('install', event => {

    log("INSTALLING ");

    const installCompleted = Promise.resolve()
                        .then(() => log("INSTALLED"));

    event.waitUntil(installCompleted);
});

self.addEventListener('activate', event => {

    log("ACTIVATING");

    const activationCompleted = Promise.resolve()
        .then((activationCompleted) => log("ACTIVATED"));


    event.waitUntil(activationCompleted);
});

// handling service worker installation
self.addEventListener('fetch', event => {
    log("HTTP call intercepted - " + event.request.url);
    return event.respondWith(fetch(event.request.url));
});


// each logging line will be prepended with the service worker version
function log(message) {
    console.log(VERSION, message);
}

