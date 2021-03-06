/**
 * 税込み価格を返すカスタム関数
 *
 * @param {Number} price - 価格
 * @param {Number} taxRate - 税率（既定値は0.1）
 * @return {Number} - 税込価格
 * @customfunction
 */
 function ZEIKOMI(price, taxRate = 0.1) {
  return price * (1 + taxRate);
}
