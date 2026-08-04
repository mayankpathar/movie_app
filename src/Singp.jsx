import React from 'react'

function Singp() {
    return (
        <div>
            <div class="login-card">

                <div class="logo-wrap">
                    <img src="images/movie logo.png" />
                </div>

                <div class="brand-name">PHOENIX ZONE</div>

                <h1 class="welcome">Welcome Back!</h1>
                <p class="subtitle">Login to continue watching</p>

                <form id="loginForm">
                    <div class="input-group-custom">
                        <i class="fa-regular fa-envelope"></i>
                        <input type="text" placeholder="Username / Email" required />
                    </div>

                    <div class="input-group-custom">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" id="passwordField" placeholder="Password" required />
                        <button type="button" class="toggle-eye" id="toggleEye" aria-label="Show password">
                            <i class="fa-solid fa-eye-slash"></i>
                        </button>
                    </div>

                    <div class="forgot-row">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" class="btn-login">Login</button>
                </form>

                <div class="divider">or login with</div>

                <div class="social-row">
                    <a href="#" class="social-btn" aria-label="Login with Google"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="social-btn" aria-label="Login with Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="social-btn" aria-label="Login with Apple"><i class="fa-brands fa-apple"></i></a>
                </div>

                <div class="signup-row">
                    Don't have an account? <a href="#">Sign Up</a>
                </div>

            </div>
        </div>
    )
}

export default Singp
