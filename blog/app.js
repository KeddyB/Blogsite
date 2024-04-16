//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// sanity backend
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

let PROJECT_ID = "6kl7o5z0"
let DATASET_NAME = "production"
let QUERY = encodeURIComponent(`*[_type == "post" && slug.current =="${slug}"]
{
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
  body[0]{
    children[0]{
      text
    }
  }
}
`)
let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${QUERY}`

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Extract the blog post from the data
    const blogPost = data.result[0];
    // Populate the template with the fetched content
    const blogPostContent = document.querySelector('.mainBlog');
    blogPostContent.innerHTML = `
        <h1>${blogPost.title}</h1>
        <p class="author">Author: ${blogPost.author.name}</p>
        <p class="date">Last Updated: ${blogPost._updatedAt}</p>
        <img class="postImage" src="${blogPost.mainImage.asset.url}" alt="Main Image">
        <p class="postText">${blogPost.body.children.text}</p>
    `;
  })
  .catch(error => {
      console.error('Error fetching blog post:', error);
      // Optionally display an error message or handle the error in another way
  })

//current year on footer
// function getCurrentYear() {
//   return new Date().getFullYear();
// }

// document.querySelector(".year").innerHTML =`${getCurrentYear()}`
document.addEventListener("DOMContentLoaded", function() {
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