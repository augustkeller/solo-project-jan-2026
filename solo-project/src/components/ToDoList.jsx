import { useState } from "react";


export default function ToDoList() {
    const [isChecked, setIsChecked] = useState(false);

    function HandleChange(event) {
        const checked = event.target.checked;
        setIsChecked(checked);
    }

    return (
        <div className="category-selector">
            <input type="checkbox" value="Fart" onChange={HandleChange} /> Fart {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Butt" onChange={HandleChange} /> Butt {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Sing" onChange={HandleChange} /> Sing {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Fart Again" onChange={HandleChange} /> Fart Again {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Watch Moobie" onChange={HandleChange} /> Watch Moobie {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Cody" onChange={HandleChange} /> Cody {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Practice" onChange={HandleChange} /> Practice {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Gym" onChange={HandleChange} /> Gym {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="MTG" onChange={HandleChange} /> MTG {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Relax" onChange={HandleChange} /> Relax {isChecked && <span>Time</span>} <br />
            <input type="checkbox" value="Pet Cats" onChange={HandleChange} /> Pet Cats {isChecked && <span>Time</span>} <br />
        </div>
    );
}
