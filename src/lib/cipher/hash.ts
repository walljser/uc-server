import { argon2id, hash, Options, verify } from 'argon2';

const defaultConfig: Options = {
  type: argon2id,
  hashLength: 32,
  timeCost: 3,
  memoryCost: 4096,
  parallelism: 1,
  saltLength: 16,
};

export function hashValue(value: string, options?: Options) {
  return hash(value, {
    ...defaultConfig,
    ...options,
    raw: false,
  });
}

export function verifyValue(value: string, hashed: string, options?: Options) {
  return verify(hashed, value, {
    ...defaultConfig,
    ...options,
    raw: false,
  });
}
