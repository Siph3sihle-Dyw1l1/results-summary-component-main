document.addEventListener("DOMContentLoaded", function () {
    fetch('./data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showAverageScore(data);
            buildSummaryList(data);
        })
        .catch(function (error) {
            console.error("The was a problem with loading data.json", error);
        });
});

function showAverageScore(data) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].score;
    }

    let average = Math.round(total / data.length);

    let avg_score = document.getElementById("avg_score").textContent = average;

}

function buildSummaryList(data) {
    let list = document.getElementById("summary_list");

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
    }

    let li = document.createElement("li");

    li.classList.add("summary_item");
    li.classList.add(item.category.toLowercase());

    let leftDiv = docoment.createElement("div");
    leftDiv.classList.add("summary_item_left");

    let icon = document.createElement("img");
    icon.src = item.icon;

    icon.alt = item.category;
    icon.classList.add("summary_item_icon");

    let name = document.createElement("span");
    name.classList.add("summary_item_name");
    name.textContent = item.category;

    leftDiv.appendChild(icon);
    leftDiv.appendChild(name);

    let score_span = document.createElement("span");
    score_span.classList.add("summary_item_score");
    score_span.innerHTML = item.score + " <span>/ 100</span>";

    li.appendChild(leftDiv);
    li.appendChild(score_span);
    list.appendChild(li);




}