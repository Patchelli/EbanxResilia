document.querySelector('#submit').addEventListener('click', () => {ApiCosmos()})

function ApiCosmos() {
  const data = $('#data').val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=b2e4yQbTO2NueoODTlnAaA3tb7mui6cQpTpSLI6I&date=${data}`,
    success: function(data){
      Api(data);
    }
  })
}

function Api(cosmos){
  const img = $(".img");
  const title = $(".title");
  const description = $(".description");
  const author = $(".author")

  cosmos.title != undefined? title.html(`${cosmos.title}`):"Uma galaxia ai"
  cosmos.explanation != undefined?description.html(`${cosmos.explanation}`):"Sem texto"
  cosmos.copyright != undefined ? author.html(`${cosmos.copyright}`) : "Patrick Patchelli"
  
  if(cosmos.media_type == 'image') {
    img.html(`<img class='img' align="left" src="${cosmos.url}"/>`)
  } else {
    img.html(`<iframe class="img" align="left" src="${cosmos.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
  










