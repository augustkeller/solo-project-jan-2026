import { useState } from "react";


export default function ToDoList() {
        const items = [
        "Fart",
        "Butt",
        "Sing",
        "Fart Again",
        "Watch Moobie",
        "Cody",
        "Practice",
        "Gym",
        "MTG",
        "Relax",
        "Pet Cats",
    ];

    const [checkedItems, setCheckedItems] = useState({});

    function handleChange(event) {
        const { value, checked } = event.target;

        setCheckedItems(prev => ({
            ...prev,
            [value]: checked,
        }));
    }

    return (
        <div className="category-selector">
            {items.map(item => (
                <label key={item} style={{ display: "block" }}>
                    <input
                        type="checkbox"
                        value={item}
                        checked={!!checkedItems[item]}
                        onChange={handleChange}
                    />
                    {" "}
                    <span style={{color: checkedItems[item] ? "green" : "red"}}> {item}</span>
                    {checkedItems[item] && <span style={{color: checkedItems[item] ? "green" : "red"}}> COMPLETE!</span>}
                </label>
            ))}
        </div>
    );
}
