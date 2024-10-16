
import { Box, Container, Typography } from '@mui/material'
import './App.css'
import useHabitStore from './store/store'
import AddHabitForm from './components/AddHabitForm'
import HabitList from './components/HabitList'
import HabitStat from './components/HabitStat'


function App() {

  // const store = useHabitStore();



  return (<>

    <Container>
      <Box>
        <Typography variant="h2" component="h2" gutterBottom align='center'>Habit Tracker</Typography>

        {/* Form */}
        <AddHabitForm/>

        {/* List */}
        <HabitList/>
        {/* Stats */}
        <HabitStat/>
      </Box>
    </Container>

  </>)
}

export default App
