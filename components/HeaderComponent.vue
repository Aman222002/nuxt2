
   <template>
    <nav class="nav">
      <div class="links">
        <NuxtLink
          to="/"
          class="nav-link"
        >Home</NuxtLink>
  
        <NuxtLink
          to="/about"
          class="nav-link"
        >About</NuxtLink>
  
        <NuxtLink
        v-if="! authStore.isAuthenticated"
          to="/login"
          class="nav-link"
        >Login</NuxtLink>
      </div>
  
      <v-btn class="logout-btn" @click="logout" v-if=" authStore.isAuthenticated">
        Logout
        
      </v-btn>
    </nav>
  </template>
  <script setup>
  import { useAuthStore } from '../stores/auth';
  import {useRouter} from 'vue-router';
  const router=useRouter();
  const authStore = useAuthStore();
   function logout(){
    try{
       authStore.logout();
       router.push("/login")
    }catch(err)
    {
      console.log(err)
    }
   }
    
  </script>
  <style>
  .nav {
    background-color: rgb(239, 247, 126);
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .links {
    display: flex;
  }
  
  .nav-link {
    text-decoration: none;
    padding: 8px 12px;
    margin-right: 10px;
    color: #333;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .logout-btn {
    background-color: rgb(227, 63, 63);
    color: white;
  }
  </style>
  