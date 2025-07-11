// Function to validate the form
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name
    if (name === "") {
        alert("Name is required.");
        return false;
    }

    // Validate mobile number (e.g., numeric and 10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Validate message
    if (message === "") {
        alert("Message cannot be empty.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}


