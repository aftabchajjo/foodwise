const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const message = document.getElementById('message');

// Toggle password visibility.
togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePassword.querySelector('span').textContent = isHidden ? 'Hide' : 'Show';
  togglePassword.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
});

// Front-end validation only. Real authentication will be connected later.
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '';

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    message.textContent = 'Please enter your email address and password.';
    message.style.color = '#b42318';
    return;
  }

  if (!emailInput.checkValidity()) {
    message.textContent = 'Please enter a valid email address.';
    message.style.color = '#b42318';
    emailInput.focus();
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Password must contain at least 6 characters.';
    message.style.color = '#b42318';
    passwordInput.focus();
    return;
  }

  message.textContent = 'Form looks good. Real account sign-in will be connected with Supabase next.';
  message.style.color = '#126239';
});
