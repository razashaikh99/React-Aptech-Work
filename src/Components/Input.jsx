import { useState } from "react";

export default function Input() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    console.log(text);

    return (
        <div className="input-container">
            <div className="input-card">
                <input
                    type="text"
                    placeholder="Type Anything..."
                    onChange={handleChange}
                    value={text}
                    className="input-field"
                />
                <p className="output-text">You Typed: {text}</p>
            </div>
        </div>
    );
}
