import { IonContent, IonPage, IonButtons, IonToolbar,IonBackButton, IonTitle, IonSearchbar } from "@ionic/react";
import WorkoutInfo from "../components/WorkoutInfo";
import WorkoutList from "../components/WorkoutList";

const Workout = () => {
  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
          <IonTitle>Back</IonTitle>
        </IonButtons>

        <IonToolbar>
            <IonSearchbar animated={true} placeholder="Find Workout" showClearButton="focus" ></IonSearchbar>
        </IonToolbar>
      </IonToolbar>
      <IonContent><WorkoutList />
      <WorkoutInfo/></IonContent>
    </IonPage>
  );
};

export default Workout;
