// $(document).ready(


$(() => {
    console.log('jq doc is ready');

    $('#playerName').on('keyup', function () {
        echoInput($(this).val(), 'greetPlayer')


    });


    $(function () {
        $("#gamePiece").draggable();
        $("#winGame").droppable({
            drop: function (event, ui) {
                console.log('ready to drop');
                $(this)
                    .css("background-color", "green")
                    .addClass("ui-state-highlight")
                    .find("p")
                    .html("You Win!!");
                score = parseInt(score) + 100;
                $("#score").text(score);
                sessionStorage.setItem("score", score);
                $("#scoreBoard").text(score);
                const modal = new bootstrap.Modal(
                    document.getElementById("gameModal"));
                    modal.show();
            }
        });
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     console.log('dom content is loaded');


//     document.getElementById("playerName")
//     .addEventListener("keyup", function() {
//     echoInput (this.value, 'greetPlayer')});


// });

function echoInput(input, targetId) {

    if (input.trim() === "") {

        const guests = [
            "GuestLion",
            "GuestTiger",
            "GuestWolf",
            "GuestBear",
            "GuestFox"
        ];

        input = guests[Math.floor(Math.random() * guests.length)];
    }

    document.getElementById(targetId).textContent =
        `Hello ${input}!`;
}

let score = sessionStorage.getItem("score");

if (score == null) {
    score = 0;
}

$("#score").text(score);

$("#startBtn").click(function () {
    alert("Drag the lion into the goal!");
});

$("#browser").text(
"Browser: " + navigator.userAgent);

$("#dateTime").text(
new Date().toLocaleString());