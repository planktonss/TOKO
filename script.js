// --- 1. Data Dummy Awal (DIUPDATE dengan KETERANGAN) ---
// --- 1. Data Daftar Harga (Diambil & Dinormalisasi dari input Anda) ---
let priceList = [
    // KERTAS KORAN / PLANO BESAR
    { id: 1, nama: "FOLIO", kategori: "KORAN (48,8 gr)", harga: 1500, keterangan: "Per plano" },
    { id: 2, nama: "A4", kategori: "KORAN (48,8 gr)", harga: 5500, keterangan: "Per plano" },
    { id: 3, nama: "61 X 86", kategori: "KORAN (48,8 gr)", harga: 7500, keterangan: "Per plano" },
    { id: 4, nama: "65 X 100", kategori: "KORAN (48,8 gr)", harga: 22000, keterangan: "Per plano" },

    // KERTAS UNDANGAN (79 X 109)
    { id: 5, nama: "JASMINE MUDA", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 12000, keterangan: "Harga plano" },
    { id: 6, nama: "JASMINE MAS", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 13000, keterangan: "Harga plano" },
    { id: 7, nama: "JASMINE MAROON", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 15000, keterangan: "Harga plano" },
    { id: 8, nama: "JASMINE COKLAT", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 15000, keterangan: "Harga plano" },
    { id: 9, nama: "LINEN PUTIH (210/220 GR)", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 16000, keterangan: "Harga plano" },
    { id: 10, nama: "LINEN HITAM", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 18000, keterangan: "Harga plano" },
    { id: 11, nama: "CONCORD KS", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 11000, keterangan: "Harga plano" },
    { id: 12, nama: "CONCORD KS F4 PUTIH", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 12000, keterangan: "Harga plano" },
    { id: 13, nama: "CONCORD KS F4 WARNA", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 13000, keterangan: "Harga plano" },
    { id: 14, nama: "CONCORD KT", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 12000, keterangan: "Harga plano" },
    { id: 15, nama: "BUFFALO", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 8000, keterangan: "Harga plano" },
    { id: 16, nama: "SEMBOJA HIJAU", kategori: "KERTAS UNDANGAN (79 X 109)", harga: 9000, keterangan: "Harga plano" },

    // AMPLOP & MAP
    { id: 17, nama: "AMPLOP PUTIH", kategori: "AMPLOP", harga: 20000, keterangan: "Harga per box" },
    { id: 18, nama: "TALI", kategori: "AMPLOP COKLAT", harga: 2000, keterangan: "Harga per meter" },
    { id: 19, nama: "A3", kategori: "AMPLOP COKLAT", harga: 2000, keterangan: "Harga per lembar" },
    { id: 20, nama: "SUPERMAP", kategori: "AMPLOP COKLAT", harga: 5000, keterangan: "Harga per lembar" },

    // LAKBAN
    { id: 21, nama: "LAKBAN KECIL (1\")", kategori: "LAKBAN", harga: 15000, keterangan: "Per roll" },
    { id: 22, nama: "LAKBAN SEDANG (1.5\")", kategori: "LAKBAN", harga: 20000, keterangan: "Per roll" },
    { id: 23, nama: "LAKBAN BESAR (2\")", kategori: "LAKBAN", harga: 25000, keterangan: "Per roll" },

    // UPAH POTONG
    { id: 24, nama: "BIASA / BAGI 4", kategori: "UPAH POTONG", harga: 5000, keterangan: "Biaya jasa per rim/plano" },
    { id: 25, nama: "BUKU", kategori: "UPAH POTONG", harga: 7500, keterangan: "Biaya jasa per rim" },
    { id: 26, nama: "STIKER", kategori: "UPAH POTONG", harga: 8000, keterangan: "Biaya jasa per rim" },
    { id: 27, nama: "YASIN", kategori: "UPAH POTONG", harga: 10000, keterangan: "Biaya jasa per rim" },
    { id: 28, nama: "BOT", kategori: "UPAH POTONG", harga: 15000, keterangan: "Biaya jasa per plano" },
    { id: 29, nama: "KALKIR", kategori: "UPAH POTONG", harga: 7000, keterangan: "Biaya jasa per rim" },
    { id: 30, nama: "KORAN", kategori: "UPAH POTONG", harga: 6000, keterangan: "Biaya jasa per rim" },
    { id: 31, nama: "KO AKIAT", kategori: "UPAH POTONG", harga: 6000, keterangan: "Biaya jasa per rim" },

    // KERTAS HVS
    { id: 32, nama: "F 60", kategori: "KERTAS HVS", harga: 38000, keterangan: "Per rim 60 gr" },
    { id: 33, nama: "A4 60", kategori: "KERTAS HVS", harga: 37000, keterangan: "Per rim 60 gr" },
    { id: 34, nama: "Q 60", kategori: "KERTAS HVS", harga: 36000, keterangan: "Per rim 60 gr" },
    { id: 35, nama: "F 70", kategori: "KERTAS HVS", harga: 42000, keterangan: "Per rim 70 gr" },
    { id: 36, nama: "A4 70", kategori: "KERTAS HVS", harga: 41000, keterangan: "Per rim 70 gr" },
    { id: 37, nama: "Q 70", kategori: "KERTAS HVS", harga: 40000, keterangan: "Per rim 70 gr" },
    { id: 38, nama: "A3 70", kategori: "KERTAS HVS", harga: 80000, keterangan: "Per rim 70 gr" },
    { id: 39, nama: "DF 70", kategori: "KERTAS HVS", harga: 45000, keterangan: "Per rim 70 gr" },
    { id: 40, nama: "B5 70", kategori: "KERTAS HVS", harga: 35000, keterangan: "Per rim 70 gr" },
    { id: 41, nama: "F 80", kategori: "KERTAS HVS", harga: 48000, keterangan: "Per rim 80 gr" },
    { id: 42, nama: "A4 80", kategori: "KERTAS HVS", harga: 47000, keterangan: "Per rim 80 gr" },
    { id: 43, nama: "Q 80", kategori: "KERTAS HVS", harga: 46000, keterangan: "Per rim 80 gr" },
    { id: 44, nama: "A3 80", kategori: "KERTAS HVS", harga: 95000, keterangan: "Per rim 80 gr" },
    { id: 45, nama: "DF 80", kategori: "KERTAS HVS", harga: 50000, keterangan: "Per rim 80 gr" },
    { id: 46, nama: "F 100", kategori: "KERTAS HVS", harga: 60000, keterangan: "Per rim 100 gr" },
    { id: 47, nama: "A4 100", kategori: "KERTAS HVS", harga: 58000, keterangan: "Per rim 100 gr" },
    { id: 48, nama: "DF 100", kategori: "KERTAS HVS", harga: 62000, keterangan: "Per rim 100 gr" },

    // HVS WARNA
    { id: 49, nama: "60 GR", kategori: "HVS WARNA", harga: 40000, keterangan: "Per rim" },
    { id: 50, nama: "70 GR", kategori: "HVS WARNA", harga: 45000, keterangan: "Per rim" },

    // DORSLAG (88 X 67)
    { id: 51, nama: "PUTIH", kategori: "DORSLAG (88 X 67)", harga: 2000, keterangan: "Per lembar plano" },
    { id: 52, nama: "WARNA", kategori: "DORSLAG (88 X 67)", harga: 2500, keterangan: "Per lembar plano" },

    // B.C (61X86)
    { id: 53, nama: "B.C PUTIH", kategori: "B.C (61X86)", harga: 11000, keterangan: "Per lembar plano" },
    { id: 54, nama: "B.C WARNA", kategori: "B.C (61X86)", harga: 12000, keterangan: "Per lembar plano" },

    // KARTU TIK (79X109)
    { id: 55, nama: "K. TIK PUTIH", kategori: "KARTU TIK (79X109)", harga: 14000, keterangan: "Per lembar plano" },
    { id: 56, nama: "K. TIK WARNA", kategori: "KARTU TIK (79X109)", harga: 15000, keterangan: "Per lembar plano" },

    // NCR
    { id: 57, nama: "TOP MC", kategori: "NCR", harga: 16000, keterangan: "Per lembar plano" },
    { id: 58, nama: "MIDDLE MC", kategori: "NCR", harga: 15000, keterangan: "Per lembar plano" },
    { id: 59, nama: "BOTTOM MC", kategori: "NCR", harga: 14000, keterangan: "Per lembar plano" },
    { id: 60, nama: "TOP GS", kategori: "NCR", harga: 18000, keterangan: "Per lembar plano" },
    { id: 61, nama: "MIDDLE GS", kategori: "NCR", harga: 17000, keterangan: "Per lembar plano" },
    { id: 62, nama: "BOTTOM GS", kategori: "NCR", harga: 16000, keterangan: "Per lembar plano" },

    // ART PAPER (120 GR)
    { id: 63, nama: "65 X 90", kategori: "ART PAPER (120 GR)", harga: 8000, keterangan: "Per lembar plano" },
    { id: 64, nama: "65 X 100", kategori: "ART PAPER (120 GR)", harga: 9000, keterangan: "Per lembar plano" },
    { id: 65, nama: "79 X 109", kategori: "ART PAPER (120 GR)", harga: 11000, keterangan: "Per lembar plano" },

    // ART PAPER (150 GR)
    { id: 66, nama: "65 X 90", kategori: "ART PAPER (150 GR)", harga: 9500, keterangan: "Per lembar plano" },
    { id: 67, nama: "65 X 100", kategori: "ART PAPER (150 GR)", harga: 10500, keterangan: "Per lembar plano" },
    { id: 68, nama: "79 X 109", kategori: "ART PAPER (150 GR)", harga: 12500, keterangan: "Per lembar plano" },

    // ART CARTON (210 GR)
    { id: 69, nama: "65 X 100", kategori: "ART CARTON (210 GR)", harga: 13000, keterangan: "Per lembar plano" },
    { id: 70, nama: "79 X 109", kategori: "ART CARTON (210 GR)", harga: 15000, keterangan: "Per lembar plano" },

    // ART CARTON (230 GR)
    { id: 71, nama: "65 X 100", kategori: "ART CARTON (230 GR)", harga: 15000, keterangan: "Per lembar plano" },
    { id: 72, nama: "79 X 109", kategori: "ART CARTON (230 GR)", harga: 17000, keterangan: "Per lembar plano" },

    // ART CARTON (260 GR)
    { id: 73, nama: "65 X 100", kategori: "ART CARTON (260 GR)", harga: 17000, keterangan: "Per lembar plano" },
    { id: 74, nama: "79 X 109", kategori: "ART CARTON (260 GR)", harga: 20000, keterangan: "Per lembar plano" },

    // ART CARTON (310 GR)
    { id: 75, nama: "65 X 100", kategori: "ART CARTON (310 GR)", harga: 22000, keterangan: "Per lembar plano" },
    { id: 76, nama: "79 X 109", kategori: "ART CARTON (310 GR)", harga: 25000, keterangan: "Per lembar plano" },

    // DUPLEK
    { id: 77, nama: "250 GR", kategori: "DUPLEK", harga: 8000, keterangan: "Per lembar plano" },
    { id: 78, nama: "310 GR", kategori: "DUPLEK", harga: 9500, keterangan: "Per lembar plano" },
    { id: 79, nama: "400 GR", kategori: "DUPLEK", harga: 12000, keterangan: "Per lembar plano" },
    { id: 80, nama: "250 GR PLANOAN", kategori: "DUPLEK", harga: 7500, keterangan: "Per lembar" },
    { id: 81, nama: "310 GR PLANOAN", kategori: "DUPLEK", harga: 9000, keterangan: "Per lembar" },
    { id: 82, nama: "400 GR PLANOAN", kategori: "DUPLEK", harga: 11500, keterangan: "Per lembar" },

    // STIKER
    { id: 83, nama: "CROMO (70X108)", kategori: "STIKER", harga: 18000, keterangan: "Per lembar plano" },
    { id: 84, nama: "TRANSPARAN (79 X 98)", kategori: "STIKER", harga: 25000, keterangan: "Per lembar plano" },
    { id: 85, nama: "HVS (70X108)", kategori: "STIKER", harga: 17000, keterangan: "Per lembar plano" },
    { id: 86, nama: "VYNIL (86 X 106)", kategori: "STIKER", harga: 30000, keterangan: "Per lembar plano" },

    // BOT (65 X 76)
    { id: 87, nama: "BOT 30 (3 MILI)", kategori: "BOT (65 X 76)", harga: 15000, keterangan: "Per lembar plano" },
    { id: 88, nama: "BOT 40 (2 MILI)", kategori: "BOT (65 X 76)", harga: 13000, keterangan: "Per lembar plano" },
    { id: 89, nama: "BOT FOLIO/A4 (BOT30)", kategori: "BOT (65 X 76)", harga: 4000, keterangan: "Per lembar" },
    { id: 90, nama: "BOT TIPIS PER PAK", kategori: "BOT (65 X 76)", harga: 20000, keterangan: "Per pak" },
    { id: 91, nama: "BOT TIPIS PER LEMBAR", kategori: "BOT (65 X 76)", harga: 1500, keterangan: "Per lembar" },
    { id: 92, nama: "COVER LBR", kategori: "BOT (65 X 76)", harga: 3000, keterangan: "Per lembar" },
    { id: 93, nama: "COVER PJG", kategori: "BOT (65 X 76)", harga: 4000, keterangan: "Per lembar" },

    // SAMSON (90 X 120)
    { id: 94, nama: "SAMSON 70 PER PLANO", kategori: "SAMSON (90 X 120)", harga: 6000, keterangan: "Per lembar" },
    { id: 95, nama: "SAMSON 70 ECERAN", kategori: "SAMSON (90 X 120)", harga: 7000, keterangan: "Per lembar" },
    { id: 96, nama: "SAMSON 80 PER PLANO", kategori: "SAMSON (90 X 120)", harga: 7500, keterangan: "Per lembar" },
    { id: 97, nama: "SAMSON 80 ECERAN", kategori: "SAMSON (90 X 120)", harga: 8500, keterangan: "Per lembar" },

    // LAIN-LAIN
    { id: 98, nama: "CONT FORM 1 PLY", kategori: "LAIN-LAIN", harga: 40000, keterangan: "Per box" },
    { id: 99, nama: "CONT FORM 2 PLY", kategori: "LAIN-LAIN", harga: 75000, keterangan: "Per box" },
    { id: 100, nama: "CONT FORM 3 PLY", kategori: "LAIN-LAIN", harga: 100000, keterangan: "Per box" },
    { id: 101, nama: "CONT FORM 4 PLY", kategori: "LAIN-LAIN", harga: 130000, keterangan: "Per box" },
    { id: 102, nama: "LEM GALON", kategori: "LAIN-LAIN", harga: 35000, keterangan: "Per galon" },
    { id: 103, nama: "LEM PLASTIK", kategori: "LAIN-LAIN", harga: 5000, keterangan: "Per tube" },
    { id: 104, nama: "KALKIR F4", kategori: "LAIN-LAIN", harga: 25000, keterangan: "Per pak" },
    { id: 105, nama: "KALKIR LEMBARAN", kategori: "LAIN-LAIN", harga: 3000, keterangan: "Per lembar" },
    { id: 106, nama: "KALKIR KECIL2", kategori: "LAIN-LAIN", harga: 1500, keterangan: "Per lembar" },
    { id: 107, nama: "MIKA PUTIH", kategori: "LAIN-LAIN", harga: 12000, keterangan: "Per lembar plano" },
    { id: 108, nama: "MIKA WARNA", kategori: "LAIN-LAIN", harga: 15000, keterangan: "Per lembar plano" },
    { id: 109, nama: "BUFFALO PAK", kategori: "LAIN-LAIN", harga: 35000, keterangan: "Per pak" },
    { id: 110, nama: "BOX KOSONG", kategori: "LAIN-LAIN", harga: 5000, keterangan: "Per box" },
    { id: 111, nama: "NEW TOP", kategori: "LAIN-LAIN", harga: 2000, keterangan: "Per lembar" },
    { id: 112, nama: "SUPER NEW TOP", kategori: "LAIN-LAIN", harga: 3000, keterangan: "Per lembar" },
    { id: 113, nama: "PLASTIK SWALAYAN", kategori: "LAIN-LAIN", harga: 15000, keterangan: "Per ikat" },
    { id: 114, nama: "LAMINATING ROLL MATTE", kategori: "LAIN-LAIN", harga: 150000, keterangan: "Per roll" },
    { id: 115, nama: "LAMINATING ROLL GLOSSY", kategori: "LAIN-LAIN", harga: 140000, keterangan: "Per roll" },
    { id: 116, nama: "KERTAS FOTO", kategori: "LAIN-LAIN", harga: 25000, keterangan: "Per pak" },
    { id: 117, nama: "LABEL", kategori: "LAIN-LAIN", harga: 5000, keterangan: "Per lembar" },
    { id: 118, nama: "LAMINATING FOLIO", kategori: "LAIN-LAIN", harga: 3000, keterangan: "Per lembar" },
    { id: 119, nama: "LINEN ROLL", kategori: "LAIN-LAIN", harga: 90000, keterangan: "Per roll" },

    // TINTA/ETCHING
    { id: 120, nama: "NEW CAHAYA YELLOW", kategori: "TINTA/ETCHING", harga: 50000, keterangan: "Per kaleng" },
    { id: 121, nama: "NEW CAHAYA MAGENTA", kategori: "TINTA/ETCHING", harga: 50000, keterangan: "Per kaleng" },
    { id: 122, nama: "NEW CAHAYA CYAN", kategori: "TINTA/ETCHING", harga: 50000, keterangan: "Per kaleng" },
    { id: 123, nama: "NEW CAHAYA BLACK", kategori: "TINTA/ETCHING", harga: 45000, keterangan: "Per kaleng" },
    { id: 124, nama: "NEW ECHO CYAN", kategori: "TINTA/ETCHING", harga: 60000, keterangan: "Per kaleng" },
    { id: 125, nama: "NEW ECHO BLACK", kategori: "TINTA/ETCHING", harga: 55000, keterangan: "Per kaleng" },
    { id: 126, nama: "NEW ECHO GREEN", kategori: "TINTA/ETCHING", harga: 65000, keterangan: "Per kaleng" },
    { id: 127, nama: "NEW ECHO WHITE", kategori: "TINTA/ETCHING", harga: 70000, keterangan: "Per kaleng" },
    { id: 128, nama: "NEW ECHO BRONZE RED", kategori: "TINTA/ETCHING", harga: 75000, keterangan: "Per kaleng" },
    { id: 129, nama: "NEW ECHO REFLEK BLUE", kategori: "TINTA/ETCHING", harga: 75000, keterangan: "Per kaleng" },
    { id: 130, nama: "ETCHING NPH (BULAT)", kategori: "TINTA/ETCHING", harga: 30000, keterangan: "Harga satuan" },
    { id: 131, nama: "ETCHING NH3 (BIRU KOTAK)", kategori: "TINTA/ETCHING", harga: 35000, keterangan: "Harga satuan" },
];

// Lanjutkan dengan kode fungsi JavaScript lainnya...
// pastikan Anda tidak menghapus fungsi: loadData, renderTable, searchTable, saveData, dan fungsi-fungsi modal/edit/delete.

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

