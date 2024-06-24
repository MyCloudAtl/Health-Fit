import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
    'en-US': enUS
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const Calendar = ({ events }) => {

    const handleSelectEvent = (event) => {
        alert(`Selected event: ${event.title}`);
    }; 
    
    return (
        <div>
            <h1>My Calendar</h1>
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{height: '80vh', width: '70vw'}}
                dayLayoutAlgorithm="no-overlap"
                onSelectEvent={handleSelectEvent}
            />
        </div>
    )
}

export default Calendar

