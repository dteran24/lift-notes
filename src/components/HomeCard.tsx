import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonList,
  IonLabel,
} from "@ionic/react";
import type { Workout } from "../interfaces/user";
import { useState } from "react";
import EditCardModal from "./modals/EditCardModal";
import ViewHistoryModal from "./modals/ViewHistoryModal";

interface HomeCardProps{
  data: Workout;
  deleteOption: any;
  setDeleteOption: any;
  setWorkOutList: any;
  workoutList: any;
  editOption: any;
  setEditOption: any;
  
}

const HomeCard = ({
  data,
  deleteOption,
  setDeleteOption,
  setWorkOutList,
  editOption,
  setEditOption,
}: HomeCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [historyModalIsOpen, setHistoryModalIsOpen] = useState(false);
  const deleteCard = (id: number) => {
    setWorkOutList((prevState : Workout[]) =>
      prevState.filter((card) => {
        return card.id !== id;
      })
    );
  };
console.log(data.last_updated)
  return (
    <IonCard>
      {!data.last_updated ? (
        <IonCardHeader color={"dark"}>
          <div className="d-flex justify-content-between">
            <IonCardTitle>{data.title.toUpperCase()}</IonCardTitle>
          </div>
        </IonCardHeader>
      ) : (
        <IonCardHeader color={"dark"}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <IonCardTitle>{data.title}</IonCardTitle>
            <IonButton color={"medium"} size="small" onClick={()=> setHistoryModalIsOpen(true)}>View history</IonButton>
          </div>
          <IonCardSubtitle>
            {`Last Updated: ${data.last_updated}`}
          </IonCardSubtitle>
        </IonCardHeader>
      )}

      <IonCardContent className="p-0">
        <IonList inset = {true} lines="inset">
          {data.current_working_set ? (
            <IonItem>
              <IonLabel className="m-0"><h1>Current Set:</h1></IonLabel>
              <IonLabel className="d-flex align-items-center m-0 h-100 fs-3 justify-content-center">{data.current_working_set}</IonLabel>
            </IonItem>
          ) : (
            ""
          )}
          <IonItem>
            <IonLabel className="m-0"><h1>Weight:</h1></IonLabel>
            <IonLabel className="d-flex align-items-center m-0 h-100 fs-3 justify-content-center">{`${data.weight}lbs`}</IonLabel>
          </IonItem>

          {data.max_reps ? (
            <IonItem>
              <IonLabel className="m-0"><h1>Max Set:</h1></IonLabel>
              <IonLabel className="d-flex align-items-center m-0 h-100 fs-3 justify-content-center">{`${data.max_reps}lbs`}</IonLabel>
            </IonItem>
          ) : (
            ""
          )}
          
        </IonList>

        {deleteOption ? (
          <IonButtons className="d-flex justify-content-end mx-2 mb-2">
            <IonButton onClick={() => setDeleteOption(false)}>Cancel</IonButton>
            <IonButton color="danger" onClick={() => deleteCard(data.id)}>
              Delete
            </IonButton>
          </IonButtons>
        ) : !deleteOption && editOption ? (
          <IonButtons className="d-flex justify-content-end mx-2 mb-2">
            <IonButton onClick={() => setEditOption(false)}>Cancel</IonButton>
            <IonButton color="danger" onClick={() => setIsOpen(true)}>
              Edit
            </IonButton>
          </IonButtons>
        ) : (
          ""
        )}
      </IonCardContent>
      <EditCardModal
        setEditOption={setEditOption}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={data}
        setWorkOutList={setWorkOutList}
      />
      <ViewHistoryModal historyModalIsOpen={historyModalIsOpen} setHistoryModalIsOpen={setHistoryModalIsOpen} data={data} />
    </IonCard>
  );
};

export default HomeCard;
