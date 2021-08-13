const d=document;

export function search(){
    const $form=d.createElement("form");
    $form.classList.add("form-search");
    $form.classList.add("no-active");
    $form.innerHTML=`<input type="search" name="search" id="search" placeholder="Search your gif" autocomplete="off" requered>
    <button class="btn-search"><i class="fas fa-search"></i></button>`;
    
  
    return $form

  
}