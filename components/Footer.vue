<template>
  <li></li>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"
  />
  <footer class="py-4 custom-color">
    <div class="container">
      <div class="row text-start">
        <!-- Kurumsal -->
        <div class="col-md-3 mb-3">
          <h5>Kurumsal</h5>
          <ul class="list-unstyled">
            <li><a href="#" target="_blank" class="text-dark">Hakkımızda</a></li>
            <li><a href="#" target="_blank" class="text-dark">İş Ortaklarımız</a></li>
            <li><a href="#" target="_blank" class="text-dark">Yatırımcı İlişkileri</a></li>
            <li><a href="#" target="_blank" class="text-dark">Müşteri Hizmetleri</a></li>
            <li><a href="#" target="_blank" class="text-dark">Kariyer</a></li>
            <li><a href="#" target="_blank" class="text-dark">Kişisel Verilerin Korunması</a></li>
            <li><a href="#" target="_blank" class="text-dark">Bilgi Güvenliği Politikası</a></li>
            <li><a href="#" target="_blank" class="text-dark">Güvenli Alışveriş Kılavuzu</a></li>
            <li><a href="#" target="_blank" class="text-dark">İş Sağlığı ve Güvenliği Çevre Politikamız</a></li>
            <li><a href="#" target="_blank" class="text-dark">İletişim</a></li>
          </ul>
        </div>

        <!-- Hepsiburada -->
        <div class="col-md-3 mb-3">
          <h5>Hepsiburada</h5>
          <ul class="list-unstyled">
            <li><a href="#" target="_blank" class="text-dark">Satıcı Olmak İstiyorum</a></li>
            <li><a href="#" target="_blank" class="text-dark">Hepsipay İş Yeri Olmak İstiyorum</a></li>
            <li><a href="#" target="_blank" class="text-dark">Tedarikçi Davranış Kuralları</a></li>
            <li><a href="#" target="_blank" class="text-dark">Girişimci Kadınlara Teknoloji Gücü</a></li>
            <li><a href="#" target="_blank" class="text-dark">Teslimat Noktası Olmak İstiyorum</a></li>
            <li><a href="#" target="_blank" class="text-dark">Ödeme Seçenekleri</a></li>
            <li><a href="#" target="_blank" class="text-dark">Banka Kampanyaları</a></li>
            <li><a href="#" target="_blank" class="text-dark">İşlem Rehberi</a></li>
          </ul>
        </div>

        <!-- Bizi Takip Edin -->
        <div class="col-md-3 mb-3">
          <h5>Bizi Takip Edin</h5>
          <ul class="list-unstyled d-flex gap-2 custom">
            <li><a href="#" target="_blank"><i class="bi bi-instagram"> Instagram</i></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-youtube">Youtube</i></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-facebook">Facebook</i></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-twitter">Twitter</i></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-linkedin">Lınkedin</i></a></li>
          </ul>
        </div>

        <!-- Mobil Uygulamalar -->
        <div class="col-md-3 mb-3">
          <h5>Mobil Uygulamalar</h5>
          <ul class="list-unstyled">
            <li><a href="#" target="_blank" class="text-dark"><img src="public/Logo/imageStore.png" alt=""></a></li>
            <li><a href="https://play.google.com/store" target="_blank" class="text-dark">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                style="height: 40px;">
            </a></li>
            <li><a href="#" target="_blank" class="text-dark"><img src="public/Logo/imageGalarry.png" alt=""></a></li>
          </ul>
          <div class="mt-4">
            <h6>Aklınıza takılan bir soru mu var?</h6>
            <p>
              <a href="#" target="_blank" class="btn btn-primary btn-sm">Çözüm Merkezine Bağlanın</a><br />
              veya<br />
              <strong>0850 252 40 00</strong><br />
              <a href="https://wa.me/1234567890" target="_blank" class="btn btn-success d-flex align-items-center gap-2">
                <i class="bi bi-whatsapp"></i> WhatsApp Destek
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
footer a {
  text-decoration: none;
  font-size: 12px;
}
footer a:hover {
  text-decoration: underline;
}
.custom {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.bi {
  font-size: 1rem;
  color: #000;
}
img {
  max-width: 100px;
  height: auto;
}
.custom-color {
  background-color: rgb(255, 242, 234);
}
</style>
