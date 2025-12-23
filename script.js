// Dynamic GPA badge color
document.addEventListener("DOMContentLoaded", function () {
    const gpaBadges = document.querySelectorAll(".badge-gpa");
    gpaBadges.forEach((badge) => {
        const gpaText = badge.textContent.trim();
        const gpa = parseFloat(gpaText);

        if (!isNaN(gpa)) {
            // Calculate color based on GPA
            let color;
            if (gpa <= 1.0) {
                // Red to Orange (0.0 - 1.0)
                const hue = gpa * 30; // 0 to 30
                color = `hsl(${hue}, 70%, 60%)`;
            } else if (gpa <= 2.0) {
                // Orange to Yellow (1.0 - 2.0)
                const hue = 30 + (gpa - 1.0) * 15; // 30 to 45
                color = `hsl(${hue}, 70%, 60%)`;
            } else if (gpa <= 3.0) {
                // Yellow to Yellow-Green (2.0 - 3.0)
                const hue = 45 + (gpa - 2.0) * 30; // 45 to 75
                color = `hsl(${hue}, 65%, 55%)`;
            } else {
                // Yellow-Green to Green (3.0 - 4.0)
                const hue = 75 + (gpa - 3.0) * 45; // 75 to 120
                color = `hsl(${hue}, 60%, 50%)`;
            }

            badge.style.color = color;
        }
    });
});
