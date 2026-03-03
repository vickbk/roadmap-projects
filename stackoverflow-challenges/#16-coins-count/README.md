# Min coin count challenge

## History

After more than 230 years of production, the United States made its final one-cent coin in late 2025. That news got us thinking about how to add up coins to create change.

![Image from IStock](./assets/image.png)

## The challenge

You are given a set of coin denominations, a corresponding set of maximum available counts for each denomination, and a target amount of money. In the attached file, we have 100 inputs.

Your task is to determine the minimum number of coins needed to make exactly the target amount for each in put. If it is not possible to make the target amount using the available coins, return -1.

- Each coin denomination may be used at most the number of times specified by its count.

- You may use fewer than the maximum available coins.

- The order of coins does not matter.

### Each Input

The input will consist of an array with 3 elements, in this order:

- denominations: a list of positive integers representing coin values

- counts: a list of non-negative integers where counts[i] is the maximum number of coins available for denominations[i]. The counts and denominations lists will always be the same length.

- target: a positive integer representing the amount of money you need to reach

### Each output:

A positive integer representing the minimum number of coins needed to add up to the target amount, or -1 if it cannot be done.

### Test Case:

Input: [[1, 5, 10], [10, 2, 1], 23]

Output: 6

- Explanation: One way to get the target is 10 + 10 + 1 + 1 + 1 = 23, which uses 5 coins, but this solution is not valid. It requires 2 coins with a denomination of 10, but only 1 coin of this type is available. The solution using the smallest number of available coins is 10 + 5 + 5 + 1 + 1 + 1 = 23, which uses 6 coins and respects all limits.

### Final submission:

Drawing from the 100 inputs in [JSON file](./assets/inputs.json), please provide:

    A single array containing your 100 integer outputs (e.g., [6, 14, -1...]).

    The code used to solve the challenge.

    A brief description of your approach and any interesting hurdles you encountered.

## Rules:

    All correct responses will be designated as winners.

    Challenge deadline is March 11, 2026.

    Your entry is not permitted to be written by AI.

    For any feedback on this Challenge, please head over to the Meta post.

    Have fun and thanks for participating!
