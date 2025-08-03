import { useEffect, useState } from 'react';
import Container from './Container';
import useCalculation from '../hooks/useCalculation';
import expression from '../assets/expression.svg';

interface ResultViewerProps {
  nthTerm: number;
}

const ResultViewer: React.FC<ResultViewerProps> = ({ nthTerm }) => {
  const [resultFibonacci, setResultFibonacci] = useState(0);
  const [resultTriangular, setResultTriangular] = useState(0);
  const [resultPrimeNumber, setResultPrimeNumber] = useState(0);
  const {
    getNthTermFibonacciSeries,
    getNthPrimeNumber,
    getNthTriangularNumber,
  } = useCalculation();

  const getNthTermLabel = (nthTerm: number): string => {
    // For numbers ending with [11 | 12 | 13] we use 'th'
    if (nthTerm % 100 >= 11 && nthTerm % 100 <= 13) {
      return `${nthTerm}-th`;
    }

    switch (nthTerm % 10) {
      case 1:
        // Number ending in 1 (except 11) we use 'st'
        return `${nthTerm}-st`;
      // Number ending in 2 (except 12) we use 'nd'
      case 2:
        return `${nthTerm}-nd`;
      // Number ending in 3 (except 13) we use 'rd'
      case 3:
        return `${nthTerm}-rd`;
      default:
        return `${nthTerm}-th`;
    }
  };

  useEffect(() => {
    setResultFibonacci(getNthTermFibonacciSeries(nthTerm));
    setResultPrimeNumber(getNthPrimeNumber(nthTerm - 1));
    setResultTriangular(getNthTriangularNumber(nthTerm - 1));
  }, [
    nthTerm,
    getNthTermFibonacciSeries,
    getNthPrimeNumber,
    getNthTriangularNumber,
  ]);

  return (
    <Container isColumnArranged justifyContent="center">
      {nthTerm === -1 ? (
        <>
          <h5 className="text-2xl text-gray-800 font-semibold">
            Sorry, you've got to enter a number first
          </h5>
          <h6 className="text-lg text-gray-800 font-base">
            The number must comprised between 1 and 100
          </h6>
        </>
      ) : (
        <>
          <h5 className="text-2xl text-gray-800 font-semibold">
            The calculated results are:
          </h5>
          <Container>
            <Container isColumnArranged>
              <p className="text-xl text-blue-500">
                The <span className="italic">{getNthTermLabel(nthTerm)}</span>{' '}
                term of Fibonacci's series is:
              </p>
              <p className="text-4xl text-blue-500 font-bold">
                {resultFibonacci}
              </p>
            </Container>
            <Container isColumnArranged>
              <p className="text-xl text-amber-400">
                The <span className="italic">{getNthTermLabel(nthTerm)}</span>{' '}
                triangular number is:
              </p>
              <p className="text-4xl text-amber-400 font-bold">
                {resultTriangular}
              </p>
            </Container>
            <Container isColumnArranged>
              <p className="text-xl text-rose-400">
                The <span className="italic">{getNthTermLabel(nthTerm)}</span>{' '}
                prime number is:
              </p>
              <p className="text-4xl text-rose-400 font-bold">
                {resultPrimeNumber}
              </p>
            </Container>
          </Container>
          <Container isColumnArranged alignItems="center">
            <p className="text-xl text-gray-800">
              Applying these results to the given expression:
            </p>
            <img className="w-1/2" src={expression} alt="Expression" />
          </Container>
          <p className="text-xl text-gray-800">
            The final result is:{' '}
            <span className="font-bold">
              {2 * resultFibonacci +
                3 * resultTriangular -
                7 * resultPrimeNumber}
            </span>
          </p>
        </>
      )}
    </Container>
  );
};

export default ResultViewer;
