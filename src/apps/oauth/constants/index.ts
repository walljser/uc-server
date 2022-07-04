export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum GrantTypes {
  password = 'password', // 密码
  authorization_code = 'authorization', // 授权码
  refresh_token = 'refresh_token', // 更新令牌
  client_credentials = 'client_credentials', // 凭证式
}

export enum ResponseTypes {
  code = 'code',
}

export enum ResponseModes {
  query = 'query',
  fragment = 'fragment',
  form_post = 'form_post',
}

export enum Scopes {
  openid = 'openid',
  email = 'email',
  profile = 'profile',
  offline_access = 'offline_access',
}

export enum TokenAuthMethod {
  client_secret_post = 'client_secret_post',
  client_secret_basic = 'client_secret_basic',
  none = 'none',
}
