//Javascript for tab navigation horizontal scroll buttons
const d=document;

const btnLeft = d.querySelector(".left_btn");
const btnRight = d.querySelector(".right_btn");
const tabMenu = d.querySelector(".tab_menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? 'block': 'none';
    btnRight.style.display = scrollableWidth > scrollLeftValue ? 'block' : 'none';
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    // IconVisibility();
    setTimeout(()=>IconVisibility(),50);
})

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    // IconVisibility();
    setTimeout(()=>IconVisibility(),50);
})

window.onload=function(){
    btnRight.style.display=tabMenu.scrollWidth>tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? 'block' : 'none';
}

window.onresize=function(){
    btnRight.style.display=tabMenu.scrollWidth>tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? 'block' : 'none';
}