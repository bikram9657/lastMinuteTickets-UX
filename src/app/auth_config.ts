interface AuthConfig {
    domain: string;
    clientId: string;
    redirectUri: string;
    logoutUri: string;
    audience: string;
  }
  
  export const authConfig: AuthConfig = {
    domain: 'dev-uzxfww563jcrzgal.us.auth0.com',
    clientId: 'e2HCb2i8K3Pya4NzMXKbUuyTmoyZ5JpG',
    redirectUri: window.location.origin + '/callback',
    logoutUri: window.location.origin,
    audience: 'http://localhost:8080',
};