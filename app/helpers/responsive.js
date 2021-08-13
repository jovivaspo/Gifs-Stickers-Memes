export default function responsiveMedia(e){
    console.log("hola")
    let breakpoint=window.matchMedia("(max-width:770px)");
    const responsive=(e)=>{
        if(e.matches){
            document.querySelector(".btn-menu").classList.remove("hidden")
        }
    }

    breakpoint.addListener(responsive)
    responsive(breakpoint)
}