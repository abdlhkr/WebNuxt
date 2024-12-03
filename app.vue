<template>
  <div class="app">
    <!-- Yan Menü -->
    <div class="side-menu">
      <button
        v-for="(component, index) in components"
        :key="index"
        class="btn btn-primary mb-2 w-100 text-start"
        @click="showComponent(component.name)"
      >
        {{ component.label }}
      </button>
    </div>

    <!-- Ana İçerik -->
    <div class="main-content">
      <!-- Yalnızca bir bileşen seçildiğinde göster -->
      <component v-if="activeComponent" :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import navbar from './components/mavbar.vue';
import topMenu from './components/topMenu.vue';
import Reklam from './components/Reklam.vue';
import Card from './components/Card.vue';
import Slider from './components/Slider.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';
import Sepet from './components/Sepet.vue';
import Fltre from './components/Fltre.vue';
import ComparePlans from './components/ComparePlans.vue';
export default {
  name: 'App',
  components: {
    navbar,
    topMenu,
    Reklam,
    Card,
    Slider,
    Footer,
    Login,
    Sepet,
    Fltre,
    ComparePlans,
  },
  data() {
    return {
      components: [
        { name: 'navbar', label: 'Navbar' },
        { name: 'topMenu', label: 'Top Menu' },
        { name: 'Reklam', label: 'Reklam' },
        { name: 'Card', label: 'Card' },
        { name: 'Slider', label: 'Slider' },
        { name: 'Footer', label: 'Footer' },
        { name: 'Login', label: 'Login' },
        { name: 'Sepet', label: 'Sepet' },
        { name: 'Fltre', label: 'Fltre' },
        { name: 'ComparePlans', label: 'Compare Plans' },
      ],
      activeComponent: null, // Başlangıçta hiçbir bileşen seçili değil
    };
  },
  methods: {
    showComponent(componentName) {
      this.activeComponent = componentName; // Tıklanan bileşeni göster
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
}

.side-menu {
  width: 200px;
  background: #f5f5f5;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 1;
  padding: 16px;
}
</style>
