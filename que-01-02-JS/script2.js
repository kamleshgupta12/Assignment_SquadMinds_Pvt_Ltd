function longestCommonSubsequence(str1, str2) {
    if (str1.length === 0 || str2.length === 0) {
        return 0;
    }

    if (str1[str1.length - 1] === str2[str2.length - 1]) {
        return 1 + longestCommonSubsequence(str1.slice(0, -1), str2.slice(0, -1));
    } else {
        
        const option1 = longestCommonSubsequence(str1, str2.slice(0, -1));
        const option2 = longestCommonSubsequence(str1.slice(0, -1), str2);

        return Math.max(option1, option2);
    }
}

const str1 = "ABCBDAB";
const str2 = "BDCAB";
console.log("Longest common subsequence length: ", longestCommonSubsequence(str1, str2));
