// Handle booking form submission
document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const destination = document.getElementById("destination").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
  
    if (!destination || !checkIn || !checkOut) {
      alert("Please fill in all fields!");
      return;
    }
  
    alert(`Your trip to ${destination} is booked from ${checkIn} to ${checkOut}!`);
  });
  