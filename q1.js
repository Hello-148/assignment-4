function runq1()
{
    let L = parseInt(prompt("Enter L:"));
    let R = parseInt(prompt("Enter R:"));
    let K = parseInt(prompt("Enter K:"));

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function hasZero(n) {
        return n.toString().includes('0');
    }

    function digitSum(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    let count = 0;

    for (let x = L; x <= R; x++) {
        if (x % K === 0 && !hasZero(x)) {
            let sum = digitSum(x);
            if (isPrime(sum)) count++;
        }
    }

    alert(count);
}