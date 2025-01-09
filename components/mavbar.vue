<template>
    <v-app>
      <v-app-bar app class="custom">
        <!-- prime üyelik al sayfasına yönlendirecek-->
      
        <v-img
          src="public/Logo/image copy.png"
          alt="Logo"
          
          class="mr-4"
          max-width="400"
        />
     
        <!-- Arama Kısmı -->
        <v-text-field
          v-model="searchQuery"
          label="Ürün, Kategori veya Marka Ara"
          prepend-inner-icon="mdi-magnify"
          class="mx-auto"
          solo
          hide-details
          clearable
          dense
          style="max-width: 600px;"
          rounded
        />
  
        <!-- Konum ve Konum Yazısı Butonu -->
        <div class="buttons">
          <a href="#"><img src="public/parts/konum.png" alt=""></a>
  
          <!-- Profil İkonu ve Giriş Yap Butonu -->
        
          <!-- Giriş Butonu giriş sayfasına yönlendirecek-->
           <a href="#"> <img src="public/parts/giris.png" alt=""></a>
   
          <!-- Sepet Butonu -->
            <a href="#"><img src="public/parts/sepetim.png" alt=""></a>
        </div>
      </v-app-bar>
    </v-app>
    <!-- Alt Çizgi -->
    <div class="bottom-line">
      <img src="public/parts/line.png" alt="">
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  const location = ref('Konum Seç');
  
  const handleLocationClick = () => {
    location.value = 'Yeni Konum Seçildi'; // Konumu güncelle
  };
  
  const handleLoginClick = () => {
    alert('Giriş yapılıyor');
  };
  
  const handleCartClick = () => {
    alert('Sepet açılıyor');
  };
  </script>
  
  <style scoped>
  .v-app-bar {
    background-color: #ffffff;
    box-shadow: none;
    padding-top: 15px;
    padding-bottom: 15px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
  }
  
  .v-btn {
    color: #333;
  }
  
  .v-text-field {
    max-width: 400px;
    border-bottom: none !important;
  }
  
  .v-icon {
    font-size: 24px;
  }
  
  .v-btn.ml-4 {
    margin-left: 16px;
  }
  
  /* Arama kutusunun köşelerine yuvarlatılmış görünüm */
  .v-text-field .v-input__control {
    border-radius: 25px;
  }
  
  .buttons {
    display: flex;
    align-items: center;
    padding-right: 3%;
  }
  
  /* Butonların arka plan rengini açık gri yapmak */
  .button-bg {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 10px 15px;
  }
  
  /* Konum butonunun ve konum yazısının bir arada hizalanması */
  .bottom-line {
  height: 10px;
  background: linear-gradient(to right, orange, blue, purple, green, purple);
  width: 100%;
  position: relative;
  top: 90px; /* Navbar yüksekliği kadar yukarı taşır */
  z-index: 1; /* Navbar ile karışmaması için */
}


  
  .location-text {
    font-size: 16px;
    color: #333;
    margin-left: 8px;
  }
  
  .v-btn {
    margin-right: 10px;
  }
  
  /* Alt çizgi için stil */
  .bottom-line {
    height: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
  .custom{
    background-color: #ffffff;
    display: block;


  }
  </style>
  