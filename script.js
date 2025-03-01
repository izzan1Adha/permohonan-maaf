document.getElementById("btnYes").addEventListener("click", function() {
    document.getElementById("response").innerText = "Terima kasih kerana memaafkan saya! ❤";
    document.getElementById("response").style.color = "#5cb85c";
    document.getElementById("response").style.display = "block";
});

document.getElementById("btnNo").addEventListener("click", function() {
    document.getElementById("response").innerText = "Saya akan terus mencuba untuk menebus kesalahan saya... 😢";
    document.getElementById("response").style.color = "#d9534f";
    document.getElementById("response").style.display = "block";
});
