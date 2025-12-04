// --- 1. Data Dummy Awal (DIUPDATE dengan KETERANGAN) ---
let priceList = [
    // Item Asli (Diperbarui dari permintaan pertama)
    { id: 1, nama: "KORAN (48,8 GR)", kategori: "Kertas Dasar", harga: 1500, keterangan: "Per lembar plano" }, 
    { id: 2, nama: "JASMINE MUDA", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 3, nama: "ART PAPER (150 GR) 65 X 100", kategori: "Art Paper", harga: 7500, keterangan: "Gramasi 150g" }, 
    { id: 4, nama: "LAKBAN BESAR (2\")", kategori: "LAKBAN", harga: 10000, keterangan: "Dari Foto" },
    { id: 5, nama: "KERTAS HVS A4 80", kategori: "KERTAS HVS", harga: 1200, keterangan: "Harga per rim" },

    // Item dari Foto Pertama (image_65f862.png)
    { id: 6, nama: "A4", kategori: "KORAN (48,8 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 7, nama: "61X86", kategori: "KORAN (48,8 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 8, nama: "65X100", kategori: "KORAN (48,8 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 9, nama: "JASMINE MAS", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 10, nama: "JASMINE MAROON", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 11, nama: "JASMINE COKLAT", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 12, nama: "LINEN PUTIH (230/220 GR)", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 13, nama: "LINEN HITAM", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 14, nama: "CONCORD KS", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 15, nama: "CONCORD KS F4 PUTIH", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 16, nama: "CONCORD KS F4 WARNA", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 17, nama: "CONCORD KT", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 18, nama: "BUFFALO", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 19, nama: "SEMBOJA HIJAU", kategori: "KERTAS UNDANGAN (79X109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 20, nama: "TALI", kategori: "AMPLOP COKLAT", harga: 10000, keterangan: "Dari Foto" },
    { id: 21, nama: "A3", kategori: "AMPLOP COKLAT", harga: 10000, keterangan: "Dari Foto" },
    { id: 22, nama: "SUPERMAP", kategori: "AMPLOP COKLAT", harga: 10000, keterangan: "Dari Foto" },
    { id: 23, nama: "BIASA / BAGI 4", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 24, nama: "BUKU", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 25, nama: "STIKER", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 26, nama: "YASIN", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 27, nama: "BOT", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 28, nama: "KALKIR", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 29, nama: "KORAN", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 30, nama: "KD AKIAT", kategori: "UPAH POTONG", harga: 10000, keterangan: "Dari Foto" },
    { id: 31, nama: "LAKBAN KECIL (1\")", kategori: "LAKBAN", harga: 10000, keterangan: "Dari Foto" },
    { id: 32, nama: "LAKBAN SEDANG (1,5\")", kategori: "LAKBAN", harga: 10000, keterangan: "Dari Foto" },

    // Item dari Foto Kedua (image_65edfd.png)
    { id: 33, nama: "F 60", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 34, nama: "A4 60", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 35, nama: "Q 60", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 36, nama: "F 70", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 37, nama: "A4 70", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 38, nama: "Q 70", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 39, nama: "A3 70", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 40, nama: "DF 70", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 41, nama: "B5 70", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 42, nama: "F 80", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 43, nama: "A4 80", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 44, nama: "Q 80", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 45, nama: "A3 80", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 46, nama: "DF 80", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 47, nama: "F 100", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 48, nama: "A4 100", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 49, nama: "DF 100", kategori: "KERTAS HVS", harga: 10000, keterangan: "Dari Foto" },
    { id: 50, nama: "60 GR", kategori: "HVS WARNA", harga: 10000, keterangan: "Dari Foto" },
    { id: 51, nama: "70 GR", kategori: "HVS WARNA", harga: 10000, keterangan: "Dari Foto" },
    { id: 52, nama: "TOP MC", kategori: "NCR", harga: 10000, keterangan: "Dari Foto" },
    { id: 53, nama: "MIDDLE MC", kategori: "NCR", harga: 10000, keterangan: "Dari Foto" },
    { id: 54, nama: "BOTTOM MC", kategori: "NCR", harga: 10000, keterangan: "Dari Foto" },
    { id: 55, nama: "TOP GS", kategori: "NCR", harga: 10000, keterangan: "Dari Foto" },
    { id: 56, nama: "MIDDLE GS", kategori: "NCR", harga: 10000, keterangan: "Dari Foto" },
    { id: 57, nama: "BOTTOM GS", kategori: "NCR", harga: 10000, keterangan: "Dari Foto" },
    { id: 58, nama: "K. TIK PUTIH", kategori: "KARTU TIK (79 X 109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 59, nama: "K. TIK WARNA", kategori: "KARTU TIK (79 X 109)", harga: 10000, keterangan: "Dari Foto" },
    { id: 60, nama: "B.C PUTIH", kategori: "B.C (61 X 86)", harga: 10000, keterangan: "Dari Foto" },
    { id: 61, nama: "B.C WARNA", kategori: "B.C (61 X 86)", harga: 10000, keterangan: "Dari Foto" },
    { id: 62, nama: "PUTIH", kategori: "DORSLAG (88 X 67)", harga: 10000, keterangan: "Dari Foto" },
    { id: 63, nama: "WARNA", kategori: "DORSLAG (88 X 67)", harga: 10000, keterangan: "Dari Foto" },
    
    // Item dari Foto Ketiga (image_65ed63.png)
    { id: 64, nama: "65 X 90", kategori: "ART PAPER (120 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 65, nama: "65 X 100", kategori: "ART PAPER (120 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 66, nama: "79 X 109", kategori: "ART PAPER (120 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 67, nama: "65 X 90", kategori: "ART PAPER (150 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 68, nama: "65 X 100", kategori: "ART PAPER (150 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 69, nama: "79 X 109", kategori: "ART PAPER (150 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 70, nama: "65 X 100", kategori: "ART CARTON (210 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 71, nama: "79 X 109", kategori: "ART CARTON (210 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 72, nama: "65 X 100", kategori: "ART CARTON (230 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 73, nama: "79 X 109", kategori: "ART CARTON (230 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 74, nama: "65 X 100", kategori: "ART CARTON (260 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 75, nama: "79 X 109", kategori: "ART CARTON (260 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 76, nama: "65 X 100", kategori: "ART CARTON (310 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 77, nama: "79 X 109", kategori: "ART CARTON (310 GR)", harga: 10000, keterangan: "Dari Foto" },
    { id: 78, nama: "250 GR", kategori: "DUPLEK", harga: 10000, keterangan: "Dari Foto" },
    { id: 79, nama: "310 GR", kategori: "DUPLEK", harga: 10000, keterangan: "Dari Foto" },
    { id: 80, nama: "400 GR", kategori: "DUPLEK", harga: 10000, keterangan: "Dari Foto" },
    { id: 81, nama: "250 GR PLANOAN", kategori: "DUPLEK", harga: 10000, keterangan: "Dari Foto" },
    { id: 82, nama: "310 GR PLANOAN", kategori: "DUPLEK", harga: 10000, keterangan: "Dari Foto" },
    { id: 83, nama: "400 GR PLANOAN", kategori: "DUPLEK", harga: 10000, keterangan: "Dari Foto" },
    { id: 84, nama: "CROMO (70X108)", kategori: "STIKER", harga: 10000, keterangan: "Dari Foto" },
    { id: 85, nama: "TRANSPARAN (79X98)", kategori: "STIKER", harga: 10000, keterangan: "Dari Foto" },
    { id: 86, nama: "HVS (70X108)", kategori: "STIKER", harga: 10000, keterangan: "Dari Foto" },
    { id: 87, nama: "VYNNIL (86X106)", kategori: "STIKER", harga: 10000, keterangan: "Dari Foto" },
    { id: 88, nama: "BOT 30 (3 MILI)", kategori: "BOT (65 X 76)", harga: 10000, keterangan: "Dari Foto" },
    { id: 89, nama: "BOT 40 (2 MILI)", kategori: "BOT (65 X 76)", harga: 10000, keterangan: "Dari Foto" },
    { id: 90, nama: "BOT FOLIO/A4 (BOT 30)", kategori: "BOT (65 X 76)", harga: 10000, keterangan: "Dari Foto" },
    { id: 91, nama: "BOT TIPIS PER PAK", kategori: "BOT (65 X 76)", harga: 10000, keterangan: "Dari Foto" },
    { id: 92, nama: "BOT TIPIS PER LEMBAR", kategori: "BOT (65 X 76)", harga: 10000, keterangan: "Dari Foto" },
    { id: 93, nama: "COVER LBR", kategori: "BOT (65 X 76)", harga: 10000, keterangan: "Dari Foto" },
    { id: 94, nama: "COVER PJG", kategori: "BOT (65 X 76)", harga: 10000, keterangan: "Dari Foto" },
    { id: 95, nama: "SAMSON 70 PER PLANO", kategori: "SAMSON (90 X 120)", harga: 10000, keterangan: "Dari Foto" },
    { id: 96, nama: "SAMSON 70 ECERAN", kategori: "SAMSON (90 X 120)", harga: 10000, keterangan: "Dari Foto" },
    { id: 97, nama: "SAMSON 80 PER PLANO", kategori: "SAMSON (90 X 120)", harga: 10000, keterangan: "Dari Foto" },
    { id: 98, nama: "SAMSON 80 ECERAN", kategori: "SAMSON (90 X 120)", harga: 10000, keterangan: "Dari Foto" },

    // Item Baru dari Foto Keempat (image_65ed02.png)
    { id: 99, nama: "CONT FORM 1 PLY", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 100, nama: "CONT FORM 2 PLY", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 101, nama: "CONT FORM 3 PLY", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 102, nama: "CONT FORM 4 PLY", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 103, nama: "LEM GALON", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 104, nama: "LEM PLASTIK", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 105, nama: "KALKIR F4", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 106, nama: "KALKIR LEMBARAN", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 107, nama: "KALKIR KECIL 2", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 108, nama: "MIKA PUTIH", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 109, nama: "MIKA WARNA", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 110, nama: "BUFFALO PAK", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 111, nama: "BOX KOSONG", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 112, nama: "NEW TOP", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 113, nama: "SUPER NEW TOP", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 114, nama: "PLASTIK SWALAYAN", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 115, nama: "LAMINATING ROLL MATTE", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 116, nama: "LAMINATING ROLL GLOSSY", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 117, nama: "KERTAS FOTO", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 118, nama: "LABEL", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 119, nama: "LAMINATING FOLIO", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 120, nama: "LINEN ROLL", kategori: "LAIN-LAIN", harga: 10000, keterangan: "Dari Foto" },
    { id: 121, nama: "NEW CAHAYA YELLOW", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 122, nama: "NEW CAHAYA MAGENTA", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 123, nama: "NEW CAHAYA CYAN", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 124, nama: "NEW CAHAYA BLACK", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 125, nama: "NEW ECHO CYAN", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 126, nama: "NEW ECHO BLACK", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 127, nama: "NEW ECHO GREEN", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 128, nama: "NEW ECHO WHITE", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 129, nama: "NEW ECHO BRONZE RED", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 130, nama: "NEW ECHO REFLEK BLUE", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 131, nama: "ETCHING NPH (BULAT)", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
    { id: 132, nama: "ETCHING NH3 (BIRU KOTAK)", kategori: "TINTA/ETCHING", harga: 10000, keterangan: "Dari Foto" },
];

// --- 2. Fungsi Memuat Data dari Local Storage atau Dummy ---
function loadData() {
    const storedData = localStorage.getItem('priceList');
    if (storedData) {
        priceList = JSON.parse(storedData);
    }
    renderTable();
}

// --- 3. Fungsi Render Tabel (DIUPDATE) ---
function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Kosongkan tabel

    priceList.forEach((item) => {
        const row = tableBody.insertRow();
        
        row.insertCell().textContent = item.nama;
        row.insertCell().textContent = item.kategori;
        
        // Sel Harga (dengan format Rupiah)
        row.insertCell().textContent = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(item.harga);

        // Sel Keterangan (BARU)
        row.insertCell().textContent = item.keterangan || '-';
        
        // Sel Aksi (Tombol Edit dan Delete)
        const actionCell = row.insertCell();
        actionCell.className = 'action-buttons';

        // Tombol Edit
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = () => openModal(item.id);
        
        // Tombol Delete
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteItem(item.id);

        actionCell.appendChild(editBtn);
        actionCell.appendChild(deleteBtn);
    });
}

// --- 4. Fungsi Tambah Data (DIUPDATE) ---
document.getElementById('addItemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const harga = parseInt(document.getElementById('harga').value);
    const keterangan = document.getElementById('keterangan').value; // INPUT BARU

    // Dapatkan ID tertinggi saat ini + 1 untuk ID unik baru
    const newId = priceList.length > 0 ? Math.max(...priceList.map(item => item.id)) + 1 : 1;

    const newItem = {
        id: newId,
        nama: nama.toUpperCase(),
        kategori: kategori,
        harga: harga,
        keterangan: keterangan // SIMPAN KETERANGAN
    };

    priceList.push(newItem);
    saveData();
    renderTable();

    this.reset();
});

// --- 5. Fungsi Hapus Data ---
function deleteItem(id) {
    if (confirm("Apakah Anda yakin ingin menghapus item ini?")) {
        priceList = priceList.filter(item => item.id !== id);
        saveData();
        renderTable();
    }
}

// --- 6. Fungsi Modal dan Edit Data (BARU) ---

// Buka Modal dan Isi Data
function openModal(id) {
    const item = priceList.find(i => i.id === id);
    if (!item) return;

    document.getElementById('editId').value = item.id;
    document.getElementById('editNama').value = item.nama;
    document.getElementById('editKategori').value = item.kategori;
    document.getElementById('editHarga').value = item.harga;
    document.getElementById('editKeterangan').value = item.keterangan;

    document.getElementById('editModal').style.display = 'block';
}

// Tutup Modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Simpan Perubahan Edit
document.getElementById('editItemForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = parseInt(document.getElementById('editId').value);
    const nama = document.getElementById('editNama').value;
    const kategori = document.getElementById('editKategori').value;
    const harga = parseInt(document.getElementById('editHarga').value);
    const keterangan = document.getElementById('editKeterangan').value;

    const itemIndex = priceList.findIndex(i => i.id === id);

    if (itemIndex > -1) {
        priceList[itemIndex].nama = nama.toUpperCase();
        priceList[itemIndex].kategori = kategori;
        priceList[itemIndex].harga = harga;
        priceList[itemIndex].keterangan = keterangan;

        saveData();
        renderTable();
        closeModal();
    }
});

// Tutup modal jika user klik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target == modal) {
        closeModal();
    }
}

// --- 7. Fungsi Pencarian Real-time (TIDAK BERUBAH) ---
function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const tableBody = document.getElementById('tableBody');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        // Cek Nama Item (indeks 0) dan Kategori (indeks 1)
        const nameCell = rows[i].getElementsByTagName('td')[0];
        const categoryCell = rows[i].getElementsByTagName('td')[1];
        if (nameCell || categoryCell) {
            const nameValue = nameCell.textContent || nameCell.innerText;
            const categoryValue = categoryCell.textContent || categoryCell.innerText;
            
            // Mencari di Nama Item ATAU Kategori
            if (nameValue.toUpperCase().indexOf(filter) > -1 || categoryValue.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = ""; 
            } else {
                rows[i].style.display = "none"; 
            }
        }       
    }
}

// --- 8. Fungsi Simpan Data ke Local Storage ---
function saveData() {
    localStorage.setItem('priceList', JSON.stringify(priceList));
}

// --- 9. Jalankan Saat Halaman Dimuat ---
window.onload = loadData;