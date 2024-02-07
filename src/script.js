window.onload = (event) => {
    renderOpeningDates();
}

function openNav() {
    document.getElementById("overlay-menu").style.width = "20em";
}

function closeNav() {
    document.getElementById("overlay-menu").style.width = "0";
}

const openingTimes = [
    {
        date: new Date("15 Aug 2023")
    },
    {
        date: new Date("02 October 2023")
    },
    {
        date: new Date("07 November 2023")
    },
    {
        date: new Date("06 December 2023")
    },
    {
        date: new Date("06 March 2024")
    },
    {
        date: new Date("22 April 2024")
    },
    {
        date: new Date("04 June 2024")
    },
    {
        date: new Date("03 July 2024")
    },
    {
        date: new Date("12 August 2024")
    },
    {
        date: new Date("01 October 2024")
    },
    {
        date: new Date("04 December 2024")
    }
];

function renderOpeningDates() {
    const today = new Date();
    const openingDatesList = document.querySelector("#opening-dates-list");
    openingTimes.forEach((item) => {
        if (today <= item.date) {
            const formattedDate = formatDate(item.date);
            const dayOfWeek = getDayOfWeek(item.date.getDay());
            const listItem = document.createElement("li");
            const listItemNode = document.createTextNode(dayOfWeek + " " + formattedDate);
            listItem.appendChild(listItemNode);
            openingDatesList.appendChild(listItem);
        }
    });
    
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const formattedMonth = getMonthName(month)

    return `${day}. ${formattedMonth} ${year}`
}

function getDayOfWeek(date) {
    const days = [
        "Søndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag"
    ]
    
    return days[date];
}

function getMonthName(monthIndex) {
    
    const months = [
        "januar",
        "februar",
        "marts",
        "april",
        "maj",
        "juni",
        "juli",
        "august",
        "september",
        "oktober",
        "november",
        "december"
    ]

    return months[monthIndex];
}
