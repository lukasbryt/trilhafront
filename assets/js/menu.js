function toggleDisplay(elementId, displayStyle) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.display = displayStyle;
    }
}

function manage() {
    //Abre o menu Trilha Gestão em uma janela
    document.getElementById('manage').style.backgroundImage = 'url(./assets/img/p1.webp)';
    window.scrollTo(0, 0);
    toggleDisplay('header', 'none');
    toggleDisplay('mainNav', 'none');
    toggleDisplay('download', 'none');
    toggleDisplay('contact', 'none');
    toggleDisplay('about', 'none');
    toggleDisplay('footer', 'none');
    toggleDisplay('manage', 'block');
}

function frontOne() {
    //Abre o menu Trilha Gestão em uma janela
    document.getElementById('front').style.backgroundImage = 'url(./assets/img/p1.webp)';
    window.scrollTo(0, 0);
    toggleDisplay('header', 'none');
    toggleDisplay('manage', 'none');
    toggleDisplay('mainNav', 'none');
    toggleDisplay('download', 'none');
    toggleDisplay('contact', 'none');
    toggleDisplay('about', 'none');
    toggleDisplay('footer', 'none');
    toggleDisplay('front', 'block');
}

function backMng() {
    //Esconder
    toggleDisplay('videos', 'none');
    toggleDisplay('manage', 'none');
    toggleDisplay('front', 'none');
    toggleDisplay('header', 'table');
    toggleDisplay('mainNav', 'block');
    toggleDisplay('download', 'block');
    toggleDisplay('contact', 'block');
    toggleDisplay('about', 'block');
    toggleDisplay('footer', 'block');
    document.getElementById("about").scrollIntoView();
}

function videos() {
    toggleDisplay('videos', 'block');
    toggleDisplay('manage', 'none');
    toggleDisplay('front', 'none');
    toggleDisplay('header', 'none');
    toggleDisplay('mainNav', 'none');
    toggleDisplay('download', 'none');
    toggleDisplay('contact', 'none');
    toggleDisplay('about', 'none');
    toggleDisplay('footer', 'none');
    document.getElementById("about").scrollIntoView();
}

const meuLink = document.querySelector('#videos');
meuLink.addEventListener('click', function(event) {
  event.preventDefault();
  // seu código aqui
});
