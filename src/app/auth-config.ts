import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';


export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: environment.googleRedirectUri,
  clientId: environment.GOOGLE_CLIENT_ID,
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
