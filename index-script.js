// Define global variables
var scores = {}; // Object which contains student progress, format detailed in teacher-stats-overlay.html
var currentStudentName = ""; // Current student answering questions
var resultOverlayContainer = document.querySelector("overlay-container");
var resultOverlay = document.querySelector("teacher-stats-overlay");
var pageSwitcher = document.querySelector("page-switcher");

// This function is executed when a level fixture fires a "completed" event. It updates the scores object.
function addScore(event)
{
    if (!scores[currentStudentName])
    {
        scores[currentStudentName] = {};
    }

    scores[currentStudentName][event.detail.levelName] = [ event.detail.questionsCorrect, event.detail.questionsTotal ];
    resultOverlay.updateScores(scores);
}

// Event listeners for days
document.querySelector("name-entry-page").addEventListener("name-entered", (event) => currentStudentName = event.detail);
document.querySelector("level-fixture[page-name='level-1']").addEventListener("completed", addScore);
document.querySelector("level-fixture[page-name='level-2']").addEventListener("completed", addScore);
document.querySelector("level-fixture[page-name='level-3']").addEventListener("completed", addScore);
document.querySelector("level-fixture[page-name='level-4']").addEventListener("completed", addScore);
document.querySelector("level-fixture[page-name='level-5']").addEventListener("completed", addScore);
document.querySelector("button").addEventListener("click", () => resultOverlayContainer.reveal());
document.querySelector(".logo").addEventListener("click", () => pageSwitcher.page = "main");