function hideHome() {
    //esconde tela inicial
    document.getElementById('home').style.display = 'none';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'none';
    document.getElementById('bkimage').style.backgroundImage = 'url(img/p2.webp)';
}

function home() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('bkimage').style.backgroundImage = 'url(img/p1.webp)';
}

function pgthree() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'block';
    document.getElementById('bkimage').style.backgroundImage = 'url(img/p3.webp)';
}