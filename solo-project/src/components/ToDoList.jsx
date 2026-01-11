import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    const navigate = useNavigate();

    function handleChange(event) {
        const { value, checked } = event.target;

        setCheckedItems(prev => ({
            ...prev,
            [value]: checked,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const selectedItems = Object.keys(checkedItems).filter(
            item => checkedItems[item]
        );

        navigate("/results", {
            state: { completed: selectedItems }
        });

        console.log("Submitted items:", selectedItems);
    }

    return (
        <form className="category-selector" onSubmit={handleSubmit}>
            <h1>My To-Do List</h1>

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

            <button
                type="submit"
                style={{
                    marginTop: "12px",
                    padding: "6px 12px",
                    cursor: "pointer",
                }}
            >
                Submit
            </button>

        </form>
    );
}
