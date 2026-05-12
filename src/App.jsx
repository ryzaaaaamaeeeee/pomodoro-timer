import React from "react";
import ModeSelector from "./components/ModeSelector";
import TimerDisplay from "./components/TimerDisplay";
import TimerControl from "./components/TimerControl";

function App() {
  return (
    <div className="min-h-screen bg-violet-50 flex items-center justify-center">
      <div className="p-10 flex flex-col gap-8 w-full max-w-md">
        <ModeSelector />
        <h1 className="text-4xl font-bold text-center text-purple-700 tracking-wide">
          POMODORO TIMER
        </h1>
        <TimerDisplay />
        <TimerControl />
      </div>
    </div>
  );
}

export default App;
