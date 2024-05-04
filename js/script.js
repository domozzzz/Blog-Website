//selection buttons by id
const expandGallery = document.querySelector("#galleryButton");
const scrollButton= document.getElementById("scrollButton");
const expandBlog = document.querySelector("#blogButton");
const search = document.getElementById("searchBar");

//when javascript loads, add javascript class that contains functional components
document.addEventListener("readystatechange", function(event) {
	if (event.target.readyState == "interactive") {
        document.querySelector("body").classList.add("js");
	}
});

//expand galleries when button clicked
expandBlog.addEventListener("click", function(event) {
    event.preventDefault();
    this.parentElement.parentElement.classList.add("expandedBlog");
});


//expand blogs when button clicked
expandGallery.addEventListener("click", function(event) {
    event.preventDefault();
    this.parentElement.parentElement.classList.add("expandedGallery");
});

//scroll to top of page
function scrollToTop() {
    document.body.scrollTop = 0;
  }

//check for scrolling
window.onscroll = function() {
    showScrollButton()
};

//show scrollbar when scrolled down 100 units
function showScrollButton() {
    if (document.body.scrollTop > 100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
}

// if the screen is < 600, toggle the search bar when s is pressed
function openSearch(event) {
    if (event.key == "s" && window.innerWidth < 600) { 

        if (search.style.display === "block") {
          search.style.display = "none";
          search.parentElement.parentElement.parentElement.style.height = "50px";
        } else {
          search.style.display = "block";
          search.parentElement.parentElement.parentElement.style.height = "90px";
        } 
    }
}