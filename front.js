function hideHome() {
    //esconde tela inicial
    document.getElementById('start').style.display = 'none';
    document.getElementById('two').style.display = 'block';
    document.getElementById('three').style.display = 'none';
    document.getElementById('container').style.background = 'url(https://raw.githubusercontent.com/lukasbryt/trilhafront/main/img/p2.webp)';
}

function home() {
    document.getElementById('start').style.display = 'block';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('container').style.background = 'url(https://raw.githubusercontent.com/lukasbryt/trilhafront/main/img/p1.png)';
}

function pgthree() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'block';
    document.getElementById('container').style.background = 'url(https://raw.githubusercontent.com/lukasbryt/trilhafront/main/img/p3.webp)';
}
