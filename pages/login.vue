<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <h1>LOGIN :</h1>
            <v-form ref="form">
              <v-text-field
                v-model="loginn.email"
                :rules="emailRules"
                label="E-mail"
                required
              />
              <v-text-field
                v-model="loginn.password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
              />
              <v-row align="center" style="display: inline">
                <v-btn color="primary" @click="submitForm"> Login </v-btn>
               
                <nuxt-link   to="/forget" style="color: red; margin-left: 30px;">Forget Password </nuxt-link>
                <br><br>
                <v-btn color="blue" @click="googlelogin()">
                  <v-icon style="font-size: 30px">mdi-google</v-icon>
                  Login with google </v-btn
                ><br /><br />

                <v-btn color="gray" @click="gitlogin()">
                  <v-icon style="font-size: 30px">mdi-github</v-icon>
                  Login with git </v-btn
                ><br /><br />

                <v-btn color="light blue" @click="fblogin()">
                  <v-icon style="font-size: 30px">mdi-facebook</v-icon>
                  Login with facebook </v-btn
                ><br /><br />

                <v-btn color="secondary" @click="dislogin()">
                  Login with discord </v-btn
                ><br /><br />

                <v-btn color="error" @click="customlogin()">
                  Login with Custom </v-btn
                ><br /><br />

                <v-btn color="primary" @click="auth0login()">
                  Login with auth0 </v-btn
                ><br /><br />
              </v-row>
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
                      <v-btn color="primary" text  @click="validotp()" >
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
  <script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  middleware: ['guest'],
  data() {
    return {
      dialog: false,
      otp: '',
      response:{},
      loginn: {
        email: '',
        password: '',
     
      },
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [(v) => !!v || 'Password is required'],
    }
  },

  methods: {
    ...mapActions({ login: 'Set_Login' }),

    async submitForm() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.loginn,
        })
        // eslint-disable-next-line no-console
        console.log(response)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
    googlelogin() {
     this.$auth.loginWith('google', { params: { prompt: 'select_account' } })
    },
    gitlogin() {
      this.$auth.loginWith('github')
    },
    fblogin() {
      this.$auth.loginWith('facebook')
    },
    dislogin() {
      this.$auth.loginWith('discord')
    },
    auth0login() {
      this.$auth.loginWith('auth0')
    },
    async customlogin() {
      try {
        const response = await this.$auth.loginWith('customStrategy', {
          data: this.loginn,
        })
        if (response.data.data.is_2FA_enabled === true)
        {
          this.dialog=true;
          this.response.base32 = response.data.data.base32
          this.response.session_id = response.data.data.session_id
        }
        // eslint-disable-next-line no-console
        console.log('here i am ', response)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
    async validotp(){
      try {
        this.response.code= this.otp
        const result = await this.$auth.loginWith('customStrategy', {   data: this.response })
         // eslint-disable-next-line no-console
        console.log(result)
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
  },
}}
</script>
  