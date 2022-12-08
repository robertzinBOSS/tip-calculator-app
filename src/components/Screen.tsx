import { Dispatch, SetStateAction } from 'react';

type ScreenProps = {
  title: string;
  icon: string;
  amount: string;
  executor: Dispatch<SetStateAction<string>>;
};

export function Screen({ title, icon, amount, executor }: ScreenProps) {
  return (
    <div className="grid gap-2">
      <h2 className="text-dark-grayish-cyan">{title}</h2>
      <div className="relative ">
        <img
          src={icon}
          alt="Icon image"
          className="absolute top-1/2 left-3 transform -translate-y-1/2"
        />
        <input
          type="number"
          value={amount}
          min={0}
          onChange={e => executor(e.target.value)}
          className={`text-2xl block w-full px-4 py-2 text-very-dark-cyan text-right bg-very-light-grayish-cyan rounded-lg focus:outline-none focus:ring-2 ${
            amount === '0' || Number(amount) <= 0
              ? 'focus:ring-red-500'
              : 'focus:ring-strong-cyan'
          }`}
        />
      </div>
    </div>
  );
}
