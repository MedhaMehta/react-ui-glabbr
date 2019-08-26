import React from 'react';
import styles from './App.css';
import {Button} from "../Button/Button";
import {DisabledButton} from "../Button/DisabledButton/DisabledButton";
import {SuccessButton} from "../Button/SuccessButton/SuccessButton";
import {InfoButton} from "../Button/InfoButton/InfoButton";

function App() {
    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                This is Header
            </header>
            <section>
                <h1>State</h1>
                <p>
                    Default
                    <Button/>
                </p>
                <p>
                    Disabled
                    <DisabledButton/>
                </p>
            </section>
            <section>
                <h1>Status</h1>
                <p>
                    Primary
                    <Button/>
                </p>
                <p>
                    Success
                    <SuccessButton/>
                </p>
                <p>
                    Info
                    <InfoButton/>
                </p>
            </section>
        </div>
    );
}

export default App;
