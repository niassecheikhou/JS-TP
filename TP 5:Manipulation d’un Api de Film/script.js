const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
fetch(APIURL).then(response => {
    response.json().then(data=>{
        
        data.results.forEach(elements=>{
    
            var titlefilm=elements['original_title']
            var photofilm=elements['poster_path']
            var overviewfilm=elements['overview']
            var votefilm=elements['vote_average']
            
            console.log(photofilm);

            let title=document.createElement('p')
            title.setAttribute('class','movie-info' )

            let vote=document.createElement('p')
            vote.setAttribute('class','green' )
            
            let photo=document.createElement('img')
            photo.setAttribute('class','movie' )


            let views=document.createElement('h3')
            views.setAttribute('class','overvieww' )


            const divp = document.createElement('div')
            divp.setAttribute('class','titlet')
            divp.appendChild(title)
            divp.appendChild(vote)

            
            const container= document.createElement('div');
            container.setAttribute('id','container');
            const bloc=document.getElementById('bloc')
            container.appendChild(photo)
            container.appendChild(views)
            container.appendChild(divp)
    
            photo.src=IMGPATH+photofilm
            title.innerHTML=titlefilm
            views.innerHTML=overviewfilm
            vote.innerHTML=votefilm
            bloc.appendChild(container)
    })

    })
})
// .then(resp=>{
// resp.json().then(data=>{
//     data.results
//     data.results.forEach(element => {
//         console.log(element);
//         var titleFilm=element['original_title'];
//         var photoFilm=element['poster_path'];
//         const p=document.createElement('p');
//         const img=document.createElement('img');
//         const overview=document.querySelector('.overview')

//         overview.appendChild(p);
//         overview.appendChild(img);
//         img.src=IMGPATH+photoFilm
//     });

// })
// })