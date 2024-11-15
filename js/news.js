document.addEventListener("DOMContentLoaded", function () {
    fetch("./components/nav.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("nav-components").innerHTML = data;
  
        const navScript = document.createElement("script");
        navScript.src = "./js/nav.js";
        navScript.onload = function () {
          console.log("nav.js");
          if (typeof initNav === "function") {
            initNav();
          }
        };
        document.body.appendChild(navScript);
        console.log("nav.html");
      });
  
  
      fetch('./components/footer.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('footer').innerHTML = data;
              console.log('footer');
          })
          .catch(error => {
              console.error('Error loading video component:', error);
          });
  });
  