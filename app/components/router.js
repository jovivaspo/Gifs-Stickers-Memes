import ajax from '../helpers/ajax.js';
import api_giphy from '../helpers/api-giphy.js';
import { countElement } from '../helpers/countElement.js';
import { cardGif } from './card-gif.js';
import { search } from './search.js';
import titles from '../helpers/titles.js';
import api_imgFlip from '../helpers/api-imgflip.js'
import { cardMeme } from './card-meme.js';
import { createMemes } from '../helpers/createMemes.js';
import { post } from '../helpers/postMeme.js';
import { changeColor } from '../assets/color.js';




const d = document;

export default function router() {

    let { hash } = location;

    d.querySelector("h2").innerHTML = titles[hash];
    

    if (!hash || hash === "#/" || hash.includes("trending-gifs")) {
        d.querySelector(".main").innerHTML = "";
        d.querySelector(".form-search").classList.add("no-active")
        ajax({
            url: api_giphy.URL_TREDING,
            cbSuccess: (json) => {
                const gifs = json.data;
                //console.log(gifs)
                d.querySelector(".main").classList.add("grid-collection");
                let gridHtml = "";
                for (let gif of gifs) {
                    //console.log(gif)
                    gridHtml += cardGif(gif)
                    //console.log(gif)
                }

                d.querySelector(".loader").classList.add("hidden");
                d.querySelector(".main").innerHTML = gridHtml;
                changeColor()
                let { nElemnt, page } = countElement()
                localStorage.setItem("ActualPage", page)
                localStorage.setItem("nElements", nElemnt)
            }
        })


    }

    if (hash.includes("#/search")) {
        d.querySelector(".form-search").classList.remove("no-active")
        d.querySelector(".loader").classList.add("hidden");

        d.addEventListener("click", e => {
            if (e.target.matches("form .btn-search") || e.target.matches("form .btn-search>*")) {
                const $form = d.querySelector("form");
                e.preventDefault();
                d.querySelector(".main").innerHTML = "";
                d.querySelector(".loader").classList.remove("hidden");
                localStorage.setItem("search",$form.search.value)

                let searchGif = $form.search.value;

                if (searchGif === "") return

                ajax({
                    url: `${api_giphy.URL_SERCH_GIFS}?q=${searchGif}&api_key=${api_giphy.API_KEY}&limit=30`,
                    cbSuccess: (json) => {
                        const gifs = json.data;
                        //console.log(gifs)
                        d.querySelector(".main").classList.add("grid-collection");
                        let gridHtml = "";
                        for (let gif of gifs) {
                            //console.log(gif)
                            gridHtml += cardGif(gif)
                            //console.log(gif)
                        }

                        d.querySelector(".loader").classList.add("hidden");
                        d.querySelector(".main").innerHTML = gridHtml;
                        changeColor()
                        $form.search.value = "";

                        let { nElemnt, page } = countElement()
                        localStorage.setItem("ActualPage", page)
                        localStorage.setItem("nElements", nElemnt)

                    }
                })


            }
        })


    }

    if (hash.includes("trending-stickers")) {
        d.querySelector(".main").innerHTML = "";
        d.querySelector(".form-search").classList.add("no-active")
        ajax({
            url: api_giphy.URL_TREDING_STICKERS,
            cbSuccess: (json) => {
                const gifs = json.data;
                //console.log(gifs)
                d.querySelector(".main").classList.add("grid-collection");
                let gridHtml = "";
                for (let gif of gifs) {
                    //console.log(gif)
                    gridHtml += cardGif(gif)
                    //console.log(gif)
                }

                d.querySelector(".loader").classList.add("hidden");
                d.querySelector(".main").innerHTML = gridHtml;
                changeColor()
                let { nElemnt, page } = countElement()
                localStorage.setItem("ActualPage", page)
                localStorage.setItem("nElements", nElemnt)
            }
        })


    }

    if(hash.includes("#/create-memes")){
        d.querySelector(".main").innerHTML = "";
        ajax({
            url:api_imgFlip.URLGETMEMES,
            cbSuccess:(datos)=>{
                console.log(datos);
                d.querySelector(".main").classList.add("grid-collection");
                const memes = datos.data.memes;
               // console.log(memes)
                let content = "";
                memes.forEach(meme => {
                    //console.log(meme)
                    content += cardMeme(meme)
                })
                d.querySelector(".loader").classList.add("hidden");
                d.querySelector(".main").innerHTML = content;
                changeColor()
            }
            })

            d.addEventListener("click", e => {
                if (e.target.matches(".card-meme >*")) {
                    const id = e.target.parentNode.dataset.id;
                    const box_count = e.target.parentNode.dataset.box;
                    const name = d.querySelector(`[data-id="${id}"] h3`).textContent;
                    const url = d.querySelector(`[data-id="${id}"] img`).src;
                    //console.log(id,box_count,name,url)
                    const obj = {
                        id: id,
                        name: name,
                        url: url,
                        box_count: box_count
                    }
                    createMemes(obj)
                }
            })

            d.addEventListener("click", e => {
                if (e.target.matches(".window-create-meme .close>*") || (e.target.matches(".window-create-meme .close i>*"))) {
                    const $root = d.querySelector("#root")
                    const $div = d.querySelector(".window-create-meme");
                    $root.removeChild($div)
        
                }
            })
        
            d.addEventListener("click", e => {
                if (e.target.matches(".window-create-meme form .btn-refresh") || e.target.matches(".window-create-meme form .btn-refresh>*")) {
                    e.preventDefault()
                    const $inputs = d.querySelectorAll("form input");
                    $inputs.forEach(el=>{
                        el.value="";
                    })
                    
        
                }
            })
            d.addEventListener("click", e => {
                if (e.target.matches(".window-create-meme form .btn-create")) {
                    e.preventDefault()
                    const $inputs = d.querySelectorAll(".window-create-meme form input");
                    //console.log($inputs)
                    let boxes = [];
                    for (let input of $inputs) {
                        //console.log(input)
                        if(input.value===""){
                            return alert("Introduce texto en todos los elementos")
                        } 
                        else {
                            boxes.push(input.value)
                        }
                    }
                    //console.log(boxes)
                    //console.log(d.querySelector(".window-create-meme .card-meme").dataset.id)
        
                    post({
                        template_id: d.querySelector(".window-create-meme .card-meme").dataset.id,
                        boxes: boxes
                    })
        
                }
            })



    }

    


}