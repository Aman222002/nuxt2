import { NuxtAuthHandler } from '#auth'
const { passport } = useRuntimeConfig(); 
export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
    providers: [
       
        {
            id: "laravelpassport", 
            name: "Passport",
            type: "oauth", 
            version: "2.0",
            authorization: {
                url: `${passport.baseUrl}/oauth/authorize`, 
                params: {
                    scope: "*",
                }
            },
            token: {
                url: `${passport.baseUrl}/oauth/token`,
                method:'post',
                propertyName:'accessToken', 
            },
            clientId: passport.clientId, 
            clientSecret: passport.clientSecret,
            userinfo: {
                url: `${passport.baseUrl}/api/user`,
            },
            profile: (profile) => {
               console.log(profile) 
                return {
                    id: profile.id,
                    name: profile.username,
                    email: profile.email,
                };
            },
            idToken: false,
            
        }
    ],
    cookies: {
        pkceCodeVerifier: {
          name: `next-auth.pkce.code_verifier`,
          options: {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
            secure: true,
            maxAge: 900
          }
        }
    },
});