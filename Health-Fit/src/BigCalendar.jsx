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
import { Link } from 'react-router-dom'
import BMI from './components/BMI'

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

const Calendar = ({ events, onEventClick }) => {

    return (
        <div>
            <header>
        <nav className='header'>
          <Link to="/nutrition">
            <button>Nutrition</button>
          </Link>
          <Link to="/gym">
            <button>Gym</button>
          </Link>
          <Link to="/BMI">
            <button>BMI</button>
          </Link>
          {/* <div className="BMI">
            <BMI />
          </div> */}
          <div className="Logout">
            <Logout />
          </div>
        </nav>
      </header>
            <h1>My Calendar</h1>
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
            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
    )
} 

export default Calendar

