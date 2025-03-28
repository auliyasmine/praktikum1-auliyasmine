document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const gifContainer = document.getElementById("gifContainer");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Pilih GIF otomatis
        let gifUrl = "assets/gif1.gif"; // Sesuaikan path gif
        gifContainer.innerHTML = `<img src="${gifUrl}" alt="GIF Pilihan" style="width: 100%; max-width: 400px;">`;
    });
});
