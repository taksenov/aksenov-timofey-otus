/**
 * Очень простая реализация функции pipe
 *
 * @param {...any[]} fns
 */
const pipe = (...fns: any[]) => (x: any) => fns.reduce((v, f) => f(v), x);

export default pipe;
