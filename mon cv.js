
  function transfertmode() {
    
    document.body.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if (document.body.classList.contains("dark-mode")) {
      button.innerText = "Mode clair";
    } else {
      button.innerText = "Mode sombre";
    }
  }

