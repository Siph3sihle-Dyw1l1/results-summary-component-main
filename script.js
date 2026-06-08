const summaryList = document.getElementById("summary_list");

const localData = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
];

function populateSummary() {
    for (let i = 0; i < localData.length; i++) {
        const item = localData[i];

        // 1. Fixed string interpolation and matched it to your CSS classes
        const cssClass = item.category.toLowerCase();
        const li = document.createElement("li");


        li.classList.add("summary_item", cssClass);


        li.innerHTML = `
    <div class="summary_item_left">
        <img src="${item.icon}" alt="${item.category} icon" class="summary_item_icon">
        <span class="summary_item_name">${item.category}</span>
    </div>
    <span class="summary_item_score">
        ${item.score} <span>/ 100</span>
    </span>
`;

        summaryList.appendChild(li);
    }
}

populateSummary();

let total = 0;
for (let i = 0; i < localData.length; i++) {
    total += localData[i].score;
}
let average = Math.round(total / localData.length);
document.getElementById("avg_score").textContent = average;