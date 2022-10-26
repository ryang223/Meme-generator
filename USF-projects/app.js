const setupRemoveButton = (removeButton, removeIcon) => {
    removeButton.setAttribute("class", "remove-button");
    removeIcon.setAttribute("class", "fas fa-trash-alt");
    removeButton.appendChild(removeIcon);
  }
  
  const setupDownloadButton = (downloadLink, downloadIcon) => {
    downloadLink.setAttribute("class", "download-link");
    downloadLink.setAttribute("download", "meme");
    downloadIcon.setAttribute("class", "fas fa-download");
    downloadLink.appendChild(downloadIcon);
  }
  
  const createMeme = (memeImg, topCaption, bottomCaption, imgUrl) => {
    topCaption.innerText = document.getElementById("top-text").value;
    topCaption.setAttribute("class", "top-caption");
    memeImg.setAttribute("src", imgUrl);
    bottomCaption.innerText = document.getElementById("bottom-text").value;
    bottomCaption.setAttribute("class", "bottom-caption");
  }
  
  const renderMeme = (newMeme, memeImg, topCaption, bottomCaption) => {
    newMeme.appendChild(topCaption);
    newMeme.appendChild(memeImg);
    newMeme.appendChild(bottomCaption);
    newMeme.setAttribute("class", "new-meme");
  }
  
  const submitForm = (event, memeForm) => {
    event.preventDefault();
  
    let memesSection = document.getElementById("memes-section");
  
    let memeBlock = document.createElement("div");
    let newMeme = document.createElement("figure");
    let removeIcon = document.createElement("i");
    let downloadIcon = document.createElement("i");
    let removeButton = document.createElement("a");
    let downloadLink = document.createElement("a");
    let topCaption = document.createElement("figcaption");
    let bottomCaption = document.createElement("figcaption");
    let memeImg = document.createElement("img");
    let imgUrl = document.getElementById("img-url").value;
  
    setupRemoveButton(removeButton, removeIcon);
    setupDownloadButton(downloadLink, downloadIcon);
    createMeme(memeImg, topCaption, bottomCaption, imgUrl);
    renderMeme(newMeme, memeImg, topCaption, bottomCaption);
    
    memeBlock.setAttribute("class", "meme-block");
    memeBlock.appendChild(removeButton);
    memeBlock.appendChild(downloadLink);
    memeBlock.appendChild(newMeme);
  
    memesSection.appendChild(memeBlock);
  
    memesSection.addEventListener("click", (e) => {
      if (e.path[2].className === "remove-button") {
        e.path[2].parentNode.remove();
      }
    });
  
    memeForm.reset();
  
    html2canvas(newMeme, {
      onrendered: (canvas) => {
        canvas.className = "html2canvas";
        var image = canvas.toDataURL("image/jpeg");
        downloadLink.href = image;
      },
      useCORS: true
    });
  }
  
  window.onload = () => {
    var memeForm = document.getElementById("meme-form");
  
    memeForm.addEventListener("submit", (event) => { 
      submitForm(event, memeForm); 
    });
  };
  