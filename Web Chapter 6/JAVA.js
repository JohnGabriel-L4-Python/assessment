document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get values from the user input
    var costPerLiter = parseFloat(document.getElementById('cost-per-liter').value);
    var litersPurchased = parseFloat(document.getElementById('liters-purchased').value);

    // Calculate total cost
    var totalCost = costPerLiter * litersPurchased;

    // Show total cost
    document.getElementById('result').textContent = totalCost.toFixed(2);
});
