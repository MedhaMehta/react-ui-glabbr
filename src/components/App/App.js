import React from 'react';
import styles from './App.css';
import {Button} from "../Button/Button";
import {DisabledButton} from "../Button/showcase/DisabledButton";
import {SuccessButton} from "../Button/showcase/SuccessButton";
import {InfoButton} from "../Button/showcase/InfoButton";
import ShowcaseSection from "../common/ShowcaseSection";
import {ShowcaseItem} from "../common/ShowcaseItem";

function App() {
    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                This is Header
            </header>
            <ShowcaseSection title="State">
                <ShowcaseItem title="Default">
                    <Button/>
                </ShowcaseItem>
                <ShowcaseItem title="Disabled">
                    <DisabledButton/>
                </ShowcaseItem>
            </ShowcaseSection>
            <ShowcaseSection title="Status">
                <ShowcaseItem title="Primary">
                    <Button/>
                </ShowcaseItem>
                <ShowcaseItem title="Success">
                    <SuccessButton/>
                </ShowcaseItem>
                <ShowcaseItem title="Info">
                    <InfoButton/>
                </ShowcaseItem>
            </ShowcaseSection>
        </div>
    );
}

export default App;
