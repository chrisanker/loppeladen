document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById("menu-container");
    const overlayMenu = document.getElementById("overlay-menu");
    const closeBtn = document.getElementById("closebtn");

    menuContainer.addEventListener("click", function () {
        overlayMenu.style.width = "20em";
    });

    closeBtn.addEventListener("click", function () {
        overlayMenu.style.width = "0";
    });

    renderOpeningDates();
});

const openingTimes = [
    "15 Aug 2023",
    "02 Oct 2023",
    "07 Nov 2023",
    "06 Dec 2023",
    "06 Mar 2024",
    "22 Apr 2024",
    "04 Jun 2024",
    "03 Jul 2024",
    "12 Aug 2024",
    "01 Oct 2024",
    "04 Dec 2024"
];

export function renderOpeningDates() {
    const today = new Date();
    const openingDatesList = document.querySelector("#opening-dates-list");

    openingTimes.forEach(dateString => {
        const date = new Date(dateString);
        if (today <= date) {
            const formattedDate = date.toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });
            const dayOfWeek = date.toLocaleDateString("da-DK", { weekday: "long" });

            const listItem = document.createElement("li");
            listItem.textContent = `${dayOfWeek} ${formattedDate}`;
            openingDatesList.appendChild(listItem);
        }
    });
}
