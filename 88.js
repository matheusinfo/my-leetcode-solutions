// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var insertPos = m + n - 1;

  m--;
  n--;

  while (n >= 0) {
    nums1[insertPos] = nums1[m] > nums2[n] ? nums1[m] : nums2[n];
    insertPos--;
    m--;
    n--;
  }
};

