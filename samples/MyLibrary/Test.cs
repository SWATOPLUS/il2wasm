namespace MyLibrary
{
    public static class Test
    {
        public static int GetNthPrime(int n)
        {
            if (n < 2)
            {
                return 2;
            }

            var current = 1;
            var count = 1;

            while (count != n)
            {
                current += 2;

                if (IsPrime(current))
                {
                    count++;
                }
            }

            return n;
        }

        public static bool IsPrime(int value)
        {
            for (var possibleDivisor = 2; possibleDivisor * possibleDivisor <= value; possibleDivisor++)
            {
                if ((value % possibleDivisor) == 0)
                {
                    return false;
                }
            }

            return true;
        }
    }
}
