const Features = () => {
    return (
        <ul className='features-list'>
            <li>
                <img src={require('./images/icon-todo.svg').default} alt='todo-icon'/>
                Todo List
            </li>
            <li>
                <img src={require('./images/icon-calendar.svg').default} alt='calendar-icon'/>
                Calendar
            </li>
            <li>
                <img src={require('./images/icon-reminders.svg').default} alt='reminder-icon'/>
                Reminders
            </li>
            <li>
                <img src={require('./images/icon-planning.svg').default} alt='planning-icon'/>
                Planning
            </li>
        </ul>
    )
}

export default Features
