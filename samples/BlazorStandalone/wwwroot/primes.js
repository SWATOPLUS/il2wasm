var Primes = { GetNthPrime: null };

(function (Primes) {

	function GetNthPrime(n) {
		if (n < 2) {
			return 2;
		}

		var current = 1;
		var count = 1;

		while (count != n) {
			current += 2;

			if (IsPrime(current)) {
				count++;
			}
		}

	return n;
	}

	function IsPrime(value) {
		for (var possibleDivisor = 2; possibleDivisor * possibleDivisor <= value; possibleDivisor++) {
			if ((value % possibleDivisor) === 0) {
				return false;
			}
		}

		return true;
    }

    Primes.GetNthPrime = GetNthPrime;
})(Primes);