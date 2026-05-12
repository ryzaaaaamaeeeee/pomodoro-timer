import { useTimer } from "../context/TimerContext";

export default function TimerControls() {
  const { state, dispatch } = useTimer();

  return (
    <div className="flex gap-4 justify-center">
      {state.isRunning ? (
        <button
          onClick={() => dispatch({ type: "PAUSE" })}
          className="px-6 py-3 bg-purple-500 text-white rounded-full font-medium"
        >
          Pause
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "START" })}
          className="px-6 py-3 border-2 border-purple-500 text-violet-500 rounded-full font-medium"
        >
          Start
        </button>
      )}

      <button 
        onClick={() => dispatch({ type: "RESET" })}
        className="px-6 py-3 border-2 border-purple-500 text-violet-500 rounded-full font-medium"
        >
            Reset
        </button>
    </div>
  );
}
