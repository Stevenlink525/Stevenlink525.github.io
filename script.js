
function showContent(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// 預設顯示第一個內容
document.addEventListener('DOMContentLoaded', () => {
  showContent('experience');
});
