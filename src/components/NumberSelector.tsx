import { useEffect, useState } from 'react';
import Container from './Container';

type InputTypes = 'manual' | 'auto';
interface NumberSelectorProps {
  onChangeNumberEvent: (nthTerm: number) => void;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({
  onChangeNumberEvent,
}) => {
  const [isManualInput, setIsManualInput] = useState(false);
  const [inputType, setInputType] = useState<InputTypes>('auto');
  const [currentNumber, setCurrentNumber] = useState(1);

  const onChangeInputTypeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentNumber(1);
    setIsManualInput(e.target.checked);
  };

  const onClickOperandsHandler = (action: 'incr' | 'decr') => {
    if (action === 'incr') {
      if (currentNumber < 15) {
        setCurrentNumber((currentNumber) => currentNumber + 1);
      }
    } else {
      if (currentNumber > 1) {
        setCurrentNumber((currentNumber) => currentNumber - 1);
      }
    }
  };

  useEffect(
    () => (isManualInput ? setInputType('manual') : setInputType('auto')),
    [isManualInput]
  );
  useEffect(
    () => onChangeNumberEvent(currentNumber),
    [currentNumber, onChangeNumberEvent]
  );

  const INPUT_COMPONENTS: Record<InputTypes, React.ReactNode> = {
    auto: (
      <Container isColumnArranged justifyContent="center">
        <Container className="my-4" alignItems="center" justifyContent="center">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
            onClick={() => onClickOperandsHandler('incr')}
            disabled={currentNumber > 14}
          >
            <i className="fas fa-plus text-xl"></i>
          </button>
          <span className="text-xl text-gray-800 mx-4">{currentNumber}</span>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white shadow-md cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed"
            onClick={() => onClickOperandsHandler('decr')}
            disabled={currentNumber < 2}
          >
            <i className="fas fa-minus text-xl"></i>
          </button>
        </Container>
      </Container>
    ),
    manual: (
      <Container isColumnArranged alignItems="center" justifyContent="center">
        <form className="w-[25%]">
          <label
            htmlFor="number-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter a number:
          </label>
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-100 border border-gray-300 text-white-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="90210"
            min={1}
            max={60}
            required
          />
        </form>
      </Container>
    ),
  };

  return (
    <Container isColumnArranged alignItems="center">
      <label className="inline-flex items-center cursor-pointer mt-2">
        <span
          className={`me-3 text-sm font-medium ${!isManualInput ? 'text-gray-900' : 'text-gray-300'}`}
        >
          Automatic input
        </span>
        <input
          type="checkbox"
          checked={isManualInput}
          onChange={onChangeInputTypeHandler}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span
          className={`ms-3 text-sm font-medium ${isManualInput ? 'text-gray-900' : 'text-gray-300'}`}
        >
          Manual input
        </span>
      </label>
      {INPUT_COMPONENTS[inputType]}
      {/* <Container isColumnArranged justifyContent="center">
        <Container className="my-4" alignItems="center" justifyContent="center">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
            onClick={() => onClickOperandsHandler('incr')}
            disabled={currentNumber > 14}
          >
            <i className="fas fa-plus text-xl"></i>
          </button>
          <span className="text-xl text-gray-800 mx-4">{currentNumber}</span>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white shadow-md cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed"
            onClick={() => onClickOperandsHandler('decr')}
            disabled={currentNumber < 2}
          >
            <i className="fas fa-minus text-xl"></i>
          </button>
        </Container>
        <p className="text lg text-gray-800">The result is: Auto</p>
      </Container> */}
    </Container>
  );
};

export default NumberSelector;
