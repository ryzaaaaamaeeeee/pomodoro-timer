import { useTimer } from '../context/TimerContext'

export default function TimerDisplay() {
    const { state } = useTimer()

    const minutes = Math.floor(state.timeLeft / 60)
    const seconds = state.timeLeft % 60

    return (
        <div className="text-center">
            <p className="text-6xl md:text-9xl font-bold tracking-widest text-purple-800">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </p>
            <p className="text-sm text-purple-500 mt-2">
                Session {state.sessions} of 4
            </p>
        </div>
    )
}