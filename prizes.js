document.addEventListener('DOMContentLoaded', function() {
    // Simulated market cap value for testing
    const simulatedMarketCap = 456765; // Change this value to test different market caps

    const progressBar = document.querySelector('.progress-bar2');
    const mcdata = document.querySelector('.marketcap-data');
    const box2 = document.querySelector('.box2');

    // Define the maximum market cap for 100% width
    const maxMarketCap = 1000000; // Example maximum market cap

    function updateProgressBar(marketCap) {
        // Calculate the width as a percentage of the maximum market cap
        const progressPercentage = (marketCap / maxMarketCap) * 100;
        // Set the width of the progress bar as a percentage of the parent container
        progressBar.style.width = `${progressPercentage}%`;
        mcdata.textContent = "$" + simulatedMarketCap.toLocaleString();
    }

    // Update the progress bar with the simulated market cap
    updateProgressBar(simulatedMarketCap);

    // Add an event listener to update the progress bar on window resize
    window.addEventListener('resize', function() {
        updateProgressBar(simulatedMarketCap);
    });
});

const marketCaps = [
    'market_cap_10000',
    'market_cap_50000',
    'market_cap_100000',
    'market_cap_175000',
    'market_cap_250000',
    'market_cap_350000',
    'market_cap_500000',
    'market_cap_750000',
    'market_cap_1000000'
];
let currentIndex = 0;

document.getElementById('right_button').addEventListener('click', function() {
    document.getElementById(marketCaps[currentIndex]).style.display = 'none';
    currentIndex = (currentIndex + 1) % marketCaps.length;
    document.getElementById(marketCaps[currentIndex]).style.display = 'block';
});

document.getElementById('left_button').addEventListener('click', function() {
    document.getElementById(marketCaps[currentIndex]).style.display = 'none';
    currentIndex = (currentIndex - 1 + marketCaps.length) % marketCaps.length;
    document.getElementById(marketCaps[currentIndex]).style.display = 'block';
});


document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById("Home_Button");
    const about = document.getElementById("About_Button");
    const prizes = document.getElementById("Prizes_Button");
    const tokenomics = document.getElementById("Tokenomics_Button");
    const calculator = document.getElementById("Calculator_Button");
    const inputBox = document.querySelector('.Input_Field');
    const outputBox = document.querySelector('.Output_Field');
    const menu = document.querySelector(".Header_Menu_Button"); // Corrected selector
    const overlayMenu = document.querySelector(".Overlay_Menu");
    const exit = document.querySelector(".Overlay_Menu_Exit"); // Corrected selector

    document.getElementById("OM_Home").addEventListener('click', () => {
        overlayMenu.style.display = "none";
        window.location.href = "index.html#Welcome_Page";
    });

    document.getElementById("OM_About").addEventListener('click', () => {
        overlayMenu.style.display = "none";
        window.location.href = "index.html#About_Page";
    });

    document.getElementById("OM_Prizes").addEventListener('click', () => {
        overlayMenu.style.display = "none";
        window.location.href = "index.html#Prizes_Page";
    });

    document.getElementById("OM_Tokenomics").addEventListener('click', () => {
        overlayMenu.style.display = "none";
        window.location.href = "index.html#Tokenomics_Page";
    });

    menu.addEventListener('click', () => {
        overlayMenu.style.display = "flex";
    });

    exit.addEventListener('click', () => {
        overlayMenu.style.display = "none";
    });

    home.addEventListener('click', () => {
        window.location.href = "index.html#Welcome_Page";
    });

    about.addEventListener('click', () => {
        window.location.href = "index.html#About_Page";
    });

    prizes.addEventListener('click', () => {
        window.location.href = "index.html#Prizes_Page";
    });

    tokenomics.addEventListener('click', () => {
        window.location.href = "index.html#Tokenomics_Page";
    });

    calculator.addEventListener('click', () => {
        const inputValue = inputBox.value;
        const totalSupply = 100000000;

        const probability = (inputValue / totalSupply) * 100;


        outputBox.value = probability + "%";
    });
});
