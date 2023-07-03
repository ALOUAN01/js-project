
var l = document.querySelector('#fc'),btn1= document.querySelector('#btn1'),btn2 = document.querySelector('#btn2');
let le = content.length;
function courses(path , titre , price ){
    let div  = document.createElement('div'),
    img  = document.createElement('img'),
    p  = document.createElement('p'),
    span  = document.createElement('span');
    img.src = path ;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode('$'+price));
    div.setAttribute('class','card col-3 me-2 mb-2');
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    l.append(div);
}
x1=Math.floor(Math.random() * le);
x2=Math.floor(Math.random() * le);
x3=Math.floor(Math.random() * le);
    courses(content[x1].path , content[x1].title , content[x1].price);
    courses(content[x2].path , content[x2].title , content[x2].price);
    courses(content[x3].path , content[x3].title , content[x3].price);


btn1.addEventListener("click",function() {
    window.location.replace("page3_cours.html");
});

btn2.addEventListener('click' ,function() {
    window.location.replace("page3_cours.html");
} )



