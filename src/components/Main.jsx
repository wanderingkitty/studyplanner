import { useStore } from '../data/store.js'
import Day from "./day/Day"
import PrioList from "./prio-list/PrioList.jsx"
import { splitTodosIntoDays } from '../utils/list.js'

const Main = () => {
    const todos = useStore(state => state.todos)
    const days = splitTodosIntoDays(todos)
    const weekdays = {
        mo: 'Måndag',
        ti: 'Tisdag',
        on: 'Onsdag',
        to: 'Torsdag',
        fr: 'Fredag',
        lö: 'Lördag',
        sö: 'Söndag'
    }

    return (
        <main>
            <div className="day-view">
                {Object.keys(days).map(dayCode => (
                    <Day 
                        key={dayCode}
                        day={days[dayCode]} 
                        dayName={weekdays[dayCode]} 
                    />
                ))}
            </div>

            <hr />

            <PrioList />

        </main>
    )
}

export default Main
