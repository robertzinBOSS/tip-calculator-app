import { useState } from 'react';
import { Buttons, Details, Screen } from './components';

export default function App() {
  const [bill, setBill] = useState('0');
  const [tip, setTip] = useState('0');
  const [numberOfPeople, setNumberOfPeople] = useState('0');

  return (
    <>
      <header>
        <div className="text-2xl uppercase tracking-[12px] text-center py-10 md:mb-10 text-very-dark-cyan">
          <h1>Spli</h1>
          <h1>tter</h1>
        </div>
      </header>
      <main>
        <div className="rounded-2xl bg-white p-8 md:py-10 grid md:grid-cols-2 gap-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
            <Screen
              title="Bill"
              icon="/assets/icon-dollar.svg"
              amount={bill}
              executor={setBill}
            />
            <Buttons tip={tip} setTip={setTip} />
            <Screen
              title="Number of people"
              icon="/assets/icon-person.svg"
              amount={numberOfPeople}
              executor={setNumberOfPeople}
            />
          </div>
          <Details
            bill={bill}
            tip={tip}
            numberOfPeople={numberOfPeople}
            executors={[setBill, setTip, setNumberOfPeople]}
          />
        </div>
      </main>
      <footer>
        <div className="text-sm text-center my-10 md:mt-16">
          <p>Challenge by Frontend Mentor.</p>
          <a
            href="https://www.frontendmentor.io/profile/robertzinBOSS"
            rel="noopener"
            target="_blank"
          >
            Coded by <em className="underline">Roberto Llontop</em>
          </a>
        </div>
      </footer>
    </>
  );
}
