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
// Detailed Booking Form Logic
document.getElementById("detailed-booking-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const destination = document.getElementById("destination").value;
    const travelers = parseInt(document.getElementById("travelers").value);
    const transportation = document.getElementById("transportation").value;
    const accommodation = document.getElementById("accommodation").value;
  
    // Pricing logic
    let baseCost = 0;
    if (destination === "Hampi") baseCost = 3000;
    else if (destination === "Mysuru") baseCost = 2500;
    else if (destination === "Coorg") baseCost = 4000;
    else if (destination === "Gokarna") baseCost = 3500;
  
    let transportCost = transportation === "Flight" ? 5000 : transportation === "Train" ? 1000 : 2000;
    let accommodationCost =
      accommodation === "Luxury" ? 5000 : accommodation === "Mid-Range" ? 3000 : 1000;
  
    const totalCost = (baseCost + transportCost + accommodationCost) * travelers;
  
    // Display the estimated price
    document.getElementById("price-estimate").innerText = `Estimated Total Cost: ₹${totalCost}`;
  });
    