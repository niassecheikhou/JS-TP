const burger=document.getElementById('burger');
const navbar=document.getElementById('navbar');

  
  


const menus=[
        {
          iconeleft :'nav-icon fas fa-tachometer-alt fa-2x',
          text:'Dashboard',
          newnam:'',
          iconeright:'fa-solid fa-chevron-left',

        },
            {
              iconeleft :'nav-icon fas fa-th fa-2x',
              text:'widgets',
              newnam:'New',
              iconeright:'fa-solid fa-chevron-left',
            },
    
                 { iconeleft :'nav-icon fas fa-copy fa-2x',
                  text:'Layout options',
                  newnam:'6',
                  smenu:[
                    {
                      iconeleft :'nav-icon fas fa-th fa-2x',
                      text:'widgets',
                    },
                  ],
                  iconeright:'fa-solid fa-chevron-left',
                } ,
        
                     { iconeleft :'nav-icon fas fa-chart-pie fa-2x ',
                      text:'charts',
                      newnam:'',
                      iconeright:'fa-solid fa-chevron-left',
                    },
            
                         { iconeleft :'nav-icon fas fa-tree fa-2x',
                          text:'UI Elements ',
                          newnam:'',
                          iconeright:'fa-solid fa-chevron-left',
                        },
                
                              {iconeleft :'nav-icon fas fa-edit fa-2x',
                              text:'Forms',
                              newnam:'',
                              iconeright:'fa-solid fa-chevron-left',
                            },
                    
                                 { iconeleft :'nav-icon fas fa-table fa-2x ',
                                  text:'tables',
                                  newnam:'',
                                  iconeright:'fa-solid fa-chevron-left',
                                },

]

menus.forEach(menu => {
 var iconeleft=menu['iconeleft']
 var text=menu['text']
  var newnam=menu['newnam']
  var smenu=menu['smenu']
  var iconeright=menu['iconeright']
  getMenu(iconeleft,text,newnam,iconeright)
  // smenu.forEach(smenus => {
  //   var iconeleft=smenus['iconeleft']
  //   var text=smenus['text']
  // })
});


function getMenu(iconeleft,text,newnam,iconeright){
  const right=document.createElement('div');
  const Dashboard=document.createElement('i');

  right.setAttribute('class' ,'right');
    // Dashboard.setAttribute('src', iconeleft);
    Dashboard.setAttribute('class', iconeleft);

    right.appendChild(Dashboard);

    const text1=document.createElement('p');
    text1.innerHTML=text;
    text1.setAttribute('class', 'text1');

    const text2=document.createElement('p');
    text2.innerHTML=newnam;
    text2.setAttribute('class', 'text2');

    const iconeleftt=document.createElement('i');
    // iconeleftt.setAttribute('src', iconeright);
    iconeleftt.setAttribute('class', iconeright);


    

    const toto=document.createElement('div');
    toto.setAttribute('class' ,'totale');
    toto.appendChild(text1);
    toto.appendChild(text2);
    toto.appendChild(iconeleftt);

    const contenair=document.createElement('div');
    contenair.setAttribute('class', 'nav-content');
       contenair.appendChild(toto) ;
       contenair.appendChild(right) ;

        navbar.appendChild(contenair);
}



burger.addEventListener('click', function(){
     navbar.classList.toggle( 'nav'); 

})
iconeleftt.addEventListener('click', function(){

})

