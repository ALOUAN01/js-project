var l = document.querySelector('#cours');
function create(path , titre , price ){
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
    l.append(div)
}

var linkall=document.querySelector('#filter_All');
content.forEach((v)=>{
    create(v.path , v.title , v.price);
    });
function  allcourse(){
let  div =document.querySelector('#cours');
div.innerHTML="";
content.forEach((v)=>{
create(v.path , v.title , v.price);
});
}



function  search(){
    let  div =document.querySelector('#cours');
    div.innerHTML="";
    let input =document.querySelector('.inp').value;

    content.forEach((v)=>{

        
        if (v.title.includes(input)){

            create(v.path , v.title , v.price);
        };
    
    });
    }




function  css(){
    let  div =document.querySelector('#cours');
    div.innerHTML="";

    content.forEach((v)=>{
        if (v.cat=="css"){

            create(v.path , v.title , v.price);
        };
    
    });
    }
    function  js(){
        let  div =document.querySelector('#cours');
        div.innerHTML="";
    
        content.forEach((v)=>{
            if (v.cat=="js"){
    
                create(v.path , v.title , v.price);
            };
        
        });
        }
        
    function  html(){
        let  div =document.querySelector('#cours');
            div.innerHTML="";
        
            content.forEach((v)=>{
                if (v.cat=="html"){
        
                    create(v.path , v.title , v.price);
                };
            
            });
            }
            function  php(){
                let  div =document.querySelector('#cours');
                div.innerHTML="";
            
                content.forEach((v)=>{
                    if (v.cat=="php"){
            
                        create(v.path , v.title , v.price);
                    };
                
                });
                }
                function  sql(){
                    let  div =document.querySelector('#cours');
                    div.innerHTML="";
                
                    content.forEach((v)=>{
                        if (v.cat=="sql"){
                
                            create(v.path , v.title , v.price);
                        };
                    
                    });
                    }


                    function  range(){
                    let range =document.querySelector('#range');
                    let  div =document.querySelector('#cours');
                    div.innerHTML="";
                
                    content.forEach((v)=>{
                        if (v.price<=range.value){
                
                            create(v.path , v.title , v.price);
                        };
                    
                    });
                    }

function updaterange(val) {
  document.getElementById('textInput').innerHTML=val; 
  }
