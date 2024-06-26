import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DeleteAccount from './components/DeleteAccount'
import Logout from './components/Logout'

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

//   const handleLogout = (e) => {
//     e.preventDefault();
//     navigate('/');
// };

const Calendar = ({ events, onEventClick }) => {

    return (
        <div>
            <h1>My Calendar</h1>
            {/* <Logout /> */}
            <BigCalendar
            localizer={localizer} 
            events={events}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
                dayLayoutAlgorithm="no-overlap"
                onSelectEvent={onEventClick}
            />
            <DeleteAccount/>
            <Logout />
            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
    )
} 

export default Calendar

