/* =====================================================
   TECH SUPPORT - COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    en: {

        home: "Home",
        dashboard: "Dashboard",
        createTicket: "Create Ticket",
        knowledge: "Knowledge Base",
        contact: "Contact Us",

        badge: "Your Technical Support Partner",

        heroTitle: "Technical Support System",

        heroSubtitle:
            "Manage your support tickets easily",

        heroText:
            "We are here to help you solve your technical issues as quickly as possible with a specialized support team, always by your side.",

        createNewTicket:
            "Create New Ticket",

        supportStatistics:
            "Support Statistics",

        completed: "Completed",
        completedTickets: "Completed Tickets",

        inProgress: "In Progress",
        progressTickets: "In Progress Tickets",

        new: "New",
        newTickets: "New Tickets",

        totalTickets: "Total Tickets",

        dashboardTitle:
            "Support Dashboard",

        dashboardSubtitle:
            "Manage and track all support tickets",

        latestTickets:
            "Latest Tickets",

        loginWelcome:
            "Technical Support Solutions",

        loginDescription:
            "Your trusted platform for technical support and issue resolution.",

        signIn:
            "Sign In",

        createTicketTitle:
            "Create New Ticket",

        createTicketSubtitle:
            "Tell us about your technical problem"
    },


    ar: {

        home: "الرئيسية",
        dashboard: "لوحة التحكم",
        createTicket: "تقديم بلاغ",
        knowledge: "قاعدة المعرفة",
        contact: "تواصل معنا",

        badge:
            "شريكك في الدعم الفني",

        heroTitle:
            "نظام الدعم الفني",

        heroSubtitle:
            "إدارة البلاغات والدعم الفني بسهولة",

        heroText:
            "نحن هنا لمساعدتك في حل مشاكلك التقنية بأسرع وقت ممكن مع فريق دعم فني متخصص ومتواجد دائمًا بجانبك.",

        createNewTicket:
            "تقديم بلاغ جديد",

        supportStatistics:
            "إحصائيات الدعم الفني",

        completed:
            "مكتمل",

        completedTickets:
            "بلاغات مكتملة",

        inProgress:
            "قيد المعالجة",

        progressTickets:
            "بلاغات قيد المعالجة",

        new:
            "جديد",

        newTickets:
            "بلاغات جديدة",

        totalTickets:
            "إجمالي البلاغات",

        dashboardTitle:
            "لوحة التحكم",

        dashboardSubtitle:
            "إدارة ومتابعة جميع البلاغات",

        latestTickets:
            "آخر البلاغات",

        loginWelcome:
            "حلول الدعم الفني",

        loginDescription:
            "منصتك الموثوقة للدعم الفني وحل المشكلات.",

        signIn:
            "تسجيل الدخول",

        createTicketTitle:
            "تقديم بلاغ جديد",

        createTicketSubtitle:
            "أخبرنا عن المشكلة التقنية التي تواجهها"
    }

};


/* =====================================================
   LANGUAGE
===================================================== */

function setLanguage(language) {

    const data = translations[language];

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.dataset.i18n;

            if (data[key]) {
                element.textContent = data[key];
            }

        });


    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    const languageButton =
        document.getElementById("languageToggle");


    if (languageButton) {

        languageButton.textContent =
            language === "ar"
                ? "EN"
                : "AR";

    }


    localStorage.setItem(
        "techSupportLanguage",
        language
    );
}


/* =====================================================
   THEME
===================================================== */

function setTheme(theme) {

    document.body.classList.toggle(
        "light-mode",
        theme === "light"
    );


    const themeButton =
        document.getElementById("themeToggle");


    if (themeButton) {

        themeButton.textContent =
            theme === "light"
                ? "☾"
                : "☀";

    }


    localStorage.setItem(
        "techSupportTheme",
        theme
    );
}


/* =====================================================
   TICKETS
===================================================== */

function getTickets() {

    return JSON.parse(
        localStorage.getItem("tickets") || "[]"
    );

}


function saveTickets(tickets) {

    localStorage.setItem(
        "tickets",
        JSON.stringify(tickets)
    );

}


/* =====================================================
   LOGIN
===================================================== */

function setupLogin() {

    const form =
        document.getElementById("loginForm");


    if (!form) return;


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                document.getElementById("username").value.trim();

            const password =
                document.getElementById("password").value.trim();


            if (
                username === "admin" &&
                password === "1234"
            ) {

                localStorage.setItem(
                    "loggedIn",
                    "true"
                );

                window.location.href =
                    "dashboard.html";

            } else {

                alert(
                    "Incorrect username or password."
                );

            }

        }
    );

}


/* =====================================================
   LOGOUT
===================================================== */

function setupLogout() {

    const button =
        document.getElementById("logoutButton");


    if (!button) return;


    button.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "loggedIn"
            );

            window.location.href =
                "login.html";

        }
    );

}


/* =====================================================
   CREATE TICKET
===================================================== */

function setupTicketForm() {

    const form =
        document.getElementById("ticketForm");


    if (!form) return;


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const tickets =
                getTickets();


            const newId =
                "TS-" +
                (
                    1001 +
                    tickets.length
                );


            const ticket = {

                id: newId,

                name:
                    document.getElementById(
                        "ticketName"
                    ).value.trim(),

                email:
                    document.getElementById(
                        "ticketEmail"
                    ).value.trim(),

                title:
                    document.getElementById(
                        "ticketTitle"
                    ).value.trim(),

                category:
                    document.getElementById(
                        "ticketCategory"
                    ).value,

                priority:
                    document.getElementById(
                        "ticketPriority"
                    ).value,

                description:
                    document.getElementById(
                        "ticketDescription"
                    ).value.trim(),

                status: "New",

                date:
                    new Date()
                    .toISOString()
                    .split("T")[0]

            };


            tickets.unshift(ticket);

            saveTickets(tickets);


            alert(
                "Ticket created successfully!"
            );


            form.reset();


            window.location.href =
                "dashboard.html";

        }
    );

}


/* =====================================================
   DASHBOARD
===================================================== */

function setupDashboard() {

    const table =
        document.getElementById(
            "ticketsTable"
        );


    if (!table) return;


    let tickets =
        getTickets();


    /* Demo tickets */

    if (tickets.length === 0) {

        tickets = [

            {
                id: "TS-101",
                name: "Demo User",
                email: "demo@example.com",
                title: "Printer Issue",
                category: "Devices",
                priority: "High",
                description: "Printer is not working.",
                status: "New",
                date: "2025-05-12"
            },

            {
                id: "TS-100",
                name: "Demo User",
                email: "demo@example.com",
                title: "Email Not Working",
                category: "Software",
                priority: "Medium",
                description: "Email cannot be opened.",
                status: "In Progress",
                date: "2025-05-11"
            },

            {
                id: "TS-099",
                name: "Demo User",
                email: "demo@example.com",
                title: "Install Software",
                category: "Software",
                priority: "Low",
                description: "Need software installation.",
                status: "Completed",
                date: "2025-05-10"
            },

            {
                id: "TS-098",
                name: "Demo User",
                email: "demo@example.com",
                title: "Network Problem",
                category: "Network",
                priority: "High",
                description: "Internet connection problem.",
                status: "In Progress",
                date: "2025-05-09"
            },

            {
                id: "TS-097",
                name: "Demo User",
                email: "demo@example.com",
                title: "System Update",
                category: "Software",
                priority: "Medium",
                description: "System needs update.",
                status: "Completed",
                date: "2025-05-08"
            }

        ];

        saveTickets(tickets);

    }


    renderDashboard(tickets);


    const search =
        document.getElementById(
            "ticketSearch"
        );


    if (search) {

        search.addEventListener(
            "input",
            function () {

                const value =
                    this.value.toLowerCase();


                const filtered =
                    tickets.filter(ticket =>
                        ticket.id.toLowerCase().includes(value) ||
                        ticket.title.toLowerCase().includes(value) ||
                        ticket.status.toLowerCase().includes(value)
                    );


                renderDashboard(filtered);

            }
        );

    }

}


function renderDashboard(tickets) {

    const table =
        document.getElementById(
            "ticketsTable"
        );


    if (!table) return;


    table.innerHTML = "";


    tickets.forEach(ticket => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                <a
                    class="ticket-id"
                    href="ticket-details.html?id=${ticket.id}">
                    #${ticket.id.replace("TS-", "")}
                </a>
            </td>

            <td>
                ${ticket.title}
            </td>

            <td>

                <select
                    class="status-select"
                    data-id="${ticket.id}">

                    <option
                        value="New"
                        ${ticket.status === "New" ? "selected" : ""}>
                        New
                    </option>

                    <option
                        value="In Progress"
                        ${ticket.status === "In Progress" ? "selected" : ""}>
                        In Progress
                    </option>

                    <option
                        value="Completed"
                        ${ticket.status === "Completed" ? "selected" : ""}>
                        Completed
                    </option>

                </select>

            </td>

            <td>
                ${ticket.priority}
            </td>

            <td>
                ${ticket.date}
            </td>

            <td>

                <a
                    class="view-ticket"
                    href="ticket-details.html?id=${ticket.id}">
                    View
                </a>

            </td>

        `;


        table.appendChild(row);

    });


    updateStats(
        getTickets()
    );


    document
        .querySelectorAll(".status-select")
        .forEach(select => {

            select.addEventListener(
                "change",
                function () {

                    const tickets =
                        getTickets();


                    const ticket =
                        tickets.find(
                            t =>
                            t.id ===
                            this.dataset.id
                        );


                    if (ticket) {

                        ticket.status =
                            this.value;

                        saveTickets(
                            tickets
                        );

                        updateStats(
                            tickets
                        );

                    }

                }
            );

        });

}


/* =====================================================
   STATS
===================================================== */

function updateStats(tickets) {

    const total =
        tickets.length;

    const newTickets =
        tickets.filter(
            t => t.status === "New"
        ).length;

    const progress =
        tickets.filter(
            t => t.status === "In Progress"
        ).length;

    const completed =
        tickets.filter(
            t => t.status === "Completed"
        ).length;


    const totalElement =
        document.getElementById(
            "dashboardTotal"
        );

    const newElement =
        document.getElementById(
            "dashboardNew"
        );

    const progressElement =
        document.getElementById(
            "dashboardProgress"
        );

    const completedElement =
        document.getElementById(
            "dashboardCompleted"
        );


    if (totalElement)
        totalElement.textContent = total;

    if (newElement)
        newElement.textContent = newTickets;

    if (progressElement)
        progressElement.textContent = progress;

    if (completedElement)
        completedElement.textContent = completed;


    const homeTotal =
        document.getElementById(
            "totalCount"
        );

    const homeNew =
        document.getElementById(
            "newCount"
        );

    const homeProgress =
        document.getElementById(
            "progressCount"
        );

    const homeCompleted =
        document.getElementById(
            "completedCount"
        );


    if (homeTotal)
        homeTotal.textContent = total;

    if (homeNew)
        homeNew.textContent = newTickets;

    if (homeProgress)
        homeProgress.textContent = progress;

    if (homeCompleted)
        homeCompleted.textContent = completed;

}


/* =====================================================
   KNOWLEDGE SEARCH
===================================================== */

function setupKnowledgeSearch() {

    const input =
        document.getElementById(
            "knowledgeSearch"
        );


    if (!input) return;


    input.addEventListener(
        "input",
        function () {

            const value =
                this.value.toLowerCase();


            document
                .querySelectorAll(
                    ".knowledge-card"
                )
                .forEach(card => {

                    card.style.display =
                        card.textContent
                            .toLowerCase()
                            .includes(value)
                            ? ""
                            : "none";

                });

        }
    );

}


/* =====================================================
   CONTACT
===================================================== */

function setupContact() {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) return;


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const messages =
                JSON.parse(
                    localStorage.getItem(
                        "contactMessages"
                    ) || "[]"
                );


            messages.push({

                name:
                    document.getElementById(
                        "contactName"
                    ).value,

                email:
                    document.getElementById(
                        "contactEmail"
                    ).value,

                subject:
                    document.getElementById(
                        "contactSubject"
                    ).value,

                message:
                    document.getElementById(
                        "contactMessage"
                    ).value,

                date:
                    new Date().toISOString()

            });


            localStorage.setItem(
                "contactMessages",
                JSON.stringify(messages)
            );


            alert(
                "Your message has been sent successfully!"
            );


            form.reset();

        }
    );

}


/* =====================================================
   TICKET DETAILS
===================================================== */

function setupTicketDetails() {

    const title =
        document.getElementById(
            "detailsTitle"
        );


    if (!title) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        params.get("id");


    const tickets =
        getTickets();


    const ticket =
        tickets.find(
            t => t.id === id
        );


    if (!ticket) {

        title.textContent =
            "Ticket not found";

        return;

    }


    document.getElementById(
        "detailsTitle"
    ).textContent =
        ticket.title;


    document.getElementById(
        "detailsId"
    ).textContent =
        ticket.id;


    document.getElementById(
        "detailsDescription"
    ).textContent =
        ticket.description;


    document.getElementById(
        "detailsName"
    ).textContent =
        ticket.name;


    document.getElementById(
        "detailsEmail"
    ).textContent =
        ticket.email;


    document.getElementById(
        "detailsCategory"
    ).textContent =
        ticket.category;


    document.getElementById(
        "detailsPriority"
    ).textContent =
        ticket.priority;


    document.getElementById(
        "detailsDate"
    ).textContent =
        ticket.date;


    document.getElementById(
        "detailsStatus"
    ).textContent =
        ticket.status;


    document.getElementById(
        "statusDisplay"
    ).textContent =
        ticket.status;

}


/* =====================================================
   INIT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedLanguage =
            localStorage.getItem(
                "techSupportLanguage"
            ) || "en";


        const savedTheme =
            localStorage.getItem(
                "techSupportTheme"
            ) || "dark";


        setLanguage(
            savedLanguage
        );


        setTheme(
            savedTheme
        );


        /* Language button */

        const languageButton =
            document.getElementById(
                "languageToggle"
            );


        if (languageButton) {

            languageButton.addEventListener(
                "click",
                function () {

                    const current =
                        localStorage.getItem(
                            "techSupportLanguage"
                        ) || "en";


                    setLanguage(
                        current === "en"
                            ? "ar"
                            : "en"
                    );

                }
            );

        }


        /* Theme button */

        const themeButton =
            document.getElementById(
                "themeToggle"
            );


        if (themeButton) {

            themeButton.addEventListener(
                "click",
                function () {

                    const current =
                        localStorage.getItem(
                            "techSupportTheme"
                        ) || "dark";


                    setTheme(
                        current === "dark"
                            ? "light"
                            : "dark"
                    );

                }
            );

        }


        setupLogin();

        setupLogout();

        setupTicketForm();

        setupDashboard();

        setupKnowledgeSearch();

        setupContact();

        setupTicketDetails();

    }
);
