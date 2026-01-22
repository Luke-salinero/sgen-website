import keycloak from "./keycloak";

export async function initAuth(){
    const authenticated = await keycloak.init({
        onLoad: "check-sso",
        pkceMethod: "S256",
        checkLoginIframe: false,
    })

    return authenticated;
}
    
export function login() {
  return keycloak.login();
}

export function signup() {
  return keycloak.register();
}

export function logout() {
  return keycloak.logout({redirectUri: window.location.origin});
}

export function getToken() {
  return keycloak.token;
}

export async function ensureFreshToken(minValiditySeconds = 30) {
  try {
    await keycloak.updateToken(minValiditySeconds);
    return keycloak.token;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(keycloak.authenticated);
}