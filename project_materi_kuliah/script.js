// Data Materi Per Pertemuan - Pemrograman Web (14 Pertemuan)
const daftarMateri = [
    {
        id: 1,
        judul: "Pengenalan Pemrograman Web",
        deskripsi: "Konsep dasar web, arsitektur client-server, dan perkenalan teknologi web modern.",
        pokokBahasan: [
            "Sejarah dan Evolusi Web",
            "Arsitektur Client-Server",
            "Frontend vs Backend",
            "Tools Development Web",
            "Workflow Pengembangan"
        ],
        link: "pertemuan/pertemuan-1.html"
    },
    {
        id: 2,
        judul: "HTML5: Struktur & Semantik",
        deskripsi: "Menguasai elemen HTML5 semantik untuk struktur website yang baik dan aksesibel.",
        pokokBahasan: [
            "Doctype & Struktur Dasar",
            "Elemen Semantik (header, nav, etc)",
            "Form dan Input Types Baru",
            "Audio dan Video HTML5",
            "Canvas Dasar"
        ],
        link: "pertemuan/pertemuan-2.html"
    },
    {
        id: 3,
        judul: "CSS3: Styling Modern",
        deskripsi: "Teknik styling dengan CSS3 termasuk flexbox, grid, dan animasi.",
        pokokBahasan: [
            "Selector dan Specificity",
            "Box Model & Positioning",
            "Flexbox Layout",
            "CSS Grid",
            "Transition & Animation"
        ],
        link: "pertemuan/pertemuan-3.html"
    },
    {
        id: 4,
        judul: "JavaScript Dasar",
        deskripsi: "Fundamental pemrograman JavaScript: variabel, tipe data, operator, dan kontrol flow.",
        pokokBahasan: [
            "Variabel (let, const, var)",
            "Tipe Data dan Operator",
            "Kondisional (if, switch)",
            "Perulangan (for, while)",
            "Function dan Scope"
        ],
        link: "pertemuan/pertemuan-4.html"
    },
    {
        id: 5,
        judul: "DOM Manipulation",
        deskripsi: "Memahami dan memanipulasi Document Object Model dengan JavaScript.",
        pokokBahasan: [
            "Konsep DOM Tree",
            "Selektor DOM (querySelector)",
            "Mengubah Konten & Style",
            "Event Handling",
            "Membuat Elemen Dinamis"
        ],
        link: "pertemuan/pertemuan-5.html"
    },
    {
        id: 6,
        judul: "Responsive Web Design",
        deskripsi: "Membuat website responsif dengan media queries dan teknik mobile-first.",
        pokokBahasan: [
            "Mobile-First Approach",
            "Media Queries",
            "Unit Relatif (em, rem, vh, vw)",
            "Flexible Images",
            "Testing Responsiveness"
        ],
        link: "pertemuan/pertemuan-6.html"
    },
    {
        id: 7,
        judul: "Bootstrap Framework",
        deskripsi: "Menggunakan framework Bootstrap untuk pengembangan web yang cepat.",
        pokokBahasan: [
            "Grid System Bootstrap",
            "Komponen Bootstrap",
            "Utilities dan Helpers",
            "Customizing Bootstrap",
            "Bootstrap Icons"
        ],
        link: "pertemuan/pertemuan-7.html"
    },
    {
        id: 8,
        judul: "PHP Dasar",
        deskripsi: "Pengenalan pemrograman server-side dengan PHP.",
        pokokBahasan: [
            "Sintaks Dasar PHP",
            "Variable dan Tipe Data",
            "Control Structures",
            "Array dan Looping",
            "Function PHP"
        ],
        link: "pertemuan/pertemuan-8.html"
    },
    {
        id: 9,
        judul: "Form Handling & Validation",
        deskripsi: "Menangani dan memvalidasi form dengan PHP dan JavaScript.",
        pokokBahasan: [
            "Form Method (GET vs POST)",
            "Validasi Client-side",
            "Validasi Server-side",
            "Sanitasi Input",
            "File Upload"
        ],
        link: "pertemuan/pertemuan-9.html"
    },
    {
        id: 10,
        judul: "Database MySQL",
        deskripsi: "Konsep database relasional dan penggunaan MySQL dengan PHP.",
        pokokBahasan: [
            "Konsep Database Relasional",
            "SQL Dasar (SELECT, INSERT, etc)",
            "PHP MySQLi",
            "CRUD Operations",
            "Database Normalization"
        ],
        link: "pertemuan/pertemuan-10.html"
    },
    {
        id: 11,
        judul: "Sessions & Cookies",
        deskripsi: "Manajemen state dan autentikasi dengan sessions dan cookies.",
        pokokBahasan: [
            "HTTP Stateless Nature",
            "Cookies Implementation",
            "Session Management",
            "Login/Logout System",
            "Security Considerations"
        ],
        link: "pertemuan/pertemuan-11.html"
    },
    {
        id: 12,
        judul: "RESTful API",
        deskripsi: "Konsep dan implementasi REST API dengan PHP.",
        pokokBahasan: [
            "Konsep REST Architecture",
            "HTTP Methods (GET, POST, PUT, DELETE)",
            "JSON Data Format",
            "Membuat API Sederhana",
            "API Consumption dengan JavaScript"
        ],
        link: "pertemuan/pertemuan-12.html"
    },
    {
        id: 13,
        judul: "JavaScript Modern (ES6+)",
        deskripsi: "Fitur modern JavaScript untuk pengembangan web kontemporer.",
        pokokBahasan: [
            "Arrow Functions",
            "Destructuring",
            "Template Literals",
            "Promises & Async/Await",
            "Modules"
        ],
        link: "pertemuan/pertemuan-13.html"
    },
    {
        id: 14,
        judul: "Project: Website Dinamis",
        deskripsi: "Membangun website dinamis lengkap dengan frontend dan backend.",
        pokokBahasan: [
            "Project Planning",
            "Database Design",
            "Frontend Development",
            "Backend Integration",
            "Deployment Preparation"
        ],
        link: "pertemuan/pertemuan-14.html"
    }
];

// Fungsi untuk Menampilkan Kartu Materi ke Halaman
function tampilkanMateri() {
    const container = document.getElementById('daftarMateri');
    if (!container) return;

    container.innerHTML = daftarMateri.map(materi => `
        <article class="materi-card">
            <div class="card-header">
                <div class="pertemuan-num">Pertemuan ${materi.id}</div>
                <h3>${materi.judul}</h3>
            </div>
            <div class="card-body">
                <p>${materi.deskripsi}</p>
                <ul>
                    ${materi.pokokBahasan.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
                </ul>
            </div>
            <div class="card-footer">
                <a href="${materi.link}" class="btn-detail">Buka Materi Lengkap <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
}

// Fungsi untuk Toggle Menu pada Mobile
function setupMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Ganti ikon
            const icon = toggleButton.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Fungsi untuk Mengatur Tahun di Footer
function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Inisialisasi semua fungsi saat halaman siap
document.addEventListener('DOMContentLoaded', function() {
    tampilkanMateri(); // 1. Tampilkan semua kartu materi
    setupMenuToggle(); // 2. Aktifkan menu mobile
    setCurrentYear();  // 3. Set tahun di footer

    console.log('Website materi kuliah siap!');
});