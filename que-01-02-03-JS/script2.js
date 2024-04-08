function longestCommonSubsequence(str1, str2) {
  const arr = [];
  // col
  for (let i = 0; i <= str1.length; i++) {
    arr[i] = [];
    arr[i][0] = 0;
  }

  // row
  for (let j = 0; j <= str2.length; j++) {
    arr[0][j] = 0;
  }
  for (let i = 1; i <= str1.length; i++) {

    for (let j = 1; j <= str2.length; j++) {

      if (str1[i - 1] === str2[j - 1]) {

        arr[i][j] = arr[i - 1][j - 1] + 1;
      } 
      else {
        arr[i][j] = Math.max(arr[i][j - 1], arr[i - 1][j]);
      }
      console.log(arr)
    }
  }
  return arr[str1.length][str2.length];
}
const str1 = "ABCBDAB";
const str2 = "BDCAB";

console.log("Length of longestCommonSubsequence:", longestCommonSubsequence(str1, str2));

