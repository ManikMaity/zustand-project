import React from "react";
import useHabitStore, { Habit } from "../store/store";
import { Box, Button, Grid, Grid2, LinearProgress, Paper, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from '@mui/icons-material/Delete';
import getStreak from "../util/getStreak";

function HabitList() {
  const { habits, removeHabit, toogleHabit } = useHabitStore();
  const todaysDate = new Date().toLocaleDateString();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
        padding: "2px",
      }}
    >
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ padding: "10px" }}>
            <Grid container alignItems={"center"}>
              <Grid xs={12} sm={6}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {habit.frequency}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                  }}
                >
                  <Button
                  onClick={() => toogleHabit(habit.id, todaysDate)}
                    variant="contained"
                    color={
                      habit.completedDated.includes(todaysDate)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircleIcon />}
                  >
                    {habit.completedDated.includes(todaysDate)
                      ? "Completed"
                      : "Mark Complete"}
                  </Button>
                  <Button onClick={() => removeHabit(habit.id)} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ marginTop: "10px" }}>
                  <Typography variant="body2" color="text.secondary">Current Stake : {getStreak(habit)}</Typography>
                  <LinearProgress value={(getStreak(habit)/30)*100} variant="determinate" />
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
}

export default HabitList;
