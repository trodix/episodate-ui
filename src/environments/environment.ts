export const environment = {
  BACKEND_BASE_URL: 'https://episodate.trodix.com/api/v2',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://auth.trodix.com/realms/episodate',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'https://episodate.trodix.com/',

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
    requireHttps: true,
    // at_hash is not present in JWT token
    showDebugInformation: false,
    disableAtHashCheck: true
  }
};
