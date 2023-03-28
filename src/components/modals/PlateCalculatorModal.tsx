import {
    IonButton,
    IonButtons,
    IonModal,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonItem,
    IonLabel,
} from "@ionic/react";
interface PlateCalculatorModalProps{
  setIsOpen: any ;
  isOpen: any;
}

const PlateCalculatorModal = ({setIsOpen, isOpen}: PlateCalculatorModalProps) => {
    return (
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Edit Profile</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
               <IonButton>Save</IonButton>
          </IonContent>
        </IonModal>
    );
}

export default PlateCalculatorModal;