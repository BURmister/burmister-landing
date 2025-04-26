export const preprocessHTML = (html) => {
   // Заменяем "в&nbsp;разных" или любые похожие сочетания
   if (!html) return '';
   const regex = /([\p{L}\p{N}]+)&nbsp;([\p{L}\p{N}]+)/gu;
   const result = html?.replace(regex, '<span class="nowrap">$1&nbsp;$2</span>');
   return result;
};
