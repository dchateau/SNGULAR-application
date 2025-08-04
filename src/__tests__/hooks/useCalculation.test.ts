import { describe, expect, it } from '@jest/globals';
import { renderHook } from '@testing-library/react';
import useCalculation from '../../hooks/useCalculation';

describe('useCalculation', () => {
  it('Should calculate the first 100 elements of the Fibonacci series when first mounted', () => {
    const { result } = renderHook(() => useCalculation());
    // The terms utilised as reference for this test have been
    // taken from the following website:
    // https://r-knott.surrey.ac.uk/fibonacci/fibtable.html
    expect(result.current.getNthTermFibonacciSeries(4)).toBe(3);
    expect(result.current.getNthTermFibonacciSeries(10)).toBe(55);
    expect(result.current.getNthTermFibonacciSeries(16)).toBe(987);
    expect(result.current.getNthTermFibonacciSeries(20)).toBe(6765);
    expect(result.current.getNthTermFibonacciSeries(24)).toBe(46368);
    expect(result.current.getNthTermFibonacciSeries(28)).toBe(317811);
    expect(result.current.getNthTermFibonacciSeries(32)).toBe(2178309);
    expect(result.current.getNthTermFibonacciSeries(38)).toBe(39088169);
    expect(result.current.getNthTermFibonacciSeries(44)).toBe(701408733);
    expect(result.current.getNthTermFibonacciSeries(50)).toBe(12586269025);
  });

  it('Should calculate the first 100 prime numbers when first mounted', () => {
    const { result } = renderHook(() => useCalculation());
    // The terms utilised as reference for this test have been
    // taken from the following websites:
    // https://en.wikipedia.org/wiki/List_of_prime_numbers
    expect(result.current.getNthPrimeNumber(4)).toBe(7);
    expect(result.current.getNthPrimeNumber(10)).toBe(29);
    expect(result.current.getNthPrimeNumber(16)).toBe(53);
    expect(result.current.getNthPrimeNumber(20)).toBe(71);
    expect(result.current.getNthPrimeNumber(24)).toBe(89);
    expect(result.current.getNthPrimeNumber(28)).toBe(107);
    expect(result.current.getNthPrimeNumber(32)).toBe(131);
    expect(result.current.getNthPrimeNumber(38)).toBe(163);
    expect(result.current.getNthPrimeNumber(44)).toBe(193);
    expect(result.current.getNthPrimeNumber(50)).toBe(229);
  });

  it('Should calculate (approximately) the first 100 triangular numbers when first mounted', () => {
    const { result } = renderHook(() => useCalculation());
    // The terms utilised as reference for this test have been
    // taken from the following websites:
    // https://www.jamieyorkpress.com/wp-content/uploads/2018/05/Square-and-Triangular-Numbers.pdf
    // https://en.wikipedia.org/wiki/Triangular_number
    expect(result.current.getNthTriangularNumber(4)).toBe(10);
    expect(result.current.getNthTriangularNumber(10)).toBe(55);
    expect(result.current.getNthTriangularNumber(16)).toBe(136);
    expect(result.current.getNthTriangularNumber(20)).toBe(210);
    expect(result.current.getNthTriangularNumber(24)).toBe(300);
    expect(result.current.getNthTriangularNumber(28)).toBe(406);
    expect(result.current.getNthTriangularNumber(32)).toBe(528);
    expect(result.current.getNthTriangularNumber(38)).toBe(741);
    expect(result.current.getNthTriangularNumber(44)).toBe(990);
    expect(result.current.getNthTriangularNumber(50)).toBe(1275);
  });
});
