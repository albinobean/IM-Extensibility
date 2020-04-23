function AddSecondLogo(logoUrl){
    var newImg = document.createElement('img');
    newImg.setAttribute('src', logoUrl);
    newImg.setAttribute("id", "headerLogoImage2");
    newImg.setAttribute('class','header-logo');
}