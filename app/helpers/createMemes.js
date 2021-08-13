import { cardMeme } from "../components/card-meme.js";


const d=document;

export function createMemes(props){

    let {id, name,url,box_count}=props;

    const $div=d.createElement("div")
    $div.classList.add("window-create-meme");
    d.querySelector(".main").insertAdjacentElement("afterend",$div)


    const meme=cardMeme(props);
    //console.log(meme)

    $div.innerHTML=meme

    const $form=d.createElement("form");
    let template="";
    let textos=parseInt(box_count)
    for(let i=1;i<=textos;i++){
        
        template+=`
        <input type="text" placeholder="Input text${i}" id="text-${i}" autocomplete="off" required>`
    }

    template+=`<button class="btn-create">Create</button>`

    template+=`<button class="btn-refresh"><i class="fas fa-sync"></i></button>`

    $form.innerHTML=template;

    $div.insertAdjacentElement("beforeend",$form)


    const $close=d.createElement("div");
    $close.classList.add("close");
    $close.innerHTML=`<i class="fas fa-window-close"></i>`


    $div.insertAdjacentElement("beforeend",$close)


    

}