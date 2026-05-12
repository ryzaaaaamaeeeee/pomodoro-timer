import { createContext, useContext, useReducer, useEffect } from "react"

const initialState = {
    timeLeft: 1500,
    isRunning: false,
    mode: 'focus',
    sessions: 0,
}

function timerReducer(state, action) {
    switch (action.type) {

        case 'START':
            return {...state, isRunning: true}

        case 'PAUSE':
            return{...state, isRunning: false}
        
        case 'RESET':
            return{...state,
                    isRunning: false,
                    timeLeft : state.mode === 'focus' 
                    ? 1500
                    : state.mode === 'shortBreak'
                    ? 300
                    : 900
                }

        case 'TICK':
            if(state.timeLeft === 0) {
                return {...state, 
                        isRunning: false,
                        sessions: state.mode === 'focus'
                        ? state.sessions + 1
                        : state.sessions
                    }
            }
            
            return {...state, timeLeft: state.timeLeft - 1}

        case 'SET_MODE': 
                return {...state,
                        isRunning: false,
                        mode: action.payload,
                        timeLeft: action.payload === 'focus' 
                        ? 1500
                        : action.payload === 'shortBreak'
                        ? 300
                        : 900
                }

        default:
            return state
    }
}

const TimerContext = createContext()

export function TimerProvider({children}) {
    const [state, dispatch] = useReducer (timerReducer, initialState)

    useEffect(() => {
        if (!state.isRunning) return;

        const interval = setInterval(() => {
            dispatch({ type: 'TICK' })
        }, 1000)

        return () => clearInterval(interval)
     }, [state.isRunning])

    return (
        <TimerContext.Provider value={{ state, dispatch }}>
            {children}
        </TimerContext.Provider>
    )
}


export function useTimer() {
    return useContext(TimerContext)
}