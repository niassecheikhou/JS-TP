const myboutton=document.querySelectorAll('button');
const myfooter=document.querySelector('.footer');

myboutton[0].addEventListener('click', function(){
     const mybnt=document.createElement('button');
     mybnt.setAttribute('class','Success');

    
    myfooter.appendChild(mybnt);
    mybnt.innerHTML='Notification Success';

    setTimeout(()=> {
        myfooter.removeChild(mybnt);
     },1000);
    
})
myboutton[1].addEventListener('click', function(){
    const mybnt=document.createElement('button');
    mybnt.setAttribute('class','Danger');

   
   myfooter.appendChild(mybnt);
   mybnt.innerHTML='notification Danger';

   setTimeout(()=> {
    myfooter.removeChild(mybnt);
 },1000);
   
})
myboutton[2].addEventListener('click', function(){
    const mybnt=document.createElement('button');
    mybnt.setAttribute('class','Waming');

   
   myfooter.appendChild(mybnt);
   mybnt.innerHTML='notification Waming';

   setTimeout(()=> {
    myfooter.removeChild(mybnt);
 },1000);
   
})
myboutton[3].addEventListener('click', function(){
    const mybnt=document.createElement('button');
    mybnt.setAttribute('class','Info');

   
   myfooter.appendChild(mybnt);
   mybnt.innerHTML='notification Info';
   setTimeout(()=> {
    myfooter.removeChild(mybnt);
 },10000);

})
 


