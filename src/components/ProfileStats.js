import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

import { create } from "ionicons/icons";
const ProfileStats = ({ userData, setIsOpen }) => {
  return (
    <IonCard>
      <img alt="" src="" />
      <IonCardHeader>
        <IonCardTitle>My Profile</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList inset={false} lines="inset">
          {Object.keys(userData).map((key, i) => {
            return (
              <IonItem>
                <IonLabel>
                  <span className="">{`${
                    key.charAt(0).toUpperCase() + key.slice(1)
                  }:`}</span>{" "}
                  {userData[key]}
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
        <div className="w-100 d-flex justify-content-center">
          <IonButton fill="outline" onClick={() => setIsOpen(true)}>
            Edit<IonIcon slot="end" icon={create}></IonIcon>
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ProfileStats;
