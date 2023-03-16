import {
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import { chevronUpCircle, create, trash, add } from "ionicons/icons";
import HomeCard from "../components/HomeCard";
import AddWorkoutModal from "../components/modals/AddWorkoutModal";


const Home = () => {
 
  const [workoutList, setWorkOutList] = useState([]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
 
  const [deleteOption, setDeleteOption] = useState(false);
  const [editOption, setEditOption] = useState(false);

  const setDeleteOptions = () => {
    setDeleteOption(true);
    setEditOption(false);
  };
  const setEditOptions = () => {
    setDeleteOption(false);
    setEditOption(true);
  };

  const addModalOpen = () => {
    setAddModalIsOpen(true);
    setDeleteOption(false);
    setEditOption(false);
  }
  return (
    <IonPage>
      <IonContent>
        {workoutList.length > 0 ?    <div className="">
          {workoutList.map((cardData) => {
            return (
              <HomeCard
                data={cardData}
                deleteOption={deleteOption}
                setDeleteOption={setDeleteOption}
                setWorkOutList={setWorkOutList}
                editOption={editOption}
                setEditOption={setEditOption}
                workoutList={workoutList}
              />
            );
          })}
        </div> : "There is not content atm" }
     
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton onClick={() => setDeleteOptions()}>
              <IonIcon icon={trash}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => setEditOptions()}>
              <IonIcon icon={create}></IonIcon>
            </IonFabButton>
            <IonFabButton onClick={() => addModalOpen(true)}>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
        <AddWorkoutModal
          setAddModalIsOpen={setAddModalIsOpen}
          addModalIsOpen={addModalIsOpen}
          setWorkOutList={setWorkOutList}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
