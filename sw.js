const version = 1;
const staticName = `PWA-Static-Movie-APP-${version}`;
const dynamicName = `PWA-Dynamic-Movie-APP-${version}`;
const cacheLimit = 100;
const cacheList = [
    '/',
    '/index.html',
];

self.addEventListener('install', (ev)=>{
    ev.waitUntil();
});
self.addEventListener('activate', (ev)=>{
    ev.waitUntil();
});
self.addEventListener('fetch', (ev)=>{
    ev.respondWith();
});
self.addEventListener('message', (ev)=>{
    //check ev.data to get the message
});

function sendMessage(msg){
    //send a message to the browser from the service worker
};

function limitCache(){
    //remove some files from the dynamic cache
}

function checkForConnection(){
    //try to talk to a server and do a fetch() with HEAD method.
    //to see if we are really online or offline
    //send a message back to the browser
}