import {
  IonModal,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonDatetime,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import { set } from "date-fns";
import { useEffect, useState } from "react";

const EditCardModal = ({
  isOpen,
  setIsOpen,
  setWorkOutList,
  data,
  setEditOption,
  
}) => {
  const [forgot, setForgot] = useState(false);
  const [workoutName, setWorkoutName] = useState(data.title);
  const [currentSet, setCurrentSet] = useState(data.current_working_set);
  const [maxSet, setMaxSet] = useState(data.max_reps);
  const [weight, setWeight] = useState(data.weight);
  
  const [date, setDate] = useState(data.last_updated ? data.last_updated : '');

  useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate.toLocaleString("en-US"));
  }, []);

  const editWorkout = (id) => {
    const newWorkout = {
      id: id,
      title: workoutName,
      max_reps: maxSet,
      current_working_set: currentSet,
      last_updated: date,
      weight: weight,
      history: [
        {
          id: id,
          max_reps: maxSet,
          current_working_set: currentSet,
          weight: weight,
          last_updated_history: date,
        },
      ],
    };

    setWorkOutList((prevState) =>
      prevState.map((workout) => {
        console.log(workout.id)
        if (workout.id === id) {
          newWorkout.history.push(...workout.history);
          return newWorkout;

        } else {
          return workout;
        }

      })
    );
    setIsOpen(false);
    setEditOption(false);
    console.log(newWorkout);
  };

  const setEditOptions = (editOption) => {
    setEditOption(editOption);
    setIsOpen(editOption);
  
  }

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => setEditOptions(false)}>Cancel</IonButton>
          </IonButtons>
          <IonTitle className="text-center">Edit a Workout</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => editWorkout(data.id)}>Confirm</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Edit workout name</IonLabel>
          <IonInput
            type="text"
            placeholder={data.title}
            value={workoutName}
            onIonChange={(e) => setWorkoutName(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Edit Current Working Set</IonLabel>
          <IonInput
            type="text"
            placeholder={data.current_working_set}
            value={currentSet}
            onIonChange={(e) => setCurrentSet(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Edit Max Reps</IonLabel>
          <IonInput
            type="text"
            placeholder={data.max_reps}
            value={maxSet}
            onIonChange={(e) => setMaxSet(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Edit Weight</IonLabel>
          <IonInput
            type="text"
            placeholder={data.weight}
            value={weight}
            onIonChange={(e) => setWeight(e.target.value)}
          />
        </IonItem>
        {/* <IonItem>
          <IonButton onClick={() => setForgot(!false)}>
            Forgot to record?
          </IonButton>
        </IonItem>
        {forgot ? (
          <IonItem>
            <span slot="title">Select a Previous Date if Needed</span>
            <IonDatetime
              presentation="date"
              value={date}
              onIonChange={(e) => setDate(e.target.value)}
            ></IonDatetime>
          </IonItem>
        ) : (
          ""
        )} */}
      </IonContent>
    </IonModal>
  );
};
export default EditCardModal;
