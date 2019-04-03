function myFunction() {

    var fab =document.getElementById('fab');
    fab.innerHTML = "email copied";
    fab.style.backgroundColor= '#4D4D4D'

    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = "Abderezak.kafi@gmail.com";                               // Set its value to the string that you want copied
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    setTimeout(rename,400);
  }
  function rename() {

    var fab =document.getElementById('fab');
    fab.innerHTML = "Email me";
    fab.style.backgroundColor= '#166EF8'
  }


  window.onload = function() {
    scrollToTopButton = document.getElementById("scrollToTopButton");
    };

    window.onscroll = controlScrollToTopButton;

    function controlScrollToTopButton() {
    var windowInnerHeight = 2 * window.innerHeight;

    if (
        document.scrollingElement.scrollTop > windowInnerHeight && screen.width>1080
    ) {
        scrollToTopButton.classList.add("show");
        
    } else {
        scrollToTopButton.classList.remove("show");
    }
    }