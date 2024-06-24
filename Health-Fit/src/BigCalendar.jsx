import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, {useState} from 'react'
import DatePicker from 'react-datepicker'

const locales = {
    'en-US': enUS,
  }
  
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

const events = [{
    title: "Blob",
    allday:true,
    start: new Date(2024,6,1),
    end: new Date(2024,6,6)
}]

function BigCalendar () {
    return (
        <div className='Calendar'>
            <Calendar 
            localizer={localizer} 
            events={events}
            startAccessor='start'
            endAccessor='end' 
            style={{height:500, margin:'50px'}}/>
        </div>
    )
} 
export default BigCalendar