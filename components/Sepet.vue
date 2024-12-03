<template>
    <div class="cart">
      <!-- Product List -->
      <div class="products">
        <div
          class="product"
          v-for="(product, index) in products"
          :key="index"
        >
          <!-- Checkbox -->
          <input
            type="checkbox"
            v-model="product.selected"
            @change="updateTotal"
          />
          <img :src="product.image" alt="product" />
          <span>{{ product.name }}</span>
          <div class="quantity-controls">
            <button @click="decreaseQuantity(index)">-</button>
            <input
              type="number"
              :value="product.quantity"
              min="1"
              @input="updateQuantity($event, index)"
            />
            <button @click="increaseQuantity(index)">+</button>
          </div>
          <span>{{ product.price * product.quantity }}₺</span>
        </div>
      </div>
  
      <!-- Summary -->
      <div class="summary">
        <h3>Summary</h3>
        <div class="summary-item" v-for="(product, index) in selectedProducts" :key="index">
          <span>{{ product.name }}</span>
          <span>{{ product.price * product.quantity }}₺</span>
        </div>
        <p>Total: {{ total }}₺</p>
        <button @click="completePurchase" class="btn btn-danger" style="background-color: rgb(255, 96, 0);">Alışverişi Tamamla</button>
      </div>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

interface Product {
  name: string;
  price: number;
  quantity: number;
  image: string;
  selected: boolean;
}

export default defineComponent({
  name: "Cart",
  setup() {
    // Reactive product list
    const products = reactive<Product[]>([
      { name: "Ipad Air", price: 999, quantity: 1, image: "productImages/product1_1.png", selected: true },
      { name: "Ipad Pro", price: 30, quantity: 1, image: "productImages/product2_1.png", selected: true },
      { name: "Logitech Mx Keys", price: 16999, quantity: 1, image: "productImages/image.png", selected: true },
    ]);

    // Computed property for selected products
    const selectedProducts = computed(() =>
      products.filter((product) => product.selected)
    );

    // Computed property for total price
    const total = computed(() =>
      selectedProducts.value.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      )
    );

    // Functions to manage quantities
    const increaseQuantity = (index: number) => {
      products[index].quantity++;
    };

    const decreaseQuantity = (index: number) => {
      if (products[index].quantity > 1) {
        products[index].quantity--;
      }
    };

    const updateQuantity = (event: Event, index: number) => {
      const value = (event.target as HTMLInputElement).valueAsNumber;
      if (value > 0) {
        products[index].quantity = value;
      }
    };

    // Function for updating total when checkbox changes
    const updateTotal = () => {
      // Reactive computation will handle updates automatically
    };

    // Function for completing the purchase
    const completePurchase = () => {
      alert("Purchase completed! Total: " + total.value + "₺");
    };

    return {
      products,
      selectedProducts,
      total,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      updateTotal,
      completePurchase,
    };
  },
});
</script>
<style scoped>
.cart {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.products {
  flex: 2;
}

.product {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 5px;
}

input[type="number"] {
  width: 50px;
  text-align: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.summary {
  flex: 1;
  border: 1px solid #ddd;
  padding: 10px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

img {
  width: 100px;
  height: 100px;
}
</style>
