  import { LocalScheme } from '~auth/runtime'
  export default class customScheme extends LocalScheme {
 
     async login(endpoint, reset = true) {
    if (!this.options.endpoints.login) {
      return
    }
    if (reset) {
      this.$auth.reset({ resetInterceptor: false })
    }

    // Make login request
    const response = await this.$auth.request(
      endpoint,
      this.options.endpoints.login
    )
      // eslint-disable-next-line no-console
    console.log(response)
    // 2FA enabled
  
    if (
       response.data.data.is_2FA_enabled === true && !response.data.data.id
    ) {
      return response
    }

    // Update tokens
    this.updateTokens(response)

    // Initialize request interceptor if not initialized
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor()
    }

    // Fetch user if `autoFetch` is enabled
    if (this.options.user.autoFetch) {
      await this.fetchUser()
    }

    return response
  }
 }
    



  