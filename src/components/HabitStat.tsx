import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import useHabitStore from "../store/store";
import getStreak from "../util/getStreak";

function HabitStat() {
  const { habits } = useHabitStore();

  function getTodaysCompletedHabits() {
    const todaysDate = new Date().toLocaleDateString();
    const todaysCompletedHabits = habits.filter((habit) =>
      habit.completedDated.includes(todaysDate)
    );
    return todaysCompletedHabits;
  }

  function getLongestStreak(){
    const allStreaks = habits.map(habit => getStreak(habit));
    const maxStreak = Math.max(...allStreaks);
    return maxStreak;
  }

  return (
    <Paper elevation={3} sx={{ padding: "10px", marginTop: "20px" }}>
      <Typography align="center" sx={{ fontWeight: "bold" }} variant="h5">
        Habit Stats
      </Typography>
      <Typography variant="h6">Total Habit : {habits.length}</Typography>
      <Typography variant="h6">
        Completed Today :{" "}
        {`${getTodaysCompletedHabits().length} / ${habits.length}`}
      </Typography>
      <Typography variant="h6">Longest Streak: {getLongestStreak()}</Typography>
    </Paper>
  );
}

export default HabitStat;
