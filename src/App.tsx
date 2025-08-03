import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import NumberSelector from './components/NumberSelector';
import ResultViewer from './components/ResultViewer';
import './App.css';

function App() {
  const [enteredNumber, setEnteredNumber] = useState(1);
  const changeNumberEventHandler = (nthTerm: number): void => {
    setEnteredNumber(nthTerm);
  };
  return (
    <>
      <div className="w-full">
        <Container isColumnArranged className="py-6">
          <Container>
            <Card justifyContent="center">
              <h1 className="text-2xl text-gray-900 font-semibold">
                Welcome to this demo application
              </h1>
              <h2 className="text-xl text-gray-900 font-regular">
                Please, follow the instructions below
              </h2>
              <h3 className="text-lg text-gray-900 font-regular">
                The components here are utilised to calculate the{' '}
                <span className="italic">n-th</span> term of the:
                <ul className="flex justify-center gap-4">
                  <li>Fibonacci series</li>
                  <li>Pascal triangle</li>
                  <li>The other series</li>
                </ul>
              </h3>
            </Card>
            <Card alignItems="start">
              <ul role="list" className="divide-y divide-gray-400">
                <li className="flex justify-start gap-x-6 py-5 text-gray-600 text-left">
                  <span className="font-medium text-gray-800">1.</span>
                  <span>
                    Utilise the buttons to increment, or decrement the number
                    (by one unit at a time). If you want to enter a number
                    manually, click on the{' '}
                    <span className="font-medium text-gray-800">
                      toggle button
                    </span>
                    .
                  </span>
                </li>
                <li className="flex justify-start gap-x-6 py-5 text-gray-600 text-left">
                  <span className="font-medium text-gray-800">2.</span>
                  <span>
                    Once you've confirmed the{' '}
                    <span className="italic">n-th term</span> you'd like to
                    compute, click on the{' '}
                    <span className="font-medium text-gray-800">
                      calculate button
                    </span>
                    .
                  </span>
                </li>
                <li className="flex justify-start gap-x-6 py-5 text-gray-600 text-left">
                  <span className="font-medium text-gray-800">3.</span>
                  <span>
                    If you used the increment/decrement buttons, the computed{' '}
                    <span className="italic">n-th term</span> will be
                    automatically updated. Otherwise, you'll have to click on
                    the{' '}
                    <span className="font-medium text-gray-800">
                      reset button
                    </span>{' '}
                    to trigger the computation again.
                  </span>
                </li>
              </ul>
            </Card>
          </Container>
          <Card>
            <h4 className="text-2xl text-gray-800">
              Enter a number to calculate the{' '}
              <span className="italic">n-th term</span>
            </h4>
            <NumberSelector onChangeNumberEvent={changeNumberEventHandler} />
          </Card>
          <Card>
            <ResultViewer nthTerm={enteredNumber} />
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;
