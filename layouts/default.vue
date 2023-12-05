
<template>
  <v-app>
  <v-main>
    <div class="app-container">
      <HeaderComponent />
      <div class="main-content">
      
        <v-container>
        <Nuxt/>
      </v-container>
    </div>
     
      <div class="FooterComponent">
        <FooterComponent />
      </div>
    </div>
  </v-main>
</v-app>
</template>
  
  <script>
  
  export default {
    name: "App",
    components: {
    
    },
  };
  </script>
  
  <style scoped>
  .app-container {
    min-height: 100vh;
    
    flex-direction: column;
  }
  .main-content {
    
    margin-bottom: 80px;
    
  }
  
  
  .FooterComponent {
    margin-top: 50px;
  }
  </style>
  

