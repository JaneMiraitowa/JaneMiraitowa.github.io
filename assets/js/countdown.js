// 自动计算今日/本周/本月/今年进度
function updateProgress() {
    const now = new Date();
    // 今日进度
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);
    const todayPercent = ((now - todayStart) / (todayEnd - todayStart)) * 100;
    // 本周进度
    const weekStart = new Date(todayStart);
    weekStart.setDate(todayStart.getDate() - todayStart.getDay());
    const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    const weekPercent = ((now - weekStart) / (weekEnd - weekStart)) * 100;
    // 本月进度
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const monthPercent = ((now - monthStart) / (monthEnd - monthStart)) * 100;
    // 今年进度
    const yearStart = new Date(now.getFullYear(), 0, 1);
    const yearEnd = new Date(now.getFullYear() + 1, 0, 1);
    const yearPercent = ((now - yearStart) / (yearEnd - yearStart)) * 100;

    // 更新进度条
    document.querySelector('.progress-fill.today').style.width = `${todayPercent.toFixed(0)}%`;
    document.querySelector('.progress-fill.week').style.width = `${weekPercent.toFixed(0)}%`;
    document.querySelector('.progress-fill.month').style.width = `${monthPercent.toFixed(0)}%`;
    document.querySelector('.progress-fill.year').style.width = `${yearPercent.toFixed(0)}%`;

    // 更新百分比文字
    document.getElementById('today-percent').textContent = `${todayPercent.toFixed(0)}%`;
    document.getElementById('week-percent').textContent = `${weekPercent.toFixed(0)}%`;
    document.getElementById('month-percent').textContent = `${monthPercent.toFixed(0)}%`;
    document.getElementById('year-percent').textContent = `${yearPercent.toFixed(0)}%`;
}
// 页面加载时执行，每秒刷新一次
updateProgress();
setInterval(updateProgress, 1000);