const d=document;

export function cardGif(gif){
    let{title,embed_url}=gif;
    let imgUrl=gif.images.downsized.url;
    
    return `<article class="card-gif"><img src="${imgUrl}" alt="${title? title : embed_url}">
    <h3>${title? title : "Títle doesn´t found"}</h3>
    </article>`
}