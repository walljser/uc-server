export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum GrantTypes {
  password = 'password',
  authorization_code = 'authorization',
  refresh_token = 'refresh_token',
  client_credentials = 'client_credentials',
}

export enum ResponseTypes {
  code = 'code'
}

export enum ResponseModes {
  query = 'query',
  fragment = 'fragment',
  form_post = 'form_post'
}

export enum Scopes {
  openid = 'openid',
  email = 'email',
  profile = 'profile',
  offline_access = 'offline_access'
}

export enum TokenAuthMethod {
  client_secret_post = 'client_secret_post',
  client_secret_basic = 'client_secret_basic',
  none = 'none',
}
