<template>
  <div class="login-container">
    <div class="login-form">
      <h1 class="logo">hepsiburada</h1>
      <div class="tab">
        <span>Giriş yap</span>
        <span>Üye ol</span>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="input-field">
          <input v-model="email" type="email" id="email" placeholder="E-posta adresi" required />
        </div>
        <div class="input-field">
          <input v-model="password" type="password" id="password" placeholder="Şifre" required />
        </div>
        <div class="forgot-password">
          <a href="#">Şifremi unuttum</a>
        </div>
        <button class="submit-btn" type="submit">Giriş yap</button>
      </form>
      <div class="phone-login">
        <a href="#"><p>Telefon numarası ile giriş yap</p></a>
      </div>
      <div class="social-login">
        <a href="#"><p>Sosyal hesabın ile giriş yap</p></a>
        <div class="social-btns">
          <!-- Apple Butonu -->
          <button class="social-btn apple" @click="handleSocialLogin('apple')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23 28">
              <path d="M19.041 14.876c.04 4.237 3.717 5.647 3.758 5.665-.031.1-.588 2.01-1.938 3.982-1.167 1.706-2.378 3.405-4.286 3.44-1.875.035-2.478-1.111-4.621-1.111-2.143 0-2.813 1.076-4.588 1.146-1.841.07-3.244-1.844-4.42-3.544C.54 20.978-1.296 14.631 1.17 10.347c1.226-2.128 3.416-3.475 5.794-3.51 1.808-.034 3.515 1.217 4.62 1.217 1.106 0 3.18-1.505 5.36-1.284.914.038 3.476.37 5.122 2.778-.133.082-3.058 1.785-3.026 5.328M15.517 4.47c.978-1.184 1.636-2.832 1.457-4.471-1.41.057-3.114.94-4.125 2.122-.906 1.048-1.7 2.724-1.485 4.331 1.57.122 3.176-.798 4.153-1.982"></path>
            </svg>
          </button>

          <!-- Google Butonu -->
          <button class="social-btn google" @click="handleSocialLogin('google')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25">
              <g fill="none">
                <path fill="#4285F4" d="M23.989 12.511c0-1.006-.082-1.74-.259-2.502H12.24v4.542h6.744c-.136 1.129-.87 2.828-2.502 3.97l-.023.153 3.633 2.814.252.026c2.312-2.136 3.645-5.277 3.645-9.003"></path>
                <path fill="#34A853" d="M12.24 24.478c3.304 0 6.078-1.088 8.104-2.964l-3.862-2.992c-1.034.72-2.42 1.224-4.243 1.224-3.236 0-5.983-2.135-6.963-5.086l-.143.012-3.778 2.924-.05.137c2.013 3.998 6.147 6.745 10.934 6.745"></path>
                <path fill="#FBBC05" d="M5.276 14.66c-.258-.762-.408-1.578-.408-2.42 0-.844.15-1.66.395-2.422l-.007-.162-3.825-2.97-.126.059C.476 8.405 0 10.267 0 12.239s.476 3.835 1.305 5.494l3.971-3.073"></path>
                <path fill="#EB4335" d="M12.24 4.732c2.297 0 3.847.993 4.731 1.823l3.455-3.373C18.304 1.21 15.544 0 12.239 0 7.452 0 3.32 2.747 1.305 6.745l3.958 3.073c.993-2.95 3.74-5.086 6.976-5.086"></path>
              </g>
            </svg>
          </button>

          <!-- Facebook Butonu -->
          <button class="social-btn facebook" @click="handleSocialLogin('facebook')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="facebookCircle_svg__facebookCircle_svg__prefix__FacebookCircle" x1="50%" x2="50%" y1="99.999%" y2="0%">
                  <stop offset="0%" stop-color="#1569CB"></stop>
                  <stop offset="100%" stop-color="#29AEF3"></stop>
                </linearGradient>
              </defs>
              <g fill="none">
                <path fill="url(#facebookCircle_svg__facebookCircle_svg__prefix__FacebookCircle)" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.855v-8.386H7.079V12h3.046V9.357c0-3.007 1.791-4.67 4.533-4.67 1.313 0 2.687.234 2.687.234v2.954H15.83c-1.491 0-1.956.925-1.956 1.873V12h3.328l-.532 3.47h-2.796v8.385C19.613 22.955 24 17.989 24 12"></path>
                <path fill="#FFF" d="M17.203 12h-3.328V9.748c0-.949.465-1.873 1.956-1.873h1.514V4.921s-1.374-.234-2.687-.234c-2.742 0-4.533 1.662-4.533 4.67V12H7.079v3.47h3.046v8.385c.61.096 1.238.145 1.875.145s1.264-.05 1.875-.145v-8.386h2.796L17.203 12z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
      console.log('Email:', email.value);
      console.log('Password:', password.value);
      // Burada form gönderim mantığı ekleyebilirsiniz
    };

    const handleSocialLogin = (platform: string) => {
      console.log(`Login with ${platform}`);
      // Sosyal medya ile giriş işlemleri burada yapılabilir
    };

    return {
      email,
      password,
      handleSubmit,
      handleSocialLogin,
    };
  },
};
</script>

 <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    width: 100%;
  }
  
  .login-form {
    background: white;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    align-items: center;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ff6f00;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .tab {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .tab span {
    font-size: 1rem;
    color: #333;
    cursor: pointer;
  }
  
  .input-field {
    margin-bottom: 1.5rem;
    width: 100%;
    text-align: left;
  }
  
  .input-field input {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.5rem;
    border-radius: 10px;
    border: 1px solid #ddd;
  }
  
  .forgot-password {
    text-align: left;
    margin-top: 1rem;
  }
  
  .forgot-password a {
    color: #ff6f00;
    font-size: 0.9rem;
  }
  
  .submit-btn {
    width: 100%;
    padding: 0.9rem;
    background-color: #ff6f00;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #ff8c33;
  }
  
  .phone-login {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: #555;
  }
  
  .social-login {
    margin-top: 2rem;
    text-align: center;
  }
  
  .social-login p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .social-btns {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .social-btn {
    width: 70px;
    height: 70px;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .social-btn:hover {
    background-color: #c0b1b1;
  }
  
  .social-btn img {
    width: 80%;
    height: 80%;
  }
  
  .social-btn.apple {
    color: white;
  }
  
  .social-btn.google {
    color: white;
  }
  
  .social-btn.facebook {
    color: white;
  }
  a{
    color: black;
    text-decoration: none;
  }
  </style>