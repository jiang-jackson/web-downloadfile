
/**
 * 校验是否url链接
 * @param url  ：url链接
 * @returns {Bool}：是否url链接
 */
export function CheckUrl(url) {
  let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
  return reg.test(url);
}

/**
 * 校验是否base64Str字符串
 * @param base64Str  ：base64Str字符串
 * @returns {Bool}：是否base64Str字符串
 */
export function isBase64(base64Str) {
  let base64Pattern = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
  return base64Pattern.test(base64Str);
}