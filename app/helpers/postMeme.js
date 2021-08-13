const d = document;
import apiImgflip from "./api-imgflip.js";
export async function post(props) {

    const formData=new FormData();

    formData.append('template_id',props.template_id)
    formData.append('username',apiImgflip.USUARIO)
    formData.append('password',apiImgflip.PASSWORD)
    formData.append('font',"impact")

    let boxes = props.boxes;

    for (let i = 0; i <= boxes.length - 1; i++) {
       formData.append(`boxes[${i}][text]`,boxes[i])
    }


    fetch(apiImgflip.URLPOSTMEME, {
        method: 'POST',
        body: formData
    })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            console.log(json)
            d.querySelector("#root > div > article > img").src=json.data.url;
            const $inputs = d.querySelectorAll("form input");
            $inputs.forEach(el=>el.value="");
            
        })
        .catch(err => console.log(err))
}