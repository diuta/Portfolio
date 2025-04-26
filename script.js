$(document).ready(function() {
    $("#Willify").on("click", function(e) {
        e.preventDefault();
        window.location.href = "https://diuta.github.io/Willify/index.html";
    });
    $("#Willify-git").on("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = "https://github.com/diuta/Willify";
    });
    $("#TEA").on("click", function(e) {
        e.preventDefault();
        window.location.href = "https://github.com/diuta/AOL-AI";
    });
    $("#TEA-git").on("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = "https://github.com/diuta/AOL-AI";
    });
});