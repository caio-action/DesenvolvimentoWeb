document.addEventListener('DOMContentLoaded', function () {
    const videoOverlay = document.getElementById('videoOverlay');
    const closeButton = document.getElementById('closeButton');
    const videoIframe = document.querySelector('.video-card iframe');
    let player;

    // Mostra o overlay quando a página é carregada
    videoOverlay.style.display = 'flex';

    // Fecha o overlay quando o botão de fechar é clicado
    closeButton.addEventListener('click', function () {
        videoOverlay.style.display = 'none';
    });
    videoOverlay.addEventListener('click', function () {
        if (!player) {
            player = new YT.Player(videoIframe, {
                events: {
                    'onReady': function (event) {
                        event.target.playVideo();
                    }
                }
            });
        }
    });
});
