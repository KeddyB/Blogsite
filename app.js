//backend api request


let PROJECT_ID = "6kl7o5z0"
let DATASET_NAME = "production"

//for homepage
let homeQUERY = encodeURIComponent(`*[_type == "post" && categories[0]._ref == "e1e8887c-e07a-4b6c-948d-179777671e00"] | order(_createdAt desc)[0]{
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
  }
}`)
let homeURL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${homeQUERY}`

fetch(homeURL)
    .then((response) => response.json())
    .then(({ result }) => {
            let homeCont = document.querySelector(".leftNews")
            
                let imgUrl = `${result.mainImage.asset.url}`
                let a = document.createElement("a")
                let h3 = document.createElement("h3")
                let homeImg = document.createElement("img")
                let contain = document.createElement('div')
                
                homeImg.src = imgUrl
                homeImg.classList.add("image")
                h3.innerHTML = `${result.title}`
                contain.appendChild(h3)
                contain.classList.add("news-content")

                a.href = `/blog/index.html?slug=${result.slug.current}`

                a.appendChild(homeImg)
                a.appendChild(contain)

                homeCont.appendChild(a)
                console.log(result.mainImage.asset.url)
            
    })
    
let oth1QUERY = encodeURIComponent(`*[_type == "post" && categories[0]._ref == "e1e8887c-e07a-4b6c-948d-179777671e00"] | order(_createdAt desc)[1]{
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
  }
}`)
let oth1URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${oth1QUERY}`

fetch(oth1URL)
    .then((response) => response.json())
    .then(({ result }) => {
        let otherCont1 = document.querySelector(".otherNews")
                let imgUrl = `${result.mainImage.asset.url}`
                let a = document.createElement("a")
                let h3 = document.createElement("h3")
                let homeImg = document.createElement("img")
                let contain = document.createElement('div')
                let newsContainer = document.createElement('div')
                
                homeImg.src = imgUrl
                h3.innerHTML = `${result.title}`
                contain.appendChild(h3)
                contain.classList.add("news-content")
                newsContainer.classList.add("newsContainer")

                a.href = `/blog/index.html?slug=${result.slug.current}`

                newsContainer.appendChild(homeImg)
                newsContainer.appendChild(contain)

                a.appendChild(newsContainer)

                otherCont1.appendChild(a)
    })

let oth2QUERY = encodeURIComponent(`*[_type == "post" && categories[0]._ref == "e1e8887c-e07a-4b6c-948d-179777671e00"] | order(_createdAt desc)[2]{
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
  }
}`)
let oth2URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${oth2QUERY}`

fetch(oth2URL)
    .then((response) => response.json())
    .then(({ result }) => {
        let otherCont2 = document.querySelector(".otherNews")
                let imgUrl = `${result.mainImage.asset.url}`
                let a = document.createElement("a")
                let h3 = document.createElement("h3")
                let homeImg = document.createElement("img")
                let contain = document.createElement('div')
                let newsContainer = document.createElement('div')
                
                homeImg.src = imgUrl
                h3.innerHTML = `${result.title}`
                contain.appendChild(h3)
                contain.classList.add("news-content")
                newsContainer.classList.add("newsContainer")

                a.href = `/blog/index.html?slug=${result.slug.current}`

                newsContainer.appendChild(homeImg)
                newsContainer.appendChild(contain)

                a.appendChild(newsContainer)

                otherCont2.appendChild(a)
    })
//for the blog
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
    .then(({ result }) => {
        if (result.length > 0) {
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

//for the games
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
    .then(({ result }) => {
        if (result.length > 0) {
            let blogs = document.querySelector(".games")
            result.forEach(blog => {
                let imgUrl = `${blog.mainImage.asset.url}`
                let a = document.createElement("a")
                a.href = `/games/${blog.slug.current}`
                let h4 = document.createElement("h4")
                let img = document.createElement('img')
                let blogText = document.createElement("div")
                let blogContainer = document.createElement("div")
                let iDiv = document.createElement("div")
                iDiv.classList.add("idiv")
                img.src = imgUrl
                let i = document.createElement('i')
                i.classList.add('fa-solid')
                i.classList.add('fa-play')
                iDiv.appendChild(i)

                h4.innerHTML = `${blog.title}`
                blogText.appendChild(h4)
                blogText.classList.add("blog-text")
                blogContainer.appendChild(img)
                blogContainer.appendChild(blogText)
                blogContainer.classList.add("blog")
                blogContainer.appendChild(iDiv)
                a.appendChild(blogContainer)
                blogs.appendChild(a)

            })
        }
    })
//cookie    
const cookieBox = document.querySelector(".wrapper");
acceptBtn = cookieBox.querySelector('.buttons button')

acceptBtn.onclick = () => {
    document.cookie = "CookieBy=Keddy; max-age=" + 60 * 60 * 24 * 30
    if (document.cookie) {
        cookieBox.classList.add('hide')
    } else {
        alert("cookie cannot be set")
    }
}
let checkCookie = document.cookie.indexOf("CookieBy=Keddy");
checkCookie != -1 ? cookieBox.classList.add('hide') : cookieBox.classList.remove('hide')
//scrolling
const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransition() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentButton = document.querySelectorAll('.active-btn')
            currentButton[0].className = currentButton[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }
    //sections active class
    allSections.addEventListener('click', pageTransition)
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.control');

    // Function to handle smooth scrolling and active state
    function navigateToSection(target) {
        const id = target.dataset.id;
        if (id) {
            // Remove active class from all buttons
            sectBtns.forEach(btn => {
                btn.classList.remove('active-btn');
            });
            // Add active class to the clicked button
            target.classList.add('active-btn');

            // Remove active class from all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            // Add active class to the target section
            const element = document.getElementById(id);
            element.classList.add('active');

            // Scroll smoothly to the target section
            element.scrollIntoView({ behavior: 'smooth' });

            // Update the URL hash
            window.history.pushState(null, null, '#' + id);
        }
    }

    // Event listener for control buttons
    sectBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            navigateToSection(this);
        });
    });

    // Handle page load and hash change events
    function handleHashChange() {
        const hash = window.location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                // Add active class to the corresponding button
                sectBtns.forEach(btn => {
                    btn.classList.remove('active-btn');
                    if (btn.dataset.id === hash.substring(1)) {
                        btn.classList.add('active-btn');
                    }
                });

                // Add active class to the corresponding section
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === hash.substring(1)) {
                        section.classList.add('active');
                    }
                });

                // Scroll smoothly to the target section
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Handle initial page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
});


//toggle theme
document.addEventListener("DOMContentLoaded", function () {
    // Check if a theme preference is stored in localStorage
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

// Select the theme toggle button
const themeBtn = document.querySelector('.theme-btn');

// Function to apply the theme from local storage
function applyTheme() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light-mode") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
}

// Add an event listener to the theme button
themeBtn.addEventListener('click', () => {
    // Toggle the light-mode class on the body
    document.body.classList.toggle('light-mode');

    // Determine the current theme
    const currentTheme = document.body.classList.contains("light-mode") ? "light-mode" : "dark-mode";

    // Save the current theme to local storage
    localStorage.setItem("theme", currentTheme);
});

// Apply the theme from local storage when the page loads
applyTheme();

pageTransition()