/*Este funcion realiza la peticion HTTP, trae las imagenes, las procesa y podria retornarlas*/ 
//Peticion HTTP con endpoint en JavaScript actual
export const getGifs = async(category) => {
    //Nuestro EndPoint realizado en Postman
    //Interpolación de String ${} pada poder utilizarlo se necesitan utilizar backtick ```
    /*encodeURI es de javaScript y se utiliza para tener una correcta peticion, 
    por si categoria tiene espacios y cosas asi*/
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=Bvwf4908FCigtoLydHw6MPnQOC5Pn2FM`;
/*Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar 
peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco 
más sencillo y menos verbose.*/  
    const respuesta = await fetch(url);
    //Obtenemos la respuesta en formato json
    const {data} = await respuesta.json();
    //Solo extraemos de data lo que nos interesa, en este caso seria el id, titulo y url mutando el arreglo que recibimos 
    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;//Esta funcion como es async regresa una promesa que resuelve la coleccion de mis imagenes
    /*nosotros aqui no contamos con el SetImages 
    setImages(gifs);*/
}