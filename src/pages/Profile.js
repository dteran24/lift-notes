import React, { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonItem,
  IonLabel,
  IonInput
} from "@ionic/react";
import { OverlayEventDetail } from '@ionic/core/components';
import ProfileStats from "../components/ProfileStats";
import ProfileStatsModal from '../components/modals/ProfileStatsModal';
const Profile = () => {
  const mockData = {
    name: "Daniel Teran",
    email: "test@yahoo.com",
    age: "24",
    height: "5,2",
    weight: "130",
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Back</IonTitle>
      </IonToolbar>

      <IonContent>
        <div className="d-flex justify-content-center">
          <div>
            <ProfileStats userData={mockData} setIsOpen={setIsOpen} />
          </div>
        </div>
        <ProfileStatsModal setIsOpen={setIsOpen} isOpen={isOpen} />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
