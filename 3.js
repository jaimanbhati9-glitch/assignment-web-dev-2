const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvents = [
    {
        title: "Emifest",
        date: "2026-01-14",
        category: "Social",
        description: "lorem ipsum"
    },
    {
        title: "Tech Workshop",
        date: "2026-02-20",
        category: "Workshop",
        description: "Advanced JavaScript DOM manipulation session."
    }
];


function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-item"; 
    card.innerHTML = `
        <span class="delete-btn">✖</span>
        <h3>${eventData.title}</h3>
        <div class="event-meta">📅 ${eventData.date}</div>
        <span class="category-tag">${eventData.category}</span>
        <p class="desc-text">${eventData.description}</p>
    `;
    return card;
}


function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();
    
    const newCard = createEventCard(eventData);
    eventContainer.appendChild(newCard);
}


eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    
    addEvent(eventData);
    eventForm.reset();
});


clearAllBtn.addEventListener("click", () => {
    
    eventContainer.innerHTML = `<p class="empty-state">No events yet. Add your first event!</p>`;
});


addSampleBtn.addEventListener("click", () => {
    
    sampleEvents.forEach(item => addEvent(item));
});


eventContainer.addEventListener("click", (event) => {
    
    if (event.target.classList.contains("delete-btn")) {
        
        const card = event.target.closest(".event-item");
        card.remove();
        
        
        if (eventContainer.children.length === 0) {
            eventContainer.innerHTML = `<p class="empty-state">No events yet. Add your first event!</p>`;
        }
    }
});