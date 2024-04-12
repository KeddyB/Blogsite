const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransition(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active-btn')
            currentButton[0].className = currentButton[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }
    //sections active class
    allSections.addEventListener('click', pageT)
}
function pageT(e){
     const id = e.target.dataset.id;
     if(id){
        sectBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active');
    }
}
//toggle theme
document.addEventListener("DOMContentLoaded", function() {
    // Check if a theme preference is stored in localStorage
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', ()=>{
    let element = document.body
    element.classList.toggle('light-mode')

    var currentTheme = body.classList.contains("light-mode") ? "light-mode" : ":root";
    localStorage.setItem("theme", currentTheme);
})
pageTransition()

const cookieBox = document.querySelector(".wrapper");
acceptBtn = cookieBox.querySelector('.buttons button')

acceptBtn.onclick = ()=>{
    document.cookie = "CookieBy=Keddy; max-age="+60*60*24*30
    if(document.cookie){
        cookieBox.classList.add('hide')
    }else{
        alert("cookie cannot be set")
    }
}
let checkCookie = document.cookie.indexOf("CookieBy=Keddy");
checkCookie!=-1?cookieBox.classList.add('hide'): cookieBox.classList.remove('hide')

//backend api request
let PROJECT_ID = "6kl7o5z0"
let DATASET_NAME = "production"
let QUERY = encodeURIComponent(`*[_type == "post" && categories[0]._ref == "e1e8887c-e07a-4b6c-948d-179777671e00"] | order(_createdAt desc){
  title,
  author->{
    name
  },
  _updatedAt,
  mainImage{
    asset->{
      url
    }
  },
  slug{
    current
  }, text
}`)
let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${QUERY}`

fetch(URL)
    .then((response) => response.json())
    .then(({result}) => {
        if(result.length > 0){
            let blogs = document.querySelector(".blogs")
            result.forEach(blog => {
                let imgUrl = `${blog.mainImage.asset.url}`
                let a = document.createElement("a")
                a.href = `/blog/index.html?slug=${blog.slug.current}`
                let h4 = document.createElement("h4") 
                let img = document.createElement('img')
                let blogText = document.createElement("div")
                let blogContainer = document.createElement("div")
                img.src = imgUrl
                h4.innerHTML = `${blog.title}`
                blogText.appendChild(h4)
                blogText.classList.add("blog-text")
                blogContainer.appendChild(img)
                blogContainer.appendChild(blogText)
                blogContainer.classList.add("blog")
                a.appendChild(blogContainer)
                blogs.appendChild(a)

            })
        }
    })

let gameQUERY = encodeURIComponent(`*[_type == "post" && categories[0]._ref == "79aaa963-fe61-4d42-935a-ebecafb4a46c"] | order(_createdAt desc){
  title,
  author->{
    name
  },
  _updatedAt,
  mainImage{
    asset->{
      url
    }
  },
  slug{
    current
  }, text
}`)
let gameURL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${gameQUERY}`

fetch(gameURL)
    .then((response) => response.json())
    .then(({result}) => {
        if(result.length > 0){
            let blogs = document.querySelector(".games")
            result.forEach(blog => {
                let imgUrl = `${blog.mainImage.asset.url}`
                let a = document.createElement("a")
                a.href = `/blog/${blog.slug.current}`
                let h4 = document.createElement("h4") 
                let img = document.createElement('img')
                let blogText = document.createElement("div")
                let blogContainer = document.createElement("div")
                img.src = imgUrl
                h4.innerHTML = `${blog.title}`
                blogText.appendChild(h4)
                blogText.classList.add("blog-text")
                blogContainer.appendChild(img)
                blogContainer.appendChild(blogText)
                blogContainer.classList.add("blog")
                a.appendChild(blogContainer)
                blogs.appendChild(a)

            })
        }
    })