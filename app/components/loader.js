const d=document;

export function loader(){
    const $loader=d.createElement("img");
    $loader.src="app/assets/oval.svg"
    $loader.alt="Loading"
    $loader.classList.add("loader");

    return $loader
}