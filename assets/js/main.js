function initClock() {
    const timeEl = document.getElementById("time");
    const dateEl = document.getElementById("date");

    if (!timeEl || !dateEl) return;

    function updateTime() {
        const now = new Date();

        const timeStr = now.toLocaleTimeString("zh-CN", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        const dateStr = now.toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long"
        });

        timeEl.textContent = timeStr;
        dateEl.textContent = dateStr;
    }

    updateTime();
    setInterval(updateTime, 1000);
}
