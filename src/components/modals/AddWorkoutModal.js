import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonNote
} from "@ionic/react";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
const AddWorkoutModal = ({ setAddModalIsOpen, addModalIsOpen, setWorkOutList }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [maxSet, setMaxSet] = useState("");
  const [currentSet, setCurrentSet] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [isValidName, setIsValidName] = useState();
  const [isValidWeight, setIsValidWeight] = useState();

  const [date, setDate] = useState();

  const validateWeight = (weight) => {
    return weight.match(/^-?\d+$/)
  }
  const validateName = (name) => {
    return name.match()
  }
  const addWorkout = () => {
    

    if (workoutName === '' && currentWeight === '') {
      setIsValidName(false);
      setIsValidWeight(false);
      
    } else if(validateWeight(currentWeight) !== true){
      setIsValidWeight(false);
    } else if (validateName(workoutName) !== true) {
      setIsValidName(false);
    }
      else {
      const jsonInput = {
        id: uniqid(),
        title: workoutName,
        max_reps: maxSet,
        current_working_set: currentSet,
        weight: currentWeight,
        last_updated: '',
        history: [
          {
            max_reps: maxSet,
            current_working_set: currentSet,
            weight: currentWeight,
            last_updated_history: date,
          },
        ],
      };
      setWorkOutList((prevState) => [...prevState, jsonInput]);
      setAddModalIsOpen(false);
      setWorkoutName("");
      setMaxSet("");
      setCurrentSet("");
      setCurrentWeight("");
      setIsValidName(true);
      setIsValidWeight(true);

      }  
  };

  const cancelModal = () => {
      setAddModalIsOpen(false);
      setWorkoutName("");
      setMaxSet("");
      setCurrentSet("");
      setCurrentWeight("");
      setIsValidName(true);
      isValidWeight(true);
    
  }
  useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate.toLocaleString("en-US"));
  }, []);
 
  return (
    <IonModal isOpen={addModalIsOpen}>
      <IonHeader>
        <IonToolbar className="d-flex justify-content-around">
          <IonButtons slot="start">
            <IonButton onClick={() => cancelModal()}>Cancel</IonButton>
          </IonButtons>
          <IonTitle className="text-center">Add A Workout</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => addWorkout()}>Confirm</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem className={`${isValidName && 'ion-valid'} ${isValidName === false && 'ion-invalid'}`}>
          <IonLabel position="floating">Enter workout name</IonLabel>
          <IonInput
            type="text"
            value={workoutName}
            placeholder="Bench press"
            onIonChange={(e) => setWorkoutName(e.target.value)}
          />
            <IonNote slot="error">Workout name is required</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Enter Current Sets</IonLabel>
          <IonInput
            type="text"
            value={currentSet}
            placeholder="10 x 10"
            onIonChange={(e) => setCurrentSet(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Enter Max Set</IonLabel>
          <IonInput
            type="text"
            value={maxSet}
            placeholder="10 x 10"
            onIonChange={(e) => setMaxSet(e.target.value)}
          />
        </IonItem>
        <IonItem className={`${isValidWeight && 'ion-valid'} ${isValidWeight === false && 'ion-invalid'}`}>
          <IonLabel position="floating">Enter Weight</IonLabel>
          <IonInput
            type="text"
            value={currentWeight}
            placeholder="145"
            onIonChange={(e) => setCurrentWeight(e.target.value)}
          />
          <IonNote slot="error">Weight is required</IonNote>
        </IonItem>
      </IonContent>
    </IonModal>
  );
};
export default AddWorkoutModal;
