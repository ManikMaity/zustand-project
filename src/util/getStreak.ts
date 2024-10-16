import { Habit } from "../store/store";

function getStreak(habit : Habit) {

    let streak = 0;
    const currentDate = new Date();

    while (true){
      const date = currentDate.toLocaleDateString();
      if (habit.completedDated.includes(date)){
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      }
      else {
        break;
      }
    }

    return streak;
  
}

export default getStreak
