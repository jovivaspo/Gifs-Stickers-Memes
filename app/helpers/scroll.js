import apiGiphy from "./api-giphy.js";
import ajax from "./ajax.js";
import { cardGif } from "../components/card-gif.js";

const d = document;
const w = window;

export default function scroll() {
    d.addEventListener("scroll", e => {
        let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
            { hash } = w.location;
        //console.log(scrollTop + clientHeight,scrollHeight);

        if (scrollTop + clientHeight >= scrollHeight - 1) {
            console.log(hash)
            const $main = d.querySelector(".main");
            let page = localStorage.getItem("ActualPage");
            let elementsInPage = parseInt(localStorage.getItem("nElements"));

            if (!hash || hash === "#/") {
                d.querySelector(".loader").classList.remove("hidden");
                ajax({
                    url: `${apiGiphy.URL_TREDING}&offset=${elementsInPage + 30}`,
                    cbSuccess: (json) => {
                        //console.log(json)
                        const gifs = json.data;
                        let contentGifs = "";
                        gifs.forEach(gif => {
                            contentGifs += cardGif(gif);
                            console.log(gif)
                        });

                        $main.insertAdjacentHTML("beforeend", contentGifs)
                        page++;
                        elementsInPage += 30;
                        localStorage.setItem("ActualPage", page);
                        localStorage.setItem("nElements", elementsInPage);
                        d.querySelector(".loader").classList.add("hidden");
                    }


                })
            }
            if (hash.includes("#/search")){
                d.querySelector(".loader").classList.remove("hidden");
                const searchGif = localStorage.getItem("search");
                ajax({
                    url: `${apiGiphy.URL_SERCH_GIFS}?q=${searchGif}&api_key=${apiGiphy.API_KEY}&limit=30&offset=${elementsInPage + 30}`,
                    cbSuccess: (json) => {
                        //console.log(json)
                        const gifs = json.data;
                        let contentGifs = "";
                        gifs.forEach(gif => {
                            contentGifs += cardGif(gif);
                            console.log(gif)
                        });

                        $main.insertAdjacentHTML("beforeend", contentGifs)
                        page++;
                        elementsInPage += 30;
                        localStorage.setItem("ActualPage", page);
                        localStorage.setItem("nElements", elementsInPage);
                        d.querySelector(".loader").classList.add("hidden");
                    }


                })

            }

            if(hash.includes("trending-stickers")){
               ajax({
                   url:`${apiGiphy.URL_TREDING_STICKERS}&offset=${elementsInPage + 30}`,
                   cbSuccess:(json)=>{
                       const stickers=json.data;
                       let contentStickers="";
                       stickers.forEach(sticker=>{
                            contentStickers+=cardGif(sticker);
                       })
                       d.querySelector(".loader").classList.add("hidden");
                       $main.insertAdjacentHTML("beforeend",contentStickers);
                       page++;
                       elementsInPage += 30;
                       localStorage.setItem("ActualPage", page);
                       localStorage.setItem("nElements", elementsInPage);
                       d.querySelector(".loader").classList.add("hidden");

                   }
               })
            }

            
        }
    })


}