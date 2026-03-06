const checks = document.querySelectorAll('.step-check');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');

function updateProgress() {
  const total = checks.length;
  const completed = [...checks].filter((item) => item.checked).length;
  const percent = total === 0 ? 0 : (completed / total) * 100;

  progressText.textContent = `${completed}/${total} pasos completados`;
  progressFill.style.width = `${percent}%`;
}

checks.forEach((check) => {
  check.addEventListener('change', updateProgress);
});

updateProgress();
