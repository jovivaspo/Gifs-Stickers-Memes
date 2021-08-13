const d=document

export function menu(e){
    
        const $menu=d.querySelector(".menu");
        if(e.target.matches(".btn-menu")|| e.target.matches(".btn-menu i")){
           
            if($menu.classList.contains("active")){
                $menu.classList.remove("active")
            }
            else{
                $menu.classList.add("active")
            }
           
        }

        if($menu.classList.contains("active") && e.target.matches(".menu ul li >a")){
            $menu.classList.remove("active")
        }

}