import {Contact} from './contactModule.js';
let moviesData = [];
let searchWord = document.getElementById("searchWord");
let search = document.getElementById("search");
let movieData; 
let contactName = document.getElementById("name");
let alertName = document.getElementById("alertName");
let contactPhone = document.getElementById("phone");
let alertPhone = document.getElementById("alertPhone");
let contactPassword = document.getElementById("password");
let alertPassword = document.getElementById("alertPassword");
let contactEmail = document.getElementById("email");
let alertEmail = document.getElementById("alertEmail");
let contactAge = document.getElementById("age");
let alertAge = document.getElementById("alertAge");
let contactRepassword = document.getElementById("rePassword");
let alertRepassword = document.getElementById("alertRepassword");
let btn = document.getElementById("btn-submit");
let contact = document.getElementById("contact");
let openIcon = document.querySelector(".open");
let closeIcon = document.querySelector(".close");
let item = $(".left ul li");
let links = $(".left ul li .nav-item");
let socialMedia = document.querySelector(".left .social-media");

async function getMoives(value) {
  let movieResponse = await fetch(`https://api.themoviedb.org/3/${value}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1kMVnKAw26ALMVWb7fFZ5FTnvTsdyNOktC9d55wjR3-AongQ47_NMhLkQ`);
  movieResponse = await movieResponse.json();
  moviesData = await movieResponse.results;
  movieData = value;
  displayMovies();
}

getMoives("movie/now_playing");
function displayMovies() {
  let movies = "";
  for (var i = 0; i < moviesData.length; i++) {
    movies += `<div class="col-md-6 col-lg-4 my-3">
        <div class="movie-item text-center position-relative">
            <img src="https://image.tmdb.org/t/p/w500/${moviesData[i].poster_path}" class="w-100" alt="${moviesData[i].title}" srcset="">
            <div class="overlay position-absolute">
                <div>
                    <h2 class="movieTitle">${moviesData[i].title}</h2>
                    <p class="movie-desc">${moviesData[i].overview}</p>
                    <div class="rate mb-3">
                        <span>
                            rate : <span class="rate-number">${moviesData[i].vote_average}</span>
                        </span>
                    </div>
                    <span class="date">${moviesData[i].release_date}</span>
                </div>
            </div>
        </div>
    </div>`;
  }
  document.getElementById("movieRow").innerHTML = movies;
}

$(".barsIcon").click(function () {
  if ($(".left").css("width") == "0px") {
    $(".left").animate({ width: "80%" }, 1000 ,function(){
        socialMedia.classList.remove("d-none");
    });
    $(item).animate({ opacity: "1", paddingTop: "25px" }, 1000)
    openIcon.classList.add("d-none");
    closeIcon.classList.remove("d-none");
  } 
  else {
    $(item).animate({ opacity: "0", paddingTop: "500px" }, 900)
    $(".left").animate({ width: "0%" }, 900);
    openIcon.classList.remove("d-none");
    closeIcon.classList.add("d-none");
    socialMedia.classList.add("d-none")
  }
});

search.oninput = function(){
  searchByTitle(this.value);
}

function searchByTitle(value){
  let moviesSearch = ``;
  for(var i = 0; i < moviesData.length; i++){
    if(moviesData[i].title.toLowerCase().includes(value.toLowerCase().trim())){
      moviesSearch += `<div class="col-md-6 col-lg-4 my-3">
        <div class="movie-item text-center position-relative">
            <img src="https://image.tmdb.org/t/p/w500/${moviesData[i].poster_path}" class="w-100" alt="${moviesData[i].title}" srcset="">
            <div class="overlay position-absolute">
                <div>
                    <h2 class="movieTitle">${moviesData[i].title}</h2>
                    <p class="movie-desc">${moviesData[i].overview}</p>
                    <div class="rate mb-3">
                        <span>
                            rate : <span class="rate-number">${moviesData[i].vote_average}</span>
                        </span>
                    </div>
                    <span class="date">${moviesData[i].release_date}</span>
                </div>
            </div>
        </div>
    </div>`;
    }
  }
  document.getElementById("movieRow").innerHTML = moviesSearch;
}

$(links).click(function(){
  let currentLink = $(this).data("value");
  getMoives(currentLink);
})

searchWord.oninput = function(){
  searchByWord(this.value);
}

function searchByWord(value){
  if(value == ""){
    document.getElementById("movieRow").innerHTML = getMoives(movieData);
  }
  else{
    let moviesSearch = ``;
    for(var i = 0; i < moviesData.length; i++){
      if(moviesData[i].title.toLowerCase() == value.toLowerCase().trim()){
        moviesSearch += `<div class="col-md-6 col-lg-4 my-3">
          <div class="movie-item text-center position-relative">
              <img src="https://image.tmdb.org/t/p/w500/${moviesData[i].poster_path}" class="w-100" alt="${moviesData[i].title}" srcset="">
              <div class="overlay position-absolute">
                  <div>
                      <h2 class="movieTitle">${moviesData[i].title}</h2>
                      <p class="movie-desc">${moviesData[i].overview}</p>
                      <div class="rate mb-3">
                          <span>
                              rate : <span class="rate-number">${moviesData[i].vote_average}</span>
                          </span>
                      </div>
                      <span class="date">${moviesData[i].release_date}</span>
                  </div>
              </div>
          </div>
      </div>`;
      }
    }
    document.getElementById("movieRow").innerHTML = moviesSearch;
  }
}
new Contact(contactName,contactEmail,contactPhone , contactPassword , contactRepassword , contactAge , alertName , alertAge, alertEmail , alertPhone , btn , contact , alertPassword , alertRepassword); 
$(".contact").click(function(){
  let contactLink = $("#contact");
  $("body").animate({scrollTop:$(contactLink).offset().top},1000)
})