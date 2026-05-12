import { useTimer } from '../context/TimerContext'

export default function ModeSelector() {
    const { state, dispatch } = useTimer()

    const modes = [
        {label: 'Focus', value: 'focus'},
        {label: 'Short Break', value: 'shortBreak'},
        {label: 'Long Break', value: 'longBreak'},
    ]

    function handleModeChange(value) {
        dispatch({type: 'SET_MODE', payload: value})
    }

    return (
        <div className="flex gap-2 justify-center">
            {modes.map((mode) => (
                <button
                key={mode.value}
                onClick={() => handleModeChange(mode.value)}
                className={`px-4 py-2 border-2 border-purple-500 rounded-full text-sm font-medium transition-colors
                    ${state.mode === mode.value 
                        ? 'bg-purple-600 text-white'
                        : 'text-purple-600'
                    }`}
                    >
                        {mode.label}
                    </button>
            ))}
        </div>
    )
}
