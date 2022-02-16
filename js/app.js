
const APP = {
    DB: null,  //the indexedDB
    isONLINE: 'onLine' in navigator && navigator.onLine,
    tmdbBASEURL: '',
    tmdbAPIKEY: '',
    tmdbIMAGEBASEURL: '',
    results: [],
    init: ()=>{
        //when the page loads
        //open the database
        APP.openDatabase(APP.registerSW); //register the service worker after the DB is open
        
    },
    registerSW: ()=>{
        //register the service worker

        //then add listeners and run page specific code
        APP.pageSpecific();
        APP.addListeners();
    },
    openDatabase: (nextStep)=>{
        //open the database
        //add the update, error, success listeners in here
        //call nextStep onsuccess
        //create searchStore with keyword as keyPath
        //create suggestStore with movieid as keyPath
    },
    createTransaction: (storeName)=>{
        let tx;
        //create a transaction to use for some interaction with the database
        return tx;
    },
    getDBResults: (storeName, keyValue) => {
        //return the results from storeName where it matches keyValue
    },
    addResultsToDB: (obj, storeName)=>{
        //pass in the name of the store
        //save the obj passed in to the appropriate store
    },
    addListeners: ()=>{
        //add listeners
        //when the search form is submitted
        //when clicking on the list of possible searches on home or 404 page
        //when a message is received
        //when online and offline
    },
    pageSpecific:()=>{
        //anything that happens specifically on each page
        if(document.body.id === 'home'){
            //on the home page
        }
        if(document.body.id === 'results'){
            //on the results page
            //listener for clicking on the movie card container 
        }
        if(document.body.id === 'suggest'){
            //on the suggest page
            //listener for clicking on the movie card container 
        }
        if(document.body.id === 'fourohfour'){
            //on the 404 page
        }
    },
    changeOnlineStatus: (ev)=>{
        //when the browser goes online or offline
    },
    messageReceived: (ev)=>{
        //ev.data
    },
    sendMessage: (msg)=>{
        //send a message to the service worker
    },
    searchFormSubmitted: (ev)=>{
        ev.preventDefault();
        //get the keyword from teh input
        //make sure it is not empty
        //check the db for matches
        //do a fetch call for search results
        //save results to db
        //navigate to url
    },
    cardListClicked: (ev)=>{
        // user clicked on a movie card
        //get the title and movie id
        //check the db for matches
        //do a fetch for the suggest results
        //save results to db
        //build a url
        //navigate to the suggest page
    },
    getData: (endpoint, callback)=>{
        //do a fetch call to the endpoint
        fetch(url)
            .then(resp=>{
                if(resp.status >= 400){
                    throw new NetworkError(`Failed fetch to ${url}`, resp.status, resp.statusText);
                }
                return resp.json();
            })
            .then(contents=>{
                let results = contents.results;
                //remove the properties we don't need
                //save the updated results to APP.results
                // call the callback
            })
            .catch(err=>{
                //handle the NetworkError
            })
    },
    getSearchResults:(keyword)=>{
        //check if online
        //check in DB for match of keyword in searchStore
        //if no match in DB do a fetch
        // APP.displayCards is the callback
    },
    getSuggestedResults:(movieid)=>{
        //check if online
        //check in DB for match of movieid in suggestStore
        //if no match in DB do a fetch 
        // APP.displayCards is the callback
    },
    displayCards: ()=>{
        //display all the movie cards based on the results array
        // in APP.results
        //these results could be from the database or from a fetch
    },
    navigate: (url)=>{
        //change the current page
        window.location = url; //this should include the querystring
    }

}

document.addEventListener('DOMContentLoaded', APP.init);

class NetworkError extends Error {
    constructor(msg, status, statusText){
        super(msg);
        this.status = status;
        this.statusText = statusText;
    }
}