const $slider = document.querySelector("#slider");
const $panel = document.querySelector(".panel");
const $panel_li = document.querySelectorAll(".panel li");
const $dots = document.querySelector(".dots");
const $dots_li = document.querySelectorAll(".dots li");

// console.log($panel_li)
// console.log($dots_li)

for(let i=0; i<$panel_li.length; i++){
    $dots_li[i].onclick = function(){
        var margin_left = -400 * i;
        $panel.style.marginLeft = margin_left + "px";        
        console.log($dots.children)
    }
    console.log($dots_li[i].className)
}