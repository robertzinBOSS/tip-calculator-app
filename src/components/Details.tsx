import { Dispatch, SetStateAction } from 'react';

type DetailsProps = {
  bill: string;
  tip: string;
  numberOfPeople: string;
  executors: Dispatch<SetStateAction<string>>[];
};

export function Details({
  bill,
  tip,
  numberOfPeople,
  executors,
}: DetailsProps) {
  const isValid =
    Number(bill) > 0 && Number(tip) > 0 && Number(numberOfPeople) > 0;
  const tipAmount = (Number(bill) * Number(tip)) / 100 / Number(numberOfPeople);

  return (
    <div className="bg-very-dark-cyan flex flex-col gap-6 rounded-2xl p-6 md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-very-light-grayish-cyan">Tip Amount</p>
          <p className="text-sm text-grayish-cyan">/ person</p>
        </div>
        <span className="text-3xl md:text-5xl text-strong-cyan">
          ${isValid ? tipAmount.toFixed(2) : (0).toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-very-light-grayish-cyan">Total</p>
          <p className="text-sm text-grayish-cyan">/ person</p>
        </div>
        <span className="text-3xl md:text-5xl text-strong-cyan">
          $
          {isValid
            ? (Number(bill) / Number(numberOfPeople) + tipAmount).toFixed(2)
            : (0).toFixed(2)}
        </span>
      </div>
      <button
        disabled={!isValid}
        onClick={() => {
          executors.forEach(ex => {
            ex('0');
          });
        }}
        className={`bg-strong-cyan ${
          isValid && 'hover:brightness-110'
        } md:mt-auto transition-all duration-300 rounded-md uppercase text-very-dark-cyan py-2.5 text-lg disabled:opacity-30`}
      >
        Reset
      </button>
    </div>
  );
}
