const d=document;

export function countElement(){
    const $gifs=d.querySelectorAll(".grid-collection .card-gif")
        let nElemnt=$gifs.length;
        let page=nElemnt/30;
        return {nElemnt,page}
    
}