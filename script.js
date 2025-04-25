
function showContent(id) {
  const sections = document.querySelectorAll('.content-section');
  const viewer = document.querySelector('.mobile-viewer');
  const title = document.querySelector('.mobile-viewer h1');
  const contentContainer = document.querySelector('.viewer-content');

  sections.forEach(s => s.style.display = 'none');
  const selected = document.getElementById(id);
  contentContainer.innerHTML = selected.innerHTML;
  viewer.style.display = 'block';
  document.querySelector('.container').style.display = 'none';
}

function goBack() {
  document.querySelector('.mobile-viewer').style.display = 'none';
  document.querySelector('.container').style.display = 'flex';
}

function getTodayPassword() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return (dd + mm).split('').reverse().join('') + "L11";
}

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const correct = getTodayPassword();
  if (input === correct) {
    document.querySelector('.password-screen').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
  } else {
    document.getElementById('errorMsg').innerText = "密碼錯誤，請再試一次。";
  }
}

// 圖片放大
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('zoomable')) {
    const overlay = document.createElement('div');
    overlay.className = 'img-overlay';
    const img = document.createElement('img');
    img.src = e.target.src;
    overlay.appendChild(img);
    overlay.onclick = () => document.body.removeChild(overlay);
    document.body.appendChild(overlay);
  }
});
