 const buttons=document.querySelectorAll('.button');
 const body=document.querySelector('body');
buttons.forEach(function(but) {
    but.addEventListener("click",function(cllick){
        if(cllick.target.id==='grey'){
            body.style.backgroundColor=cllick.target.id;
        }
          if(cllick.target.id==='yellow'){
            body.style.backgroundColor=cllick.target.id;
        }
          if(cllick.target.id==='pink'){
            body.style.backgroundColor=cllick.target.id;
        }
          if(cllick.target.id==='blue'){
            body.style.backgroundColor=cllick.target.id;
        }
        

    }
    )});