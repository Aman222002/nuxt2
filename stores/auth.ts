// store/filters.ts

import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('auth',{
 
  state: () => ({
    isLoggedIN: false

  }),
  
  actions: {

   isLoggedIn(){
      this.isLoggedIN = true
   },
   isLoggedOut(){
     this.isLoggedIN=false
   }
  },
  getters: {
isLoggedin: state => state.isLoggedIN,
  },
  persist:true
})