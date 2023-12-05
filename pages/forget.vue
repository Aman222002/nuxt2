
<template>
    <v-container>
        <v-text-field
v-model="newdata.email" :rules="rule.EmailRules" label="Enter Registered E-mail"
            required></v-text-field>
        <v-btn color="error" @click="sendcode()">
            Send Link
        </v-btn>
    </v-container>
</template>
<script>
export default {
    name: 'Forget',
    auth: false,
    data() {
        return {
            payload: {},
            newdata: {
                email: '',
            },
            rule: {
                EmailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            },
        }
    },
    methods: {
        sendcode() {
            this.payload.email = this.newdata.email;
            this.$axios.post(`/api/forgot-password`, this.payload).then(({ data }) => {
                 // eslint-disable-next-line no-console
                console.log("data", data);
            });
           
        }
    }
}
</script>