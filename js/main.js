let topHeadlinesUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=33cf80e0455c4520ba6e8261b9abadf2";

$.getJSON(topHeadlinesUrl, function(data){
    let articles = data.articles;
    topStories(articles);
})

// carousel slider script
$('.carousel.carousel-slider').carousel({fullWidth: true});

//get top 4 stories
function topStories(articles){
  //story count for html story id
  count = 0;
  //loops through the api and grabs the top 4 stories
  for(var i = 0; i < 4; i++){
    count++
      addTopHeadline("story" + count, "description" + count, articles[i].urlToImage, articles[i].title, articles[i].url, articles[i].description);
  }

  articles.forEach(function(article){
    addCard(article.urlToImage, article.url, article.title, article.description, article.source.name);
  })
}

//adds top headlines to the carousel
function addTopHeadline(idImage, idUrl, imageUrl, title, url, description) {
  let story = document.getElementById(idImage);
  story.style.background = "url('" + imageUrl + "')";
  story.style.backgroundSize = "cover";
  story.style.backgroundRepeat= "no-repeat";

  let storyTitle = document.getElementById(idUrl);
  storyTitle.innerHTML = "<a href='" + url + "'><h2>" + title + "</h2></a><p>" + description + "</p>";
}


function addCard(imgurl, url, title, description, publication){

  let shortDescription = description.replace(/^(.{150}).+/, '$1&hellip;');

  let card =  "<div class='col s12 m6 l4'><div class='card'><div class='card-image'><img src='"+ imgurl + "'><span class='card-title'>"+ title +"</span></div><div class='card-content'><p>"+ shortDescription +"</p><p id='publication'>"+ publication +"</p></div><div class='card-action'><a href='"+ url +"'>READ MORE</a></div></div></div>";

  $( ".content" ).append(card);
}
