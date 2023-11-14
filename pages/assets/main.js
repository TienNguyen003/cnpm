let menu=document.querySelector(".pages__menu");

if(menu)
{
    menu.onclick=function(e)
    {
        menu.classList.toggle("pages__menu-show");
    }
}
