import { useState } from "react";

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const storeOpen = () => {
        setIsOn(true);
    };

    const storeClose = () => {
        setIsOn(false);
    };

    return (
        <div className="toggle-container">
            <div className="toggle-card">
                <h1 className="status-heading">
                    {isOn ? <h3 className="store-status">Store Open</h3> : <h3 className="store-status">Store Closed</h3>}
                </h1>
                <div className="button-container">
                    <button className="open-button" onClick={storeOpen}>Open Store</button>
                    <button className="close-button" onClick={storeClose}>Close Store</button>
                </div>
            </div>
        </div>
    );
}
