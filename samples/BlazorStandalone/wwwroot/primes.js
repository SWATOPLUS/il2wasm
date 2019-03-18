var Primes = { RunComputation: null };

(function (Primes) {

	function IsPrime(value)
	{
		for (var possibleDivisor = 2; possibleDivisor * possibleDivisor <= value; possibleDivisor++) {
			if ((value % possibleDivisor) === 0) {
				return false;
			}
		}

		return true;
	}

    function BuildPrimeCalculator() {
        var current = 1;

        function ComputeNextPrime() {
            do {
                current++;
            }
            while (!IsPrime(current));

            return current;
        }

        return { ComputeNextPrime };
    }

    function GetNthPrime(n) {
        var primeCalculator = BuildPrimeCalculator();

        for (var i = 0; i < n - 1; i++) {
            primeCalculator.ComputeNextPrime();
        }

        return primeCalculator.ComputeNextPrime();
    }

    function run(n) {
        var res = GetNthPrime(n);
        console.log(res);
        return res;
    }



    Primes.RunComputation = run;
})(Primes);