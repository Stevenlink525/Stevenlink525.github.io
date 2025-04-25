
function getTodayPassword() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0'); // 確保月份兩位數
  const dd = String(now.getDate()).padStart(2, '0'); // 確保日期兩位數
  return (dd + mm).split('').reverse().join('') + "L11"; // 倒排並加上L11
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
