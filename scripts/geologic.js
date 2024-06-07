document.addEventListener('DOMContentLoaded', function() {
    const periods = document.querySelectorAll('.time-period-info');
    let currentIndex = 0;

    function showPeriod(index) {
        periods.forEach((period, idx) => {
            if (idx === index) {
                period.style.display = 'block';
            } else {
                period.style.display = 'none';
            }
        });
    }

    function createNavigationButtons() {
        periods.forEach((period, index) => {
            const nextButton = document.createElement('button');
            nextButton.className = 'slide-button';
            nextButton.textContent = 'Next Time Period';
            nextButton.addEventListener('click', () => {
                if (index < periods.length - 1) {
                    showPeriod(index + 1);
                } else {
                    showPeriod(0); // Loop back to the first period
                }
            });
            period.appendChild(nextButton);

            const prevButton = document.createElement('button');
            prevButton.className = 'slide-button';
            prevButton.textContent = 'Previous Time Period';
            prevButton.addEventListener('click', () => {
                if (index > 0) {
                    showPeriod(index - 1);
                } else {
                    showPeriod(periods.length - 1); // Loop back to the last period
                }
            });
            period.appendChild(prevButton);
        });
    }

    showPeriod(currentIndex);
    createNavigationButtons();
});