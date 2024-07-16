export const environment = {
  BACKEND_BASE_URL: 'http://trodix.local:4080/api/v1',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://trodix.local:8080/realms/episodate',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'http://localhost:4200/',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-server
    clientId: 'episodate-ui',

    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: false,
    // at_hash is not present in JWT token
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};
