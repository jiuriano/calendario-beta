document.addEventListener('DOMContentLoaded', function () {
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const currentMonthElement = document.getElementById('currentMonth');
    const calendarTable = document.getElementById('calendarTable');
    let currentMonth = new Date();

    function renderCalendar() {
        const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        currentMonthElement.textContent = new Intl.DateTimeFormat('default', { month: 'long', year: 'numeric' }).format(currentMonth);

        let html = '<tr>';
        for (let i = 0; i < startingDay; i++) {
            html += '<td></td>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            html += `<td>${day}</td>`;
            if ((startingDay + day) % 7 === 0) {
                html += '</tr><tr>';
            }
        }

        html += '</tr>';
        calendarTable.innerHTML = html;
    }

    function updateCalendar() {
        renderCalendar();
    }

    prevMonthBtn.addEventListener('click', function () {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        updateCalendar();
    });

    nextMonthBtn.addEventListener('click', function () {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        updateCalendar();
    });

    updateCalendar();
});