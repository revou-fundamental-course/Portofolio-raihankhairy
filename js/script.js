// Ini javascript

// Ini Buat Autoslide
let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

// Ini Buat Autoslide Content
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Ini Buat Tanya Siapa Namamu
function replaceName() {
    let name = prompt("Please enter your name", "Khairy");
    document.getElementById("name").innerHTML = name;
}

 replaceName();

// Ini Buat Submit Muncul Di Kotak  
 document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let tanggalLahir = document.getElementById('tanggal_lahir').value;
    let jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
    let pesan = document.getElementById('pesan').value;

    let isValid = true;

    // Clear previous error messages
    document.getElementById('namaError').textContent = '';
    document.getElementById('tanggalLahirError').textContent = '';
    document.getElementById('jenisKelaminError').textContent = '';
    document.getElementById('pesanError').textContent = '';

    if (nama === '') {
        document.getElementById('namaError').textContent = 'Nama tidak boleh kosong';
        isValid = false;
    }

    if (tanggalLahir === '') {
        document.getElementById('tanggalLahirError').textContent = 'Tanggal Lahir tidak boleh kosong';
        isValid = false;
    }

    if (!jenisKelamin) {
        document.getElementById('jenisKelaminError').textContent = 'Jenis Kelamin tidak boleh kosong';
        isValid = false;
    }

    if (pesan === '') {
        document.getElementById('pesanError').textContent = 'Pesan tidak boleh kosong';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('output-nama').textContent = nama;
        document.getElementById('output-tanggal-lahir').textContent = tanggalLahir;
        document.getElementById('output-jenis-kelamin').textContent = jenisKelamin.value;
        document.getElementById('output-pesan').textContent = pesan;
        document.getElementById('current-time').textContent = new Date().toLocaleString();
    }
});