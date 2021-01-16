export const compose = (...fns) => x =>
  fns.reduce((y, f) => f(y), x);