console.log("project")



let newsCard = document.getElementById("newsCard")
const xhr = new XMLHttpRequest();

let source = 'bbc-news'
let apiKey = '79aec7457d47448baaa8639ff3646bb6'
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=5e5adf9bd49cbe071c662a1835117cc0`, true)
xhr.onload = function () {
  if (this.status == 200) {

    let json = JSON.parse(this.responseText)
    //console.log(json)
    let articles = json['articles']
    // console.log(articles)
    let newsHTML = ""
    articles.forEach(function (element, index) {

      let newz = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"  aria-expanded="true" aria-controls="colla${index}"  style="background:black;" >
              <b>🎗Breaking News:  </b>
                <a href=${element["url"]} target="_blank" style= "text-decoration:none; color:white; background:black"> ${element["title"]}</a>
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"   data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${element["content"]}
              </div>
            </div>
            </div>`
      newsHTML += newz;
    });


    newsCard.innerHTML = newsHTML
    console.log(newsCard)
  }
  else {
    console.log("Some error occured")
  }
}


// Since the api is not accepting the respinse so we created a text file to complete the project
xhr.send()

