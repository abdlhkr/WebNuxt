import { defineNuxtPlugin } from '#app';
import { auth } from '../firebaseConfig'; // Firebase yapılandırmasını içe aktar

export default defineNuxtPlugin(nuxtApp => {
  // $auth'i global olarak tanımla
  nuxtApp.provide('auth', auth);
});
