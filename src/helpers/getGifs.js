export const getGifs = async( category ) => {

const url = `https://api.giphy.com/v1/gifs/search?api_key=zqJnSXx6aoEPQgF9NXJOUWV2YRiMOEUw&q=${ category }&limit=10`;
const resp = await fetch( url );
const { data } = await resp.json(); /* LA PAGINA GENERA UN ARREGLO DATA DEL CUAL SOLO SE REQUIERE ALGUNOS ITEMS */

const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
}));

return gifs;
}