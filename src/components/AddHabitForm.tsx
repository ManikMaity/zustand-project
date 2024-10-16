import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useHabitStore from "../store/store";

function AddHabitForm() {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

 const {habits, addHabit} =  useHabitStore();

 console.log(habits);

 function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (name.trim()){
        addHabit(name, frequency);
    }

    setName("");
    setFrequency("daily");
 }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <TextField
          id="habit-name"
          label="Habit Name"
          variant="outlined"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
          <Select
            id="frequency"
            value={frequency}
            label="Frequency"
            onChange={(e) =>
              setFrequency(e.target.value as "weekly" | "daily" | "monthly")
            }
          >
            <MenuItem value={"daily"}>Daily</MenuItem>
            <MenuItem value={"weekly"}>Weekly</MenuItem>
            <MenuItem value={"monthly"}>Monthly</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </Box>
    </form>
  );
}

export default AddHabitForm;
