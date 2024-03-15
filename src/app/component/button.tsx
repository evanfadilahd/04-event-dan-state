"use client";
export default function Button_1() {
    // adding function to handle click button
    function handleClick() {
        alert("The button is clicked");
    }

    function handleMouserOver() {
        alert("Eits, wanna click the button?");
    }
    return (
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            // onMouseOver={handleMouserOver}
            onMouseLeave={() => {
                    alert("Eh, already leaving!!!")
                }
            }
        >
            Ini tombol
        </button>
    );
}