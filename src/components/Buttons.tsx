import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const INPUTS = [
  { type: 'N', value: 5 },
  { type: 'N', value: 10 },
  { type: 'N', value: 15 },
  { type: 'N', value: 25 },
  { type: 'N', value: 50 },
  { type: 'C', value: 0 },
];

type ButtonsProps = {
  tip: string;
  setTip: Dispatch<SetStateAction<string>>;
};

export function Buttons({ tip, setTip }: ButtonsProps) {
  const [temp, setTemp] = useState('');

  useEffect(() => {
    if (tip === '0') {
      setTemp('');
    }
  }, [tip]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-dark-grayish-cyan">Select Tip %</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl">
        {INPUTS.map(b =>
          b.type === 'N' ? (
            <button
              key={b.value}
              onClick={() => setTip(String(b.value!))}
              className={`${
                b.value === Number(tip)
                  ? 'bg-strong-cyan text-very-dark-cyan'
                  : 'bg-very-dark-cyan text-very-light-grayish-cyan'
              } rounded-md py-2 transition-all duration-300 hover:bg-strong-cyan hover:text-very-dark-cyan`}
            >
              {b.value}%
            </button>
          ) : (
            <input
              key={b.type}
              value={temp}
              onChange={e => {
                setTemp(e.target.value);
                setTip(e.target.value);
              }}
              placeholder="Custom"
              type="number"
              min={0}
              className={`bg-very-light-grayish-cyan block px-4 text-dark-grayish-cyan focus:outline-none focus:ring-2 text-right py-2 rounded-md ${
                temp === '' || Number(temp) <= 0
                  ? 'focus:ring-red-500'
                  : 'focus:ring-strong-cyan'
              }`}
            />
          ),
        )}
      </div>
    </div>
  );
}
