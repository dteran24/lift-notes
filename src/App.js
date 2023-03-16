import "./App.css";
import { Route } from "react-router-dom";
import { square, triangle, personCircle, barbell } from "ionicons/icons";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Workout from "./pages/Workout";

setupIonicReact();
function App() {
  return (
    <IonApp>
      <Home/>
      {/* <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/workout">
              <Workout />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="profile" href="/profile">
              <IonLabel>Profile</IonLabel>
              <IonIcon icon={personCircle} />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/workout">
              <IonIcon icon={barbell} />
              <IonLabel>Workout</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={triangle} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter> */}
    </IonApp>
  );
}

export default App;
