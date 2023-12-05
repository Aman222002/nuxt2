
<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <v-form ref="form" @submit.prevent="signInHandler">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <!-- <v-btn color="primary" type="submit"> Login </v-btn><br /><br /> -->
              <v-btn color="error" type="submit" @click="signIn('laravelPassport')"> Login </v-btn><br /><br />
              <!-- <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      OTP Verification
                    </v-card-title>
                    <v-card-text>
                      <v-otp-input v-model="otp" length="6"></v-otp-input>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="signInHandler">
                        Proceed
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div> -->
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from '../stores/auth';
import {useRouter} from 'vue-router';
const authStore = useAuthStore();
const router=useRouter();
const email = ref("");
const password = ref("");
const dialog = ref(false);
const otp = ref("");
const { signIn } = useAuth()
const otpFields = ref({});
const passRules = [(v: any) => !!v || "Password is required"];
const emailRules = [
  (v: any) => !!v || "E-mail is required",
  (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
];
const signInHandler = async () => {
  try{
     await signIn('laravelPassport')
  
  } catch(error){
    console.error("Login Failed",error)
  }
 }
// const signInHandler1 = async () => {
  
// const enteredEmail = email.value;
//   const enteredPassword = password.value;
//   let requestBody: any = null;
//   if(dialog.value){
//     requestBody = otpFields.value
//     requestBody.code = otp.value;
//   }else{
//   requestBody = {
//       email: enteredEmail,
//       password: enteredPassword
//     };
//   }
//   try {
//     const response: any = await fetch('laravelpassport', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(requestBody)
//     });
//     const responseData = await response.json();  
// if (response.ok) {
//   if (responseData.data && responseData.data.is_2FA_enabled === true && !responseData.data.id) {
//     dialog.value = true;
//     otpFields.value = {
//       base32: responseData.data.base32,
//       session_id: responseData.data.session_id
//     } 
//   }
//   console.log('Login successful', responseData.data );

//    router.push("/");
 
// } else {
//   console.log('Login failed');
// }
// } catch (error) {
// console.error('Error during login:', error);
// }
// }
</script>


