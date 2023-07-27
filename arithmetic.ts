/**
 * Returns all prime numbers between 2 and n.
 * Uses the Sieve of Eratosthenes algorithm.
 */
export function getPrimes(n: number) {
    // create the number grid
    let grid = Array.apply(null, Array(n - 1))

    // populate the grid
    for (let i = 0; i < grid.length; i++) {
        grid[i] = i+2;
    }

    // strikout nums that are divisible by prime numbers, starting with 2
    for (let i = 0; i < grid.length; i++) {
        let current = grid[i]
        for (let j = i + 1; j < grid.length; j++) {
            if (grid[j] % current === 0) {
                grid[j] = false
            }
        }
    }

    // build solution
    let primes = []
    for (let i = 0; i < grid.length; i++) {
        if (grid[i]) primes.push(grid[i])
    }

    return primes

}
