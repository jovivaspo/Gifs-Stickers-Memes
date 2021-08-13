const d=document;

export function changeColor(){
    const $h3s=d.querySelectorAll(".main  h3");
    //console.log($h3s)
    for(let i=0;i<=$h3s.length-1;i++){
        if(i===0 || i%2===0){
            $h3s[i].style.color="#3FFF00"
        }else  $h3s[i].style.color="#FF00AA"
    }
}