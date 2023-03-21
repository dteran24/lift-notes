export type Workout = {
    id: number,
    title: string,
    max_reps: string,
    current_working_set: string,
    weight: number,
    last_updated: string,
    history: [
      {
        max_reps: string,
        current_working_set: string,
        weight: number,
        last_updated_history: string,
      },
    ],
};
  
  