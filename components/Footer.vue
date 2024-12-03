<template>
    <hr>
    <v-footer padless>
      <v-container class="space">
        <v-row>
          <!-- Kategoriler -->
          <v-col cols="12" md="3">
            <h3>Kategoriler</h3>
            <v-list dense>
              <v-list-item v-for="category in categories" :key="category">
                <v-list-item-content>
                  <v-list-item-title>
                    <a href="#">{{ category }}</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
  
          <!-- Popüler Markalar -->
          <v-col cols="12" md="3">
            <h3>Popüler Markalar</h3>
            <v-list dense>
              <v-list-item v-for="brand in popularBrands" :key="brand">
                <v-list-item-content>
                  <v-list-item-title>
                    <a href="#">{{ brand }}</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
  
          <!-- Popüler Aramalar -->
          <v-col cols="12" md="3">
            <h3>Popüler Aramalar</h3>
            <v-list dense>
              <v-list-item v-for="search in popularSearches" :key="search">
                <v-list-item-content>
                  <v-list-item-title>
                    <a href="#">{{ search }}</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
  
          <!-- Özel Sayfalar -->
          <v-col cols="12" md="3">
            <h3>Özel Sayfalar</h3>
            <v-list dense>
              <v-list-item v-for="page in specialPages" :key="page">
                <v-list-item-content>
                  <v-list-item-title>
                    <a href="#">{{ page }}</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script setup>
  const categories = [
    "Bilgisayar", "Tablet", "Telefon", "Laptop",
    "Kombi", "Klimalar", "Çamaşır Makinesi", "Bulaşık Makinesi",
    "Gram Altın", "Reşat Altın", "Yarım Altın", "Ayçicek Yağları",
    "Süpürgeler", "Robot Süpürge", "Airsoft", "Fritozler",
    "Kitap", "Film"
  ];
  
  const popularBrands = [
    "Avon", "Samsung", "Adidas", "Nike", "Apple", "Vestel", 
    "Bosch", "New Balance", "Defacto", "Lacoste", "Asus", 
    "Lego", "Boyner", "Koton", "Fairy", "Mavi", "Under Armour", "Wasa"
  ];
  
  const popularSearches = [
    "Playstation 5", "Xbox Series X", "Xbox Series S", "Xbox One", 
    "Nintendo", "Mi Band 8", "Bluetooth Kulaklık"
  ];
  
  const specialPages = [
    "Hepsiburada Sözü", "Premium", "Okul Alışverişi", "Black Friday", 
    "Efsane Kasım", "Vergisiz Bilgisayar", "Vergisiz Telefon", 
    "Sevgililer Günü", "Anneler Günü", "Yılbaşı Hediyeleri", "Babalar Günü",
    "Kazandıran Çekiliş"
  ];
  </script>
  
  <style scoped>
  .v-footer {
    padding-top: 20px;
    font-size: 12px; /* Tüm footer metinleri için font boyutunu 12px yapıyoruz */
    height: 600px;
    width: 100%;
  }
  .v-footer .v-list-item-title a {
  font-size: 12px; /* Kategori ve marka isimlerinin font boyutunu 12px yapıyoruz */
}
  .v-footer a {
    color: #333;
    text-decoration: none;
  }
  
  .v-footer a:hover {
    text-decoration: underline;
  }
  
  .v-footer h3 {
    font-size: 12px; /* Başlıkların font boyutunu biraz daha büyük tutabiliriz */
    margin-bottom: 8px;
  }
  .space {
    height: 1920px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  </style>
  