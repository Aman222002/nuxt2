
<template>
  <v-main>
    <div class="app-container">
      <HeaderComponent />
      <div class="main-content">
       <NuxtPage />
      </div>
      <div class="Footer">
        <FooterComponent />
      </div>
    </div>
  </v-main>
</template>
    
    <script>
    import { defineComponent } from 'vue';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    
    export default defineComponent({
      name: 'App',
      components: {
        HeaderComponent,
        FooterComponent,
      },
    });
    </script>
    
    <style scoped>
  .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .main-content {
      margin-top: 20px; 
    }
    
    
    .Footer {
      margin-top: auto;
    }
    </style>
    
     