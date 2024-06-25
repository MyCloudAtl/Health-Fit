import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

function MyVerticallyCenteredModal({show, onHide, newGym}) {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Daily Log
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {newGym ? (
            <>
              <h3>Gym</h3>
              <h5>Cardio</h5>
              <p>Activity: {newGym.cardioActivity}</p>
              <p>Heart Rate: {newGym.cardioHeartRate}</p>
              <p>Time Spent: {newGym.cardioTimeSpent}</p>
              <h5>Stretches</h5>
              <p>Activity: {newGym.stretchActivity}</p>
              <p>Flexibility Rate: {newGym.stretchFlexibilityRate}</p>
              <p>Time Spent: {newGym.stretchTimeSpent}</p>
              <h5>Weights</h5>
              <p>Activity: {newGym.weightsActivity}</p>
              <p>Reps: {newGym.weightsReps}</p>
              <p>Sets: {newGym.weightsSets}</p>
              <p>Time Spent: {newGym.weightsTimeSpent}</p>
            </>
          ) : (
            <p>No gym data available.</p>
          )}
          {/* {newNutrition ? (
            <>
              <h3>Nutrition</h3>
              <h5>Drink</h5>
              <p>{newNutrition.drink}</p>
              <p>{newNutrition.drinkOunces}</p>
              <p>{newNutrition.drinkTime}</p>
              <p>{newNutrition.drinkCalories}</p>
              <h5>Meal</h5>
              <p>{newNutrition.meal}</p>
              <p>{newNutrition.mealOunces}</p>
              <p>{newNutrition.mealTime}</p>
              <p>{newNutrition.mealCalories}</p>
              <h5>Snack</h5>
              <p>{newNutrition.snack}</p>
              <p>{newNutrition.snackOunces}</p>
              <p>{newNutrition.snackTime}</p>
              <p> {newGym.weightsTimeSpent}</p>
            </>
          ) : (
            <p>No nutrition data available.</p>
          )} */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

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

const Calendar = ({ events, gym  }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <h1>My Calendar</h1>
            <h2>Banana</h2>
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }} 
                dayLayoutAlgorithm="no-overlap"
            />
                 <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        See Data
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        // newGym={gym[gym.length-1]}
        />
    </>
        </div>
    )
}

export default Calendar

