const d=document;

export function header(){
const $header=d.createElement("header");
$header.innerHTML=`
<h1>GIFS&MEMES</h1>
<nav class="menu">
    <ul>
        <li><a href="#/" style="color:#FF00AA">Home</a>
        <li><a href="#/trending-gifs" style="color:#3FFF00">Trending gifs</a>
        <li><a href="#/search" style="color:#499CE8">Search gifs</a>
        <li><a href="#/trending-stickers">Trending stickers</a>
        <li><a href="#/create-memes"  style="color:#F7E226">Create memes</a>
    </ul>
</nav>
<div class="btn-menu hidden">
<i class="fas fa-bars"></i>
</div>
`

return $header
}