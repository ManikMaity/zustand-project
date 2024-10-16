/* eslint-disable @typescript-eslint/no-unused-expressions */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly" | "monthly";
    completedDated : string[];
    createdAt: string;
}

interface HabitStore {
    habits: Habit[];
    addHabit : (name : string, frequency : "daily" | "weekly" | "monthly")=>void;
    removeHabit : (id : string)=>void;
    toggleHabit : (id : string, date : string)=>void;
}

const useHabitStore = create<HabitStore>()(persist((set) => {
    return {
        habits: [],
        addHabit : (name, frequency) => set((state) => {
            return {
                habits: [
                   ...state.habits,
                   {
                    name,
                    frequency,
                    completedDated: [],
                    createdAt: new Date().toLocaleString(),
                    id: new Date().toISOString(),
                   }
                ]
            }
        }),
        removeHabit : (id) => set((state) => {
            return {
                habits: state.habits.filter(habit => habit.id !== id)
            }
        }),
        toogleHabit : (id, date) => set((state) => {
            return {
                habits : state.habits.map(habit => 
                    habit.id == id 
                    ? {
                        ...habit,
                        completedDated : habit.completedDated.includes(date)
                        ? habit.completedDated.filter(d => d !== date)
                        : [...habit.completedDated, date]
                    }
                    : habit
                )
            }
        })
    }
}, {
    name : "habit-local",
    storage: createJSONStorage(() => localStorage)
}));

export default useHabitStore;