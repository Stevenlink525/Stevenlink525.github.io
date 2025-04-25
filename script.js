function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const correct = "5240L11"; // 固定密碼
  if (input === correct) {
    document.querySelector('.password-screen').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
  } else {
    document.getElementById('errorMsg').innerText = "密碼錯誤，請再試一次。";
  }
}

// 圖片放大功能
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

