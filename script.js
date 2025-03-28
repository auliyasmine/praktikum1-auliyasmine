document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const gifContainer = document.getElementById("gifContainer");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const nim = document.getElementById("nim").value;
        const jurusan = document.getElementById("jurusan").value;

        const gifs = ["assets/gif1.gif", "assets/gif2.gif"];
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

        gifContainer.innerHTML = `<img src="${randomGif}" alt="GIF Pilihan" style="width: 100%; max-width: 400px;">`;
    });
});
