
<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4">
            <pre>{{ status }}</pre>
            <v-form ref="form" @submit.prevent="customlogin">
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
              <v-btn color="primary" type="submit"> Login </v-btn><br /><br />

              <div class="text-center">
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
                      <v-btn color="primary" @click="verifyotp()">
                        Proceed
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { useFiltersStore } from "../stores/auth";
import { ref } from "vue";
import { definePageMeta, useAuth } from "#imports";
import { useRouter } from "vue-router";

definePageMeta({ auth: false });
const router = useRouter();
const isLoggedIn = useFiltersStore();
const { signIn, status } = useAuth();
const email = ref("");
const password = ref("");
const dialog = ref(false);
const otp = ref("");
const passRules = [(v: any) => !!v || "Password is required"];
const emailRules = [
  (v: any) => !!v || "E-mail is required",
  (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
];
const signInHandler = async () => {
  try {
    // const { error, url } = await signIn("credentials", {
    const response = await signIn("credentials", {
      email: email.value,
      password: password.value,
      redirect: false,
    });
    // isLoggedIn.isLoggedIn();
    router.push("/");
    console.log(response);

    // if (error) {
    //   console.error("Authentication error:", error.message);
    // } else {
    //   console.log("Authentication successful. Redirecting to:", url);
    // }
  } catch (error) {
    console.error("An unexpected error occurred during login:", error);
  }
};
const customlogin = async () => {
  try {
    const response: any = await signIn("Credentials", {
      email: email.value,
      password: password.value,
      redirect: false,
    });

    console.log("resp", response);

    // if (response.data.data.is_2FA_enabled === true) {
    //   dialog.value = true;
    //   response.base32 = response.data.data.base32;
    //   response.session_id = response.data.data.session_id;
    // }
    // isLoggedIn.isLoggedIn();
    console.log("here", response);
  } catch (err) {
    console.log(err);
  }
};

const verifyotp = async () => {
  try {
    const result = await signIn("credentials", {
      email: email.value,
      password: password.value,
      code: otp.value,
    });
    console.log(result);
  } catch (error) {
    console.error("Error while verifying OTP:", error);
  }
};
</script>


