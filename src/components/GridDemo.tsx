import React from 'react';
import { IonApp, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';
import './GridDemo.css';

const GridDemo: React.FC = () => {
return (
    <IonApp>
        <IonContent>
            <IonGrid fixed>
                <IonRow>
                    <IonCol size='10'>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonApp>
);
};

export default GridDemo;