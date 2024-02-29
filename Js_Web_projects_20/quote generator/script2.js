// another getting api method

async function getQuotes(){
    console.log("working")
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    console.log("working")
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data)
    }catch(error){
        getQuotes()
        console.log('no quote',error);

    }
}
// getQuotes()
