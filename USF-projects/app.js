function setupRemoveButton(removeButton, removeIcon) {
    removeButton.setAttribute("class", "remove-button");
    removeIcon.setAttribute("class", "fas fa-trash-alt");
    removeButton.appendChild(removeIcon);
  }
  
  function setupDownloadButton(downloadLink, downloadIcon) {
    downloadLink.setAttribute("class", "download-link");
    downloadLink.setAttribute("download", "meme");
    downloadIcon.setAttribute("class", "fas fa-download");
    downloadLink.appendChild(downloadIcon);
  }
  
  function createMeme(memeImg, topCaption, bottomCaption, imgUrl) {
    topCaption.innerText = document.getElementById("top-text").value;
    topCaption.setAttribute("class", "top-caption");
    memeImg.setAttribute("src", imgUrl);
    bottomCaption.innerText = document.getElementById("bottom-text").value;
    bottomCaption.setAttribute("class", "bottom-caption");
  }
  
  function renderMeme(newMeme, memeImg, topCaption, bottomCaption) {
    newMeme.appendChild(topCaption);
    newMeme.appendChild(memeImg);
    newMeme.appendChild(bottomCaption);
    newMeme.setAttribute("class", "new-meme");
  }
  
  function submitForm(event, memeForm) {
    event.preventDefault();
  
    var memesSection = document.getElementById("memes-section");
  
    var memeBlock = document.createElement("div");
    var newMeme = document.createElement("figure");
    var removeIcon = document.createElement("i");
    var downloadIcon = document.createElement("i");
    var removeButton = document.createElement("a");
    var downloadLink = document.createElement("a");
    var topCaption = document.createElement("figcaption");
    var bottomCaption = document.createElement("figcaption");
    var memeImg = document.createElement("img");
    var imgUrl = document.getElementById("img-url").value;
  
    setupRemoveButton(removeButton, removeIcon);
    setupDownloadButton(downloadLink, downloadIcon);
    createMeme(memeImg, topCaption, bottomCaption, imgUrl);
    renderMeme(newMeme, memeImg, topCaption, bottomCaption);
    
    memeBlock.setAttribute("class", "meme-block");
    memeBlock.appendChild(removeButton);
    memeBlock.appendChild(downloadLink);
    memeBlock.appendChild(newMeme);
  
    memesSection.appendChild(memeBlock);
  
    memesSection.addEventListener("click", function(event) {
      if (event.path[2].className === "remove-button") {
        event.path[2].parentNode.remove();
      }
    });
  
    memeForm.reset();
  
    html2canvas(newMeme, {
      onrendered: function(canvas) {
        canvas.className = "html2canvas";
        var image = canvas.toDataURL("image/jpeg");
        downloadLink.href = image;
      },
      useCORS: true
    });
  }
  
  window.onload = function() {
    var memeForm = document.getElementById("meme-form");
  
    memeForm.addEventListener("submit", function(event) { 
      submitForm(event, memeForm); 
    });
  };
  