// auth.ts
import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user:null,
  }),
  actions: {
    async login() {
      this.isAuthenticated = true;
      return true;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
  persist:true,
});


