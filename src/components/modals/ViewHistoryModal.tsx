import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from "@ionic/react";
import type { Workout } from "../../interfaces/user";

interface HistoryModalProps{
  setHistoryModalIsOpen: any;
  historyModalIsOpen: any;
  data: Workout;
}

const ViewHistoryModal = ({
  setHistoryModalIsOpen,
  historyModalIsOpen,
  data,
}: HistoryModalProps) => {

  
  console.log(data.history);
  return (
    <IonModal isOpen={historyModalIsOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setHistoryModalIsOpen(false)}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.history.length > 0
          ? data.history.map((history, index) => {
              return (
                <IonList key={index}>
                  <IonListHeader>{history.last_updated_history}</IonListHeader>
                  <IonItem>
                    <IonLabel position="stacked"><h1>Max:</h1></IonLabel>
                    <IonLabel>{history.max_reps ? history.max_reps : "None was set"}</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="stacked"><h1>Current:</h1></IonLabel>
                    <IonLabel>{history.current_working_set ? history.current_working_set : "None was set"}</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="stacked"><h1>Weight:</h1></IonLabel>
                    <IonLabel>{`${history.weight}lb`}</IonLabel>
                  </IonItem>
                </IonList>
              );
            })
          : ""}
      </IonContent>
    </IonModal>
  );
};
export default ViewHistoryModal;
