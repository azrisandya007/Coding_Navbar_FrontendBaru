document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("kasusForm");
    const previewBtn = document.getElementById("previewBtn");
    const previewModal = document.getElementById("previewModal");
    const previewData = document.getElementById("previewData");
    const closeModal = document.getElementById("closeModal");
    
    // AMBIL TOMBOL LOGOUT DARI NAVBAR
    const logoutBtn = document.getElementById("logout");

    const STORAGE_KEY = "dataKasus";

    // Fungsi Preview
    previewBtn.addEventListener("click", () => {
        const data = getFormData();
        previewData.innerHTML = `
            <p><strong>Tanggal:</strong> ${data.tanggal}</p>
            <p><strong>Koordinator:</strong> ${data.koordinator}</p>
            <p><strong>Nama Santri:</strong> ${data.nama}</p>
            <p><strong>Kelas:</strong> ${data.kelas}</p>
            <p><strong>Status:</strong> ${data.status}</p>
            <p><strong>Nomor Induk:</strong> ${data.induk}</p>
            <p><strong>Nomor Orang Tua:</strong> ${data.ortu}</p>
            <p><strong>Kamar:</strong> ${data.kamar}</p>
            <p><strong>Wali Kamar:</strong> ${data.wali}</p>
            <p><strong>Kronologi:</strong><br>${data.kronologi}</p>
        `;
        previewModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        previewModal.style.display = "none";
    });

    function getFormData() {
        return {
            tanggal: document.getElementById("tanggal").value,
            koordinator: document.getElementById("koordinator").value,
            nama: document.getElementById("nama").value,
            kelas: document.getElementById("kelas").value,
            status: document.getElementById("status").value,
            induk: document.getElementById("induk").value,
            ortu: document.getElementById("ortu").value,
            kamar: document.getElementById("kamar").value,
            wali: document.getElementById("wali").value,
            kronologi: document.getElementById("kronologi").value
        };
    }

    // Fungsi Simpan Data
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dataBaru = getFormData();
        let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        dataLama.push(dataBaru);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
        alert("Data berhasil disimpan!");
        window.location.href = "../RekapaData/rekap.html";
    });

    // --- FUNGSI LOGOUT YANG BARU ---
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            const yakin = confirm("Apakah Anda yakin ingin logout?");
            if (yakin) {
                window.location.href = "../Halaman_Login/login.html"; 
            }
        });
    }
});