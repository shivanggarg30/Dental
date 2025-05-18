// FAQ toggle
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', function () {
    const answer = this.parentElement.querySelector('.faq-a');
    const plus = this.querySelector('.faq-plus');
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plus.textContent = '+';
    } else {
      answer.style.display = 'block';
      plus.textContent = '–';
    }
  });
});

// Why Choose Clove Dental plus toggle (demo)
document.querySelectorAll('.why-list .plus').forEach(plus => {
  plus.addEventListener('click', function () {
    alert('More details coming soon!');
  });
});

// Consultation form submit
const form = document.querySelector('.consultation-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for booking a free consultation!');
    form.reset();
  });
}

