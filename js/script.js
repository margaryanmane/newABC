let funcPlusProg,
loading = document.querySelector('.loading'),
loadingProgress = document.querySelector('.loading .progress-bar');

const hideLoader = () => {
    clearInterval(funcPlusProg);
    progressLoad()
    setTimeout(function () {
        loading.children[2].classList.add('hideLoad');
        loading.children[3].classList.add('hideLoad');
    }, 1200);
    setTimeout(function () {
        loading.children[0].classList.add('hideLoad');
        loading.children[1].classList.add('hideLoad');
    }, 1800);
    setTimeout(function () {
        loading.parentNode.removeChild(loading);
        document.body.style.overflow = 'visible';
    }, 3300);
}

window.onload = () => {
    hideLoader();
};

function progressLoad() {
    let i = 0;
    if (i == 0) {
      i = 1;
      let width = 10;
      let progressTime = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(progressTime);
          i = 0;
          
        } else {
          width++;
          loadingProgress.style.width = width + '%';
          loadingProgress.innerHTML = width + '%';
        }
      }
    }
  }