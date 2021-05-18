import {useSelector, useDispatch} from "react-redux";


export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    return (
        <div>
            <p>Counter: {counter}</p>
            <button name={'increment'} onClick={() => {
                dispatch({type: 'INC'})
            }
            }>INC
            </button>
            <button name={'increment_100'} onClick={() => {
                dispatch({type: 'INC_100'})
            }
            }>INC_100
            </button>

            <button name={'decrement'} onClick={() => {
                dispatch({type: 'DEC'})
            }
            }>DEC
            </button>
            <button name={'decrement_100'} onClick={() => {
                dispatch({type: 'DEC_100'})
            }
            }>DEC_100
            </button>
            <button name={'reset'} onClick={() => {
                dispatch({type: 'RESET'})
            }
            }>RESET
            </button>
        </div>
    )
}