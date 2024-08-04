
let body = document.querySelector('body');
let button = document.querySelectorAll('.button');


// let changecolor = function(e){
//     if(e.target.id===grey){
//         body.style.backgroundColor = 'grey';
//     }
// }


// 

// button.forEach(function (button) {
//     button.addEventListener('click',function(e){
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = 'grey';
//         }
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = 'blue';
//         }
//         if(e.target.id === 'orange'){
//             body.style.backgroundColor = 'orange';
//         }
//         if(e.target.id === 'purple'){
//             body.style.backgroundColor = 'purple';
//         }
        
//     });
// });

// button.forEach(function (button) {
//     button.addEventListener('click',function(e){
       
//         switch(e.target.id){
//             case 'grey':
//                 body.style.backgroundColor = 'grey';
//                 break;
//             case 'blue':
//                 body.style.backgroundColor = 'blue';
//                 break; 
//             case 'orange' :
//                 body.style.backgroundColor = 'orange';
//                 break; 
//             case 'purple'  :
//                 body.style.backgroundColor = 'purple';
//                 break; 
//         }
//     });
// });


let changecolor = (e)=>{
                if(e.target.id === 'grey'){
                    body.style.backgroundColor = 'grey';
                }
                if(e.target.id === 'blue'){
                    body.style.backgroundColor = 'blue';
                }
                if(e.target.id === 'orange'){
                    body.style.backgroundColor = 'orange';
                }
                if(e.target.id === 'purple'){
                    body.style.backgroundColor = 'purple';
                }

}
button.forEach(function(button){
    button.addEventListener('click',changecolor);
});