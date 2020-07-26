export const getGifts = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=h3k9Xgr9gHIyDWpHQr97XGP6YN9ZfVAN`;
    
    const response = await fetch(url);
    const {data} = await (await response).json();

    const gifts = data.map(img => {
        return ({
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        });
    });

    return gifts;
}