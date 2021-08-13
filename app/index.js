
import App from './App.js'
import { menu } from './components/menu-responsive.js';
import responsiveMedia from './helpers/responsive.js';


const d=document;
const w=window;

d.addEventListener("DOMContentLoaded", e=>{
   App();
   responsiveMedia()
   

})

w.addEventListener("hashchange",e=>{
   App();
   responsiveMedia()

  
})

d.addEventListener("click",e=>{
   menu(e)
})