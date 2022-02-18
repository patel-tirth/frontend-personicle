export default {
    oidc: {
        issuer: 'https://dev-01936861.okta.com/oauth2/default',
        clientId: '0oa3sq0q2iDDS2IV25d7',
        clientSecret: 'UVLQptCKU4lDLlrK3WCetyrN0JASksfTOmBFDUSL',
        redirectUri: 'http://localhost:3000',
        storageManager: {
            token: {
                storageTypes: [
                    'localStorage',
                    'sessionStorage',
                    'cookie'
                ],
            } 
        },
        responseType: ['code','id_token','token'],
        pkce:false
    },
    idps: {
        googleId: '0oa3v658b8VCLoy3L5d7',
        state:'thisissomestate',
        nonce:'thisissomerandomstring',
        redirect_uri: 'http%3A%2F%2Flocalhost%3A3000%2F'
    },
    responseMode: 'fragment',
    resourceServer: {
        endpoint: 'https://127.0.0.1:5000',
        stagingEndpoint:  'https://20.121.8.101:8000',
        authenticate:  'https://127.0.0.1:5000/authenticate',
        stagingAuthenticate: 'https://20.121.8.101:8000/authenticate'
    },
            
    };    