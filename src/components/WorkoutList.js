import React from "react";
import WorkoutItem from "./WorkoutItem";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

const WorkoutList = () => {
    const chestWorkoustList = [{
        title: "Incline Dumbell", max_reps: "10 x 10", current_working_set: "12 x 12"
    }, {
        title: "Bench Press", max_reps: "10 x 10", current_working_set: "12 x 12"
    }, {
        title: "Chest Press", max_reps: "10 x 10", current_working_set: "12 x 12"
    }, {
        title: "Incline Chest Press", max_reps: "10 x 10", current_working_set: "12 x 12"
        }];
    const armWorkoustList = [{
            title: "Tricep Dips", max_set: "10 x 10", current_working_set: "12 x 12"
        }, {
            title: "Incline Dumbell Curls", max_set: "10 x 10", current_working_set: "12 x 12"
        }, {
            title: "Hammer Curls", max_set: "10 x 10", current_working_set: "12 x 12"
        }];
    
    const legWorkoutList = [{
            title: "Squats", max_set: "10 x 10", current_working_set: "12 x 12"
        }, {
            title: "Leg Press", max_set: "10 x 10", current_working_set: "12 x 12"
        }, {
            title: "Romanian Deadlifts", max_set: "10 x 10", current_working_set: "12 x 12"
        }, {
            title: "Bulgarian Split Squats", max_set: "10 x 10", current_working_set: "12 x 12"
        }];
    

  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Chest</IonLabel>
              </IonItem>
              {chestWorkoustList.map((workout, index) => {
                  return (
                      <WorkoutItem key={index} data={workout} />
                  )
              })}
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Arms</IonLabel>
        </IonItem>
        {armWorkoustList.map((workout, index) => {
                  return (
                    <WorkoutItem key={index} data={workout} />
                  )
              })}
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Legs</IonLabel>
        </IonItem>
        {legWorkoutList.map((workout, index) => {
                  return (
                    <WorkoutItem key={index} data={workout} />
                  )
              })}
      </IonAccordion>
    </IonAccordionGroup>
  );
};
export default WorkoutList;
