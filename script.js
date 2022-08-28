
var inputShow = document.getElementById("input");
var btn = document.getElementById("submit");
var container = document.getElementById("container");
var detailArea = document.getElementById("detailArea");
var input2 = document.querySelector(".input2")
// var clickbtn = document.getElementById("detail");

btn.addEventListener("click", function (name) {
    container.innerHTML = "";

    fetch(`https://api.tvmaze.com/search/shows?q=${inputShow.value}`)

        .then(result => result.json())
        .then(shows => {

            for (let i = 0; i < shows.length; i++) {

                let showArea = shows[i]["show"];


                console.log(showArea);

                let result = `<div id="tvshows">
                    
                    <h1 class="title"><span>Show Name :- </span>${showArea.name} </h1>
                    <img src="${(showArea.image).medium}">
                    <p><span> premiered :-</span> ${(showArea.schedule).time}  ${(showArea.schedule).days} </p>
                    <p><span> Language :-</span> ${(showArea.language)}</p>
                    <a id="detail" href="detail.html" >Click me </a>

                    </div>`

                    

                    let dd=document.getElementById("tvshows")
                    let dt=document.getElementById("detail")
                    console.log(dt);
                   

                container.innerHTML += result;
                detailArea.innerHTML += result;

            }
            


        })
    // .catch(err=>alert("not found"))


})


