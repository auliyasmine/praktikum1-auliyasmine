document.getElementById("formMahasiswa").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let gifUrl = "assets/gif1.gif"; 
    document.getElementById("gifImg").src = gifUrl;
    
    let modal = document.getElementById("gifModal");
    modal.style.display = "block";

    document.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
