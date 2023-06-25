function AddEntryForm() {
    const SubmitData = () => {
        console.log("Mhmm, Harder");
    }

    return (
        <>
            <div id="add-entry-container">
                <h1>Log Energy Use</h1>
                <p>Energy Usage:</p>
                <input></input>
                <p>Date:</p>
                <input type="date"></input>
                <br />
                <button onClick={SubmitData}>Submit</button>
            </div>
        </>
    )
}

export default AddEntryForm;