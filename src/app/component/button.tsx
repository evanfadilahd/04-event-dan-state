export function Button_2({messagecontents, buttonName}:{messagecontents:any, buttonName:any}) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(messagecontents)}>
            {buttonName}
        </button>
    );
}

export function Button_3({messagecontents, buttonName}:{messagecontents:any, buttonName:any}) {
    return (
        <button
            className="bg-green-400 hover:bg-green-700 text-white p-2 rounded m-2"
            onClick={(e) => {
                e.stopPropagation();
                alert(messagecontents)
                }
            }>
            {buttonName}
        </button>
    );
}

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
            This is Button
        </button>
    );
}