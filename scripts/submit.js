const handleSubmit = async (event) => {
    event.preventDefault(); 

    //get info from form
    console.log("run");
    const form = event.target;
    const text = {
        data: form.elements["text"].value
    };
    
    fetch(`/api/restaurants`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...text
        })
    }).then(() => {
        window.location.href = '/restaurants';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('send-msg');
    form.addEventListener('submit', handleSubmit);
});