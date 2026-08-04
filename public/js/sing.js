const toggleBtn = document.getElementById('toggleEye');
const pwdField = document.getElementById('passwordField');

toggleBtn.addEventListener('click', () => {
    const isPassword = pwdField.type === 'password';
    pwdField.type = isPassword ? 'text' : 'password';

    toggleBtn.innerHTML = isPassword
        ? '<i class="fa-solid fa-eye"></i>'
        : '<i class="fa-solid fa-eye-slash"></i>';

    toggleBtn.setAttribute(
        'aria-label',
        isPassword ? 'Hide password' : 'Show password'
    );
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Hook up real authentication here
    alert('Login submitted (demo only).');
});