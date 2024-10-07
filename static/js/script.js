document.getElementById('mission-btn').addEventListener('click', function() {
    // Array of mock missions
    const missions = [
        "Retrieve the classified documents from a high-security building.",
        "Intercept the communications of a foreign diplomat.",
        "Infiltrate the enemy base without being detected.",
        "Protect the asset at all costs during the extraction mission."
    ];

    // Pick a random mission from the array
    const randomMission = missions[Math.floor(Math.random() * missions.length)];

    // Display the mission in the designated area
    document.getElementById('mission').textContent = randomMission;
});
