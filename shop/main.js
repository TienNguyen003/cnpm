let elementBtnFilter=document.querySelector(".shop__body-product-btn");
if(elementBtnFilter)
{
    elementBtnFilter.onclick=function(e)
    {
        let elementSlider=document.querySelector(".shop__body-product-slider");
        let elementBox=document.querySelector(".shop__body-product-box");
        if(elementSlider && elementBox)
        {
            elementSlider.classList.toggle("shop__body-product-btn-hide");
            elementBox.classList.toggle("pc-12");
            elementBox.classList.toggle("pc-9");
        }

    }
}