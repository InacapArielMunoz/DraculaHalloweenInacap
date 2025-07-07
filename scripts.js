document.querySelectorAll('.book-option').forEach(option => {
    option.addEventListener('touchstart', () => {
        option.style.transform = 'translateY(-3px) scale(1.01)';
        option.style.borderColor = '#ff4444';
    });
    
    option.addEventListener('touchend', () => {
        setTimeout(() => {
            option.style.transform = 'translateY(0) scale(1)';
            option.style.borderColor = '#444';
        }, 150);
    });
    
    option.addEventListener('mouseenter', () => {
        if (window.matchMedia('(hover: hover)').matches) {
            option.style.transform = 'translateY(-5px) scale(1.02)';
            option.style.borderColor = '#ff4444';
        }
    });
    
    option.addEventListener('mouseleave', () => {
        if (window.matchMedia('(hover: hover)').matches) {
            option.style.transform = 'translateY(0) scale(1)';
            option.style.borderColor = '#444';
        }
    });
});


function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function selectAudiobook() {
    showLoading();
    
    setTimeout(() => {
        window.open('https://libbyapp.com/search/bibliotecasinacap/search/query-Dracula/page-1/6201479', '_blank');
        hideLoading();
    }, 1500);
}

function selectEbook() {
    showLoading();
    
    setTimeout(() => {
        window.open('https://libbyapp.com/search/bibliotecasinacap/search/query-Dracula/page-1/5698418', '_blank');
        hideLoading();
    }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.title').addEventListener('click', () => {
        const title = document.querySelector('.title');
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = 'glow 2s ease-in-out infinite alternate';
        }, 100);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === '1') selectAudiobook();
        if (e.key === '2') selectEbook();
    });
});
