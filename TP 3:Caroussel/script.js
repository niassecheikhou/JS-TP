const content =document.getElementById('content');
const i1=document.getElementById('left');
const i2=document.getElementById('right');
// const body=document.querySelector('body');
const photo=document.getElementById('photo');

    var getPhoto=[
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg', 
    'images/image5.jpg',
    'images/image6.jpg',
    ]


    var i=0;

    function faitePasserLesImages(){
        photo.src=getPhoto[i];
        
        if (i<getPhoto.length-1) {
            i++
            console.log(i)
        }else{
            i=0;
        }
        // setTimeout("faitePasserLesImages()",2000);
        
    }
    faitePasserLesImages()

// icone1(getPhoto.length)
 icone1(-1);
   nbrs=0; 
function icone1(nbrs){
    nbrs++
    getPhoto.setAttribute('src',getPhoto[nbrs]);
    i1.addEventListener('click',function(){
        icone1(nbrs)
    
    })
}
    
        
            




    // i2.addEventListener('click',function(){
    //     if(i<0){
    //         i++;
    
    //     }
    
        
    // })

// body.onload=function(){
//     nbr=4
//     p=0;
//     content.style.width=(800*nbr)+'px';
//         for(i=1;i<=nbr;i++){
//             const div=document.createElement('div');
//             div.setAttribute('class','photo');
//             div.style.backgroundImage="url(images/image"+i+".jpg)";
//             content.appendChild(div);

//         }
// }

// i1.addEventListener('click', function(){
//     if(p>-nbr+1);
//     p--;
//     content.style.transform="translate("+p*800+"px)";
//     content.style.transition="all 0.3s ease";
    
    
// })

// i2.addEventListener('click',function(){
//     if(p<0);
//     p++;
//     content.style.transform="translate("+p*800+"px)";
//     content.style.transition="all 0.3s ease";
//     if (p==nbr){
//         p=0;
//     }

// })

// function afficherMasquer(){
//     if(p== -nbr+1){
//         i1.style.visibility="hidden";
       
//     }else{
        
//         i1.style.visibility="visible";
//     }
    
    
// }  
  
//  function afficherMasquer(){
//     if(p=0){
//         i2.style.visibility="hidden";
        
//     }else{
//         i2.style.visibility="visible";
//     }
    
    
// }  


