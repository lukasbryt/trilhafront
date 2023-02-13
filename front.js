function hideHome() {
    //esconde tela inicial
    window.scrollTo(0,0);
    document.getElementById('home').style.display = 'none';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'none';
    document.getElementById('bkimage').style.backgroundImage = 'url(img/p2.webp)';
}

function home() {
    window.scrollTo(0,0);
    document.getElementById('home').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('bkimage').style.backgroundImage = 'url(img/p1.webp)';
}

function pgthree() {
    window.scrollTo(0,0);
    document.getElementById('home').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'block';
    document.getElementById('bkimage').style.backgroundImage = 'url(img/p3.webp)';
}
