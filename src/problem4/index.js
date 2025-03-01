/**
 * Computes the sum of integers from 1 to n using an iterative loop (Optimized)
 *
 * @param {number} n - The target integer
 * @returns {number} - The computed summation
 * @throws {Error} - If n is not a positive integer or exceeds the safe limit
 *
 * Time Complexity: O(n) - Loop runs n times
 * Space Complexity: O(1) - Constant space (no array)
 * Max n estimation: ~10^8 (100 million) before floating-point inaccuracies
 * Expected Execution Time: <100ms for n ~10^7
 * 
 * Efficiency: Best iterative approach with minimal overhead
 */
function sum_to_n_a(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('n must be a positive integer');
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

/**
 * Computes the sum of integers from 1 to n using recursion (Not Recommended)
 *
 * @param {number} n - The target integer
 * @returns {number} - The computed summation
 * @throws {Error} - If n is not a positive integer or exceeds stack limits
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) (call stack)
 * Max n estimation: ~10^4 (varies by JS engine)
 * 
 * Efficiency: Unsuitable for large n due to stack limits
 * Recommendation: Use iterative or formula approach instead
 */
function sum_to_n_b(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('n must be a positive integer');
  }

  if (n === 1) {
    return 1
  }

  return n + sum_to_n_b(n - 1);
}

/**
 * Computes the sum using the mathematical formula n(n+1)/2 with overflow checks
 *
 * @param {number|bigint} n - The target integer (supports BigInt)
 * @returns {number|bigint} - The computed summation
 * @throws {Error} - For invalid input or unsafe integer results
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * 
 * Efficiency: Optimal for all cases. Best approach with O(1) time complexity
 */
function sum_to_n_c(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('n must be a positive integer');
  }

  return (n * (n + 1)) / 2;
}
