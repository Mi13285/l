function scramble(str1, str2) {
  let i;
  if (str1.length >= str2.length) {
  }
  if (str1 === str2) {
    return true;
  }
  for (let index = 0; index < str2.length; index++) {
    const str = str1.replace(str2[index]);
    if (str.length === str1.length) {
      return false;
    }
    str1 = str;
    return true;
  }
}
console.log(scramble("rkqodlw", "world"));
