document.addEventListener("DOMContentLoaded", function () {
    const singleBtn = document.getElementById("singleTrip");
    const multiBtn = document.getElementById("multiTrip");

    if (singleBtn && multiBtn) {
        singleBtn.addEventListener("click", function () {
            singleBtn.classList.add("active");
            multiBtn.classList.remove("active");
        });

        multiBtn.addEventListener("click", function () {
            multiBtn.classList.add("active");
            singleBtn.classList.remove("active");
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("destinationSelect");
    const tagsContainer = document.getElementById("selectedTags");

    const selectedValues = new Set();

    select.addEventListener("change", function () {
        const value = select.value;

        if (!value || selectedValues.has(value)) {
            select.value = "";
            return;
        }

        selectedValues.add(value);

        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = value;

        tagsContainer.appendChild(tag);


        select.value = "";
    });

});


const popularDestinations = ["USA", "UK", "Canada", "Bali"];

const countries = [
    "Bamiyan [Afghanistan]",
    "Maldives",
    "Kabul [Afghanistan]",
    "Tirana [Albania]",
    "Sarandë [Albania]",
    "Algiers [Algeria]",
    "Buenos Aires [Argentina]",
    "Patagonia [Argentina]",
    "Sydney [Australia]",
    "Melbourne [Australia]",
    "Gold Coast [Australia]",
    "Vienna [Austria]",
    "Salzburg [Austria]",
    "Cox’s Bazar [Bangladesh]",
    "Sundarbans [Bangladesh]",
    "Brussels [Belgium]",
    "Bruges [Belgium]",
    "Rio de Janeiro [Brazil]",
    "São Paulo [Brazil]",
    "Toronto [Canada]",
    "Vancouver [Canada]",
    "Niagara Falls [Canada]",
    "Beijing [China]",
    "Shanghai [China]",
    "Great Wall [China]",
    "Copenhagen [Denmark]",
    "Cairo [Egypt]",
    "Giza Pyramids [Egypt]",
    "Luxor [Egypt]",
    "Helsinki [Finland]",
    "Lapland [Finland]",
    "Paris [France]",
    "Nice [France]",
    "French Riviera [France]",
    "Berlin [Germany]",
    "Munich [Germany]",
    "Santorini [Greece]",
    "Mykonos [Greece]",
    "Athens [Greece]",
    "Goa [India]",
    "Taj Mahal [India]",
    "Jaipur [India]",
    "Manali [India]",
    "Kerala [India]",
    "Bali [Indonesia]",
    "Jakarta [Indonesia]",
    "Yogyakarta [Indonesia]",
    "Dublin [Ireland]",
    "Cliffs of Moher [Ireland]",
    "Rome [Italy]",
    "Venice [Italy]",
    "Milan [Italy]",
    "Florence [Italy]",
    "Tokyo [Japan]",
    "Kyoto [Japan]",
    "Osaka [Japan]",
    "Mount Fuji [Japan]",
    "Maasai Mara [Kenya]",
    "Nairobi [Kenya]",
    "Kuala Lumpur [Malaysia]",
    "Langkawi [Malaysia]",
    "Cancún [Mexico]",
    "Mexico City [Mexico]",
    "Amsterdam [Netherlands]",
    "Zaanse Schans [Netherlands]",
    "Queenstown [New Zealand]",
    "Auckland [New Zealand]",
    "Oslo [Norway]",
    "Fjords [Norway]",
    "Hunza Valley [Pakistan]",
    "Skardu [Pakistan]",
    "Boracay [Philippines]",
    "Palawan [Philippines]",
    "Lisbon [Portugal]",
    "Porto [Portugal]",
    "Doha [Qatar]",
    "Moscow [Russia]",
    "Saint Petersburg [Russia]",
    "Mecca [Saudi Arabia]",
    "Medina [Saudi Arabia]",
    "Riyadh [Saudi Arabia]",
    "Marina Bay [Singapore]",
    "Sentosa [Singapore]",
    "Cape Town [South Africa]",
    "Kruger National Park [South Africa]",
    "Barcelona [Spain]",
    "Madrid [Spain]",
    "Ibiza [Spain]",
    "Ella [Sri Lanka]",
    "Sigiriya [Sri Lanka]",
    "Galle [Sri Lanka]",
    "Stockholm [Sweden]",
    "Ice Hotel [Sweden]",
    "Zurich [Switzerland]",
    "Interlaken [Switzerland]",
    "Lucerne [Switzerland]",
    "Bangkok [Thailand]",
    "Phuket [Thailand]",
    "Krabi [Thailand]",
    "Istanbul [Turkey]",
    "Cappadocia [Turkey]",
    "Dubai [UAE]",
    "Abu Dhabi [UAE]",
    "London [UK]",
    "Edinburgh [UK]",
    "New York [USA]",
    "Los Angeles [USA]",
    "Las Vegas [USA]",
    "San Francisco [USA]",
    "Ha Long Bay [Vietnam]",
    "Da Nang [Vietnam]",
    "Ho Chi Minh City [Vietnam]"
];


document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("countrySearch");
    const optionsBox = document.getElementById("countryOptions");
    const tagsBox = document.getElementById("selectedCountries");


    if (!input || !optionsBox || !tagsBox) return;

    const selected = new Set();

    function renderOptions(searchValue = "") {
        optionsBox.innerHTML = "";

        const value = searchValue.toLowerCase();

        const filteredPopular = popularDestinations.filter(d =>
            d.toLowerCase().includes(value)
        );

        const filteredCountries = countries
            .filter(c => !popularDestinations.includes(c))
            .filter(c => c.toLowerCase().includes(value));

        if (filteredPopular.length === 0 && filteredCountries.length === 0) {
            const li = document.createElement("li");
            li.textContent = "Destination not found";
            li.style.pointerEvents = "none";
            li.style.color = "#999";
            optionsBox.appendChild(li);
            return;
        }

        if (filteredPopular.length) {
            const heading = document.createElement("li");
            heading.textContent = "Popular destinations";
            heading.style.pointerEvents = "none";
            heading.style.fontSize = "0.75rem";
            heading.style.fontWeight = "bold";
            heading.style.color = "#666";
            heading.style.padding = "0.5rem";
            optionsBox.appendChild(heading);

            filteredPopular.forEach(country => {
                const li = document.createElement("li");
                li.textContent = country;
                optionsBox.appendChild(li);
            });
        }

        if (filteredPopular.length && filteredCountries.length) {
            const divider = document.createElement("li");
            divider.textContent = "────────";
            divider.style.pointerEvents = "none";
            divider.style.color = "#ccc";
            divider.style.textAlign = "center";
            optionsBox.appendChild(divider);
        }

        filteredCountries.forEach(country => {
            const li = document.createElement("li");
            li.textContent = country;
            optionsBox.appendChild(li);
        });
    }

    renderOptions();

    input.addEventListener("focus", () => {
        optionsBox.style.display = "block";
        renderOptions();
    });

    input.addEventListener("input", () => {
        optionsBox.style.display = "block";
        renderOptions(input.value);
    });

    optionsBox.addEventListener("click", (e) => {
        if (e.target.tagName !== "LI") return;

        const value = e.target.textContent;

        if (
            value === "Destination not found" ||
            value === "────────" ||
            selected.has(value)
        ) {
            return;
        }

        selected.add(value);

        const tag = document.createElement("span");
        tag.className = "tag";
        tag.innerHTML = `${value} <button type="button">×</button>`;

        tag.querySelector("button").addEventListener("click", () => {
            selected.delete(value);
            tag.remove();
        });

        tagsBox.appendChild(tag);

        input.value = "";
        optionsBox.style.display = "none";
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown-wrapper")) {
            optionsBox.style.display = "none";
        }
    });

    window.getSelectedCountries = () => Array.from(selected);
});





document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".ages-wrapper");
    const addBtn = document.querySelector(".add-age");

    addBtn.addEventListener("click", function () {
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "120";
        input.placeholder = "Age";
        input.className = "age-input";


        wrapper.insertBefore(input, addBtn);
        input.focus();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");
    const megaOverlay = document.getElementById("megaOverlay");
    const body = document.body;

    function openMegaMenu() {
        body.classList.add("mega-open");
    }

    function closeMegaMenu() {
        body.classList.remove("mega-open");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            openMegaMenu();
        });
    });

    if (megaOverlay) {
        megaOverlay.addEventListener("click", closeMegaMenu);
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMegaMenu();
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    const singleTripBtn = document.getElementById("singleTrip");
    const multiTripBtn = document.getElementById("multiTrip");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const tripType = singleTripBtn.classList.contains("active")
            ? "single"
            : "multi";

        const destinations = window.getSelectedCountries
            ? window.getSelectedCountries()
            : [];

        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        const ageInputs = document.querySelectorAll(".age-input");
        const ages = Array.from(ageInputs)
            .map(input => input.value)
            .filter(value => value !== "");

        const promoInput = form.querySelector(
            'input[placeholder="Promo Code"]'
        );
        const promoCode = promoInput ? promoInput.value : "";

        const formData = {
            tripType,
            destinations,
            startDate,
            endDate,
            ages,
            promoCode
        };

        localStorage.setItem("travelInsuranceForm", JSON.stringify(formData));

        console.log("Saved to localStorage:", formData);

        window.location.href = "./quote.html";

    });
});




document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileNavMenu = document.getElementById("mobileNavMenu");
    const mobileNavClose = document.getElementById("mobileNavClose");
    const body = document.body;


    const overlay = document.createElement("div");
    overlay.className = "mobile-nav-overlay";
    document.body.appendChild(overlay);


    function openMobileMenu() {
        mobileNavMenu.classList.add("active");
        overlay.classList.add("active");
        body.classList.add("mobile-menu-open");
    }


    function closeMobileMenu() {
        mobileNavMenu.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("mobile-menu-open");


        closeAllAccordions();
    }


    const mobileNavToggles = document.querySelectorAll('.mobile-nav-toggle');


    function closeAllAccordions() {
        mobileNavToggles.forEach(toggle => {
            const dropdown = toggle.nextElementSibling;
            const arrow = toggle.querySelector('.mobile-nav-arrow');

            dropdown.classList.remove('active');
            if (arrow) {
                arrow.classList.remove('active');
            }
        });
    }


    function openAccordion(toggle) {
        const dropdown = toggle.nextElementSibling;
        const arrow = toggle.querySelector('.mobile-nav-arrow');


        mobileNavToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                const otherDropdown = otherToggle.nextElementSibling;
                const otherArrow = otherToggle.querySelector('.mobile-nav-arrow');

                otherDropdown.classList.remove('active');
                if (otherArrow) {
                    otherArrow.classList.remove('active');
                }
            }
        });


        dropdown.classList.toggle('active');
        if (arrow) {
            arrow.classList.toggle('active');
        }
    }


    mobileNavToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            openAccordion(this);
        });
    });


    const mobileSubLinks = document.querySelectorAll('.mobile-nav-sublink');
    mobileSubLinks.forEach(link => {
        link.addEventListener('click', function (e) {

            setTimeout(closeMobileMenu, 300);
        });
    });


    mobileMenuToggle.addEventListener("click", openMobileMenu);
    mobileNavClose.addEventListener("click", closeMobileMenu);
    overlay.addEventListener("click", closeMobileMenu);


    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMobileMenu();
    });


    const travelLink = document.querySelector(".nav a");
    if (travelLink) {
        travelLink.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                openMobileMenu();
            }
        });
    }


    closeAllAccordions();
});


document.addEventListener("DOMContentLoaded", function () {

    const formData = JSON.parse(localStorage.getItem("travelInsuranceForm") || "{}");


    const destinationElement = document.querySelector('.summary div:nth-child(1)');
    if (destinationElement) {
        const destinations = formData.destinations || [];
        if (destinations.length > 0) {

            if (destinations.length === 1) {
                destinationElement.innerHTML = `<strong>Destination(s):</strong> ${destinations[0]}`;
            } else {
                destinationElement.innerHTML = `<strong>Destination(s):</strong> ${destinations[0]} (+${destinations.length - 1} more)`;
            }
        } else {
            destinationElement.innerHTML = `<strong>Destination(s):</strong> Not specified`;
        }
    }


    const datesElement = document.querySelector('.summary div:nth-child(2)');
    if (datesElement && formData.startDate && formData.endDate) {

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).replace(/\//g, '/');
        };

        const startDate = formatDate(formData.startDate);
        const endDate = formatDate(formData.endDate);
        datesElement.innerHTML = `<strong>Dates:</strong> ${startDate} – ${endDate}`;
    } else if (datesElement) {
        datesElement.innerHTML = `<strong>Dates:</strong> Not specified`;
    }


    const agesElement = document.querySelector('.summary div:nth-child(3)');
    if (agesElement) {
        const ages = formData.ages || [];
        if (ages.length > 0) {

            if (ages.length <= 3) {
                agesElement.innerHTML = `<strong>Traveller Ages:</strong> ${ages.join(', ')} <span class="edit">Edit</span>`;
            } else {
                agesElement.innerHTML = `<strong>Traveller Ages:</strong> ${ages.length} travellers <span class="edit">Edit</span>`;
            }
        } else {
            agesElement.innerHTML = `<strong>Traveller Ages:</strong> Not specified <span class="edit">Edit</span>`;
        }
    }


    const editButton = document.querySelector('.edit');
    if (editButton) {
        editButton.addEventListener('click', function () {

            window.location.href = './index.html';
        });
    }


    const tripType = formData.tripType || 'single';
    console.log('Trip type:', tripType);


    console.log('Retrieved form data:', formData);
});


document.addEventListener("DOMContentLoaded", function () {

    const formData = JSON.parse(localStorage.getItem("travelInsuranceForm") || "{}");


    function formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '/');
    }


    const destElement = document.getElementById('destinations-summary');
    if (destElement) {
        const destinations = formData.destinations || [];
        if (destinations.length === 0) {
            destElement.textContent = 'Not specified';
        } else if (destinations.length === 1) {
            destElement.textContent = destinations[0];
        } else {
            destElement.textContent = `${destinations[0]} (+${destinations.length - 1} more)`;
        }
    }


    const datesElement = document.getElementById('dates-summary');
    if (datesElement) {
        if (formData.startDate && formData.endDate) {
            const startDate = formatDate(formData.startDate);
            const endDate = formatDate(formData.endDate);
            datesElement.textContent = `${startDate} – ${endDate}`;
        } else {
            datesElement.textContent = 'Not specified';
        }
    }


    const agesElement = document.getElementById('ages-summary');
    if (agesElement) {
        const ages = formData.ages || [];
        if (ages.length === 0) {
            agesElement.textContent = 'Not specified';
        } else if (ages.length <= 3) {
            agesElement.textContent = ages.join(', ');
        } else {
            agesElement.textContent = `${ages.length} travellers`;
        }
    }


    const editButton = document.querySelector('.edit');
    if (editButton) {
        editButton.addEventListener('click', function (e) {
            e.preventDefault();

            window.location.href = './index.html';
        });
    }


    const tripType = formData.tripType || 'single';
    console.log(`Trip type: ${tripType}`);


    if (formData.promoCode) {
        console.log(`Promo code: ${formData.promoCode}`);

    }
});






const tripData = {
    destinations: ['Australia'],
    startDate: '10/11/2025',
    endDate: '12/11/2025',
    ages: [23]
};

document.addEventListener('DOMContentLoaded', function () {
    populateSummary();
});


function populateSummary() {
    const destinationsEl = document.getElementById('destinations-summary');
    const datesEl = document.getElementById('dates-summary');
    const agesEl = document.getElementById('ages-summary');

    if (destinationsEl) {
        destinationsEl.textContent = tripData.destinations.join(', ');
    }

    if (datesEl) {
        datesEl.textContent = `${tripData.startDate} - ${tripData.endDate}`;
    }

    if (agesEl) {
        agesEl.textContent = tripData.ages.join(', ');
    }
}



document.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit')) {

        console.log('Edit clicked - would navigate to edit form');

    }
});


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
        const planName = e.target.classList.contains('dark') ? 'VOYAGER' : 'VOYAGER PLUS';
        console.log(`Selected plan: ${planName}`);


    }
});


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('link') && e.target.textContent.includes('Policy Information')) {
        console.log('View policy information clicked');

    }
});


document.addEventListener('click', function (e) {
    if (e.target.textContent.includes('Show all benefits')) {
        console.log('Show all benefits clicked');

        e.target.textContent = 'Show less benefits';
    } else if (e.target.textContent.includes('Show less benefits')) {
        e.target.textContent = 'Show all benefits';
    }
});


const stepper = document.querySelector('.stepper');
if (stepper) {
    let isDown = false;
    let startX;
    let scrollLeft;

    stepper.addEventListener('mousedown', (e) => {
        isDown = true;
        stepper.style.cursor = 'grabbing';
        startX = e.pageX - stepper.offsetLeft;
        scrollLeft = stepper.scrollLeft;
    });

    stepper.addEventListener('mouseleave', () => {
        isDown = false;
        stepper.style.cursor = 'default';
    });

    stepper.addEventListener('mouseup', () => {
        isDown = false;
        stepper.style.cursor = 'default';
    });

    stepper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - stepper.offsetLeft;
        const walk = (x - startX) * 2;
        stepper.scrollLeft = scrollLeft - walk;
    });
}

if (typeof flatpickr !== "undefined") {
    if (document.getElementById("startDate")) {
        flatpickr("#startDate", { dateFormat: "d/m/Y" });
    }
    if (document.getElementById("endDate")) {
        flatpickr("#endDate", { dateFormat: "d/m/Y" });
    }
}



const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    const planCards = document.querySelectorAll(".mobile-view .plan-card");

    planCards.forEach((card) => {
        const header = card.querySelector(".plan-header");

        header.addEventListener("click", () => {
            const isActive = card.classList.contains("active");

            planCards.forEach(c => c.classList.remove("active"));

            if (!isActive) {
                card.classList.add("active");
            }
        });
    });
});
