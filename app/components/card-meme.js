const d=document;

export function cardMeme(meme){

    let {id, name,url,box_count}=meme;


    return `<article class="card-meme" data-id="${id}" data-box="${box_count}">
    <h3>${name}</h3>
    <img src="${url}" alt="${name}">
    </article>
    `
}