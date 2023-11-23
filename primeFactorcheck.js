const is_prime = (num) => {
  if (num < 2) {
    return false;
  } else {
    for (i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};
const find_primes_in_range = (start, end) => {
  let primes = [];
  for (num = start; num <= end; num++) {
    if (is_prime(num)) {
      primes.push(num);
    }
  }
  return primes;
};
const result = find_primes_in_range(0, 20);
console.log(result);
