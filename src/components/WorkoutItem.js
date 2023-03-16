import React,{useState} from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
} from "@ionic/react";
import { archive, create, trash } from "ionicons/icons";

const workoutItem = ({ data }) => {

  

  return (
    <div className="ion-padding" slot="content">
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="success">
            <IonIcon slot="start" icon={archive}></IonIcon>
            Archive
          </IonItemOption>
        </IonItemOptions>

        <IonItem>
            <IonLabel className="ion-text-wrap"> 
                      <h1>{data.title}</h1>
                      <h2>Max Reps:{data.max_reps}</h2>
                      <h2>Current Set:{data.current_working_set}</h2>
                     
         </IonLabel>
       
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption>
            <IonIcon slot="start" icon={create}></IonIcon>
            Edit
          </IonItemOption>
          <IonItemOption color="danger" onClick={''}>
            <IonIcon slot="start" icon={trash}></IonIcon>
            Delete
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </div>
  );
};
export default workoutItem;
