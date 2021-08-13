import { header } from "./components/header.js";
import { main } from "./components/main.js"
import { loader } from "./components/loader.js"
import router from "./components/router.js";
import scroll from "./helpers/scroll.js"
import title from "./components/title.js";
import { search } from "./components/search.js";




const d=document;
export default function App(){
const $root=d.getElementById('root');
$root.innerHTML=null;
$root.appendChild(header());
$root.appendChild(search());
$root.appendChild(title());
$root.appendChild(main());
$root.appendChild(loader());


router()
scroll()


}