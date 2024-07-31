function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


let s = "pwwkew";
console.log(lengthOfLongestSubstring(s)); 
