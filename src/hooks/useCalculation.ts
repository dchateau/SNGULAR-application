import { useMemo } from 'react';

interface UseCalculationReturn {
  getNthTermFibonacciSeries: (nthTerm: number) => number;
  getNthPrimeNumber: (nthTerm: number) => number;
  getNthTriangularNumber: (nthTerm: number) => number;
}

const useCalculation = (): UseCalculationReturn => {
  const LENGTH_OF_SERIES = 100;

  const calculateFibonacciSeriesUtil = (
    nthTerm: number,
    memoizationArray: number[]
  ): number => {
    if (nthTerm <= 1) {
      memoizationArray[nthTerm] = nthTerm;
      return nthTerm;
    }

    // If the result already already exists in the memoization array
    if (memoizationArray[nthTerm] !== -1) {
      return memoizationArray[nthTerm];
    }

    memoizationArray[nthTerm] =
      calculateFibonacciSeriesUtil(nthTerm - 1, memoizationArray) +
      calculateFibonacciSeriesUtil(nthTerm - 2, memoizationArray);

    return memoizationArray[nthTerm];
  };
  const calculateFibonacciSeries = (): number[] => {
    const memoizationArray = new Array(LENGTH_OF_SERIES + 1).fill(-1);
    calculateFibonacciSeriesUtil(LENGTH_OF_SERIES, memoizationArray);

    return memoizationArray;
  };

  const isTriangularNumber = (num: number): boolean => {
    // Considering the equation to find the n-th triangular number => (n*(n+1))/2 = num
    // To solve it considering under the form => a(n^2) + bn + c = 0";
    if (num < 0) return false;
    const a = 1,
      b = 1;
    const c = -2 * num;
    const determinant = b ** 2 - 4 * a * c;

    if (determinant < 0) return false;

    const firstRoot = (-b + Math.sqrt(determinant)) / (2 * a);
    const secondRoot = (-b - Math.sqrt(determinant)) / (2 * a);
    // checking if firstRoot is natural
    if (firstRoot > 0 && Math.floor(firstRoot) == firstRoot) return true;
    // checking if secondRoot is natural
    if (secondRoot > 0 && Math.floor(secondRoot) == secondRoot) return true;

    return false;
  };
  const calculateTriangleNumbers = (): number[] => {
    let i,
      number = 1;
    const triangularNumbersArray: number[] = [];
    for (i = 0; i < LENGTH_OF_SERIES; ) {
      if (isTriangularNumber(number)) {
        triangularNumbersArray.push(number);
        i++;
      }
      number++;
    }

    return triangularNumbersArray;
  };

  const calculatePrimeNumbers = (): number[] => {
    // MAX_SIZE allows us to increment the amount of prime numbers
    // which if way longer than LENGTH_OF_SERIES. This value was
    // taken from experimentation
    const MAX_SIZE = 10 * LENGTH_OF_SERIES;
    const isPrimeArray = new Array(MAX_SIZE).fill(true);
    const primesArray: number[] = [];
    let prime, i;

    for (prime = 2; prime * prime < MAX_SIZE; prime++) {
      if (isPrimeArray[prime] == true) {
        for (i = prime * prime; i < MAX_SIZE; i += prime) {
          isPrimeArray[i] = false;
        }
      }
    }

    for (prime = 2; prime < MAX_SIZE; prime++)
      if (isPrimeArray[prime]) primesArray.push(prime);

    return primesArray;
  };

  const fibonacciSeries = useMemo(() => calculateFibonacciSeries(), []);
  const primeNumbers = useMemo(() => calculatePrimeNumbers(), []);
  const triangleNumbers = useMemo(() => calculateTriangleNumbers(), []);

  const getNthTermFibonacciSeries = (nthTerm: number): number =>
    nthTerm >= 0 ? fibonacciSeries[nthTerm] : 0;
  const getNthPrimeNumber = (nthTerm: number): number =>
    nthTerm >= 0 ? primeNumbers[nthTerm] : 0;
  const getNthTriangularNumber = (nthTerm: number): number =>
    nthTerm >= 0 ? triangleNumbers[nthTerm] : 0;

  return {
    getNthTermFibonacciSeries,
    getNthPrimeNumber,
    getNthTriangularNumber,
  };
};

export default useCalculation;
