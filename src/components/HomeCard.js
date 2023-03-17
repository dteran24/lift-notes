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
import { useState } from "react";
import EditCardModal from "./modals/EditCardModal";
import ViewHistoryModal from "./modals/ViewHistoryModal";

const HomeCard = ({
  data,
  deleteOption,
  setDeleteOption,
  setWorkOutList,
  editOption,
  setEditOption,
  setHistoryList,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [historyModalIsOpen, setHistoryModalIsOpen] = useState(false);
  const deleteCard = (id) => {
    setWorkOutList((prevState) =>
      prevState.filter((card) => {
        return card.id !== id;
      })
    );
  };
   console.log(data.last_updated)
  return (
    <IonCard>
      {!data.last_updated ? (
        <IonCardHeader>
          <div className="d-flex justify-content-between">
            <IonCardTitle>{data.title}</IonCardTitle>
          </div>
        </IonCardHeader>
      ) : (
        <IonCardHeader>
          <div className="d-flex justify-content-between">
            <IonCardTitle>{data.title}</IonCardTitle>
            <IonButton size="small" onClick={()=> setHistoryModalIsOpen(true)}>View history</IonButton>
          </div>
          <IonCardSubtitle>
            {`Last Updated: ${data.last_updated}`}
          </IonCardSubtitle>
        </IonCardHeader>
      )}

      <IonCardContent>
        <IonList>
          {data.current_working_set ? (
            <IonItem>
              <IonLabel>{`Current Set: ${data.current_working_set}`}</IonLabel>
            </IonItem>
          ) : (
            ""
          )}
          {data.max_reps ? (
            <IonItem>
              <IonLabel>{`Max Reps: ${data.max_reps}lb`}</IonLabel>
            </IonItem>
          ) : (
            ""
          )}
          <IonItem>
            <IonLabel>{`Weight: ${data.weight}lb` }</IonLabel>
          </IonItem>
        </IonList>

        {deleteOption ? (
          <IonButtons className="d-flex justify-content-end mt-3">
            <IonButton onClick={() => setDeleteOption(false)}>Cancel</IonButton>
            <IonButton color="danger" onClick={() => deleteCard(data.id)}>
              Delete
            </IonButton>
          </IonButtons>
        ) : !deleteOption && editOption ? (
          <IonButtons className="d-flex justify-content-end">
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
        setHistoryList={setHistoryList}
      />
      <ViewHistoryModal historyModalIsOpen={historyModalIsOpen} setHistoryModalIsOpen={setHistoryModalIsOpen} data={data} />
    </IonCard>
  );
};

export default HomeCard;
