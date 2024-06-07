document.addEventListener('DOMContentLoaded', function() {
    // Simulated market cap value for testing
    const simulatedMarketCap = 1000000; // Change this value to test different market caps

    const progressBar = document.querySelector('.progress-bar2');
    const mcdata = document.querySelector('.marketcap-data');

    // Define the maximum market cap for 100% width
    const maxMarketCap = 1000000; // Example maximum market cap

    function updateProgressBar(marketCap) {
        // Calculate the width as a percentage of the maximum market cap
        const progressPercentage = (marketCap / maxMarketCap) * 100;
        // Calculate the width in pixels (assuming the max width of the progress bar is 1235px)
        const progressBarWidth = (progressPercentage / 100) * 1300;

        // Set the width of the progress bar
        progressBar.style.width = `${progressBarWidth}px`;
        mcdata.textContent = "$" + simulatedMarketCap;
    }

    // Update the progress bar with the simulated market cap
    updateProgressBar(simulatedMarketCap);
});


