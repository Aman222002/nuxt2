
   <template>
  <v-container>
    <v-row align="center">
      <v-col cols="15" sm="8" md="8">
        <v-card>
          <v-card-title>Profile Information</v-card-title>
          <v-card-text>
            <v-avatar
              size="170"
              style="float: left; margin-right: 30px; margin-top: 0px"
            >
              <img :src='$auth.user.profile_picture' alt="Avatar" />
            </v-avatar>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Name:</v-list-item-title>
                  <v-list-item-subtitle>{{
                    $auth.user.full_name
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Email:</v-list-item-title>
                  <v-list-item-subtitle>{{
                    $auth.user.email
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Phone Number:</v-list-item-title>
                  <v-list-item-subtitle>{{ $auth.user.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" @click="update()">Update </v-btn>
              </v-list-item>
           
            </v-list>
          </v-card-text>
        </v-card>

        <v-row justify="center">
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="text-h5">Update Info</v-card-title>
              <v-form ref="form" v-model="valid">
                <v-card-text>
                  <v-text-field
                    v-model="newdata.name"
                    label="Name"
                    required
                    :rules="nameRules"
                  />
                
                 
                  <VueTelInput
                    v-model="newdata.phone"
                    :input-options="inputOptions"
                    mode="international"
                  />
                  <br>
                 
               
                  <v-file-input
                    v-model="selectedfile"
                    label="Upload Profile Picture"
                 
                  ></v-file-input>
                  <v-btn    @click="uploadFile()">Change Profile</v-btn>

                  <v-btn
                    class="mr-4"
                    type="submit"
                    color="primary"
                    @click="submit"
                    >Update</v-btn
                  >
                </v-card-text>
              </v-form>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      newdata: {
        name: this.$auth.user.full_name,
        phone: this.$auth.user.phone,
        
      },
      selectedfile:null,
     
     
      payload: {},
      dialog: false,
      valid: true,
      isdialog:false,
    
      nameRules: [(v) => !!v || 'Name is required'],
      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => /^\d{10}$/.test(v) || 'Enter a valid 10-digit number',
      ],
      inputOptions: {
        preferredCountries: ['us', 'gb', 'ca', 'in'],
      },
    }
  },
  methods: {
    update() {
      this.dialog = true
    },
    submit(event) {
      event.preventDefault()
      try {
        this.payload.id = this.$auth.user.id
        this.payload.full_name = this.newdata.name
        this.payload.phone = this.newdata.phone
      
        this.$axios
          .post('/api/user/update', this.payload)

          .then(async ({ data }) => {
            // eslint-disable-next-line no-console
            console.log(
              '%cUpdated Succesful!',
              'color:blue;font-size:20px;',
              data
            )
            await this.$auth.fetchUser()
            this.$swal.fire({
              icon: 'success',
              title: 'Update Successful!',
              text: 'Your data has been updated.',
            })
            this.dialog = false
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error updating user:', error)
      }
    },
    uploadFile(){
      
    const formData = new FormData();
    formData.append('image', this.selectedfile);
    formData.append('folderName','images')
    this.$axios
      .post(`/api/upload-file`, formData)
      .then(({ data }) => {
        
        // eslint-disable-next-line no-console
        console.log('upload',data);
        this.payload.profile_picture =data.data.name
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error uploading profile picture:', error);
      });
    
    }
  
    }
  }

</script>
  
  <style>
</style>
  