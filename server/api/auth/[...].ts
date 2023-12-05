import { NuxtAuthHandler } from "#auth";
import { Account, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from 'next-auth/providers/credentials'

// Assuming useRuntimeConfig() fetches runtime configurations
 const { local } = useRuntimeConfig();

// export default NuxtAuthHandler({
//   // secret: local.secret,
//   secret: process.env.AUTH_SECRET,
//   providers: [
//    CredentialsProvider.default({
//     baseURL: process.env.BASE_URL || "",
//       name: "Credentials",
//       type:"credentials",
//       pages: {
//         signIn: "/login",
//       },
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials:any, request: any) => {
//         console.log("here", request)
//         return false;
//         try {
//           const response = await fetch('auth/login', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(credentials),
//           });
//           if (response.ok) {
//             const responseData = await response.json();
//             if (
//               responseData.data &&
//               responseData.data.is_2FA_enabled === true &&
//               !responseData.data.id
//             ) {  
//               return responseData;
//             } else {
//               return responseData.user || null;
//             }
//           } else {
//             return null;
//           }
//         } catch (error) {
//           console.error('Fetch error:', error);
//           return null;
//         }
//       },
//       endpoints:{

//       }
//     }),
//   ],
     
// });

export default NuxtAuthHandler({
    secret: local.secret,
   providers: [
    CredentialsProvider.default({
        name: "credentials",
        id: "localprovider",
        async authorize(credentials, request){
            console.log("creds", request, credentials)
            return {}
        }
    }),
   ],
   debug: true,
   session: {
    
   }

  })

