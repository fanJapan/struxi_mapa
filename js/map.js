
document.addEventListener("DOMContentLoaded",loaded);
let links= ["http://www.onet.pl","http://www.wp.pl","http://www.interia.pl","http://www.google.com","http://www.facebook.com"];
let poligones  = document.querySelectorAll("polygon");


function loaded()
{
    getElements();
}

/*

*/
function getElements()
    {
    let container = document.querySelector("#container");
    container.addEventListener("mouseover",(e)=>onContainer(e.target)); 
    container.addEventListener("mouseout",(e)=>outContainer(e.target));

        for (let i = 0 ; i<poligones.length;i++)
        {
            poligones[i].addEventListener("mouseover",(e)=>hide(e.target)); 
            poligones[i].addEventListener("mouseout",(e)=>show(e.target));
            poligones[i].addEventListener("click",(e)=>action(e.target));
        }

    }

function outContainer(container)
    {
        document.querySelector(".labels").style.zIndex = 2000;
        document.querySelector(".labels").style.opacity= "1.0";
        document.querySelector(".labels").style.opacity = 'alpha(opacity=100)';
    }

function onContainer(container)
{
    document.querySelector(".labels").style.zIndex = -1000;
}

    
function hide(element,clear=false)
{

    element.style.opacity = "0.5";
    element.style.filter  = 'alpha(opacity=50)';
    document.body.style.cursor = 'pointer';
}
function show(element,add=false)
{
    element.style.opacity = "0.8";
    element.style.filter  = 'alpha(opacity=80)';
    document.body.style.cursor = 'default';
}

function action(element)
{
let hiperlink = links[parseInt(element.id.split("_")[0].substr(4,1))-1];
window.open(hiperlink, "_blank"); 
}

/*
(function()
{
	console.log("funcja samouruchamiająca się");

	
})();
*/
