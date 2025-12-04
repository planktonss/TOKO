// --- 1. Data Dummy Awal (DIUPDATE dengan KETERANGAN) ---
let priceList = [
    { id: 1, nama: "KORAN (48,8 gr)", kategori: "Kertas Dasar", harga: 1500, keterangan: "Per lembar plano" },
    { id: 2, nama: "JASMINE MUDA", kategori: "Kertas Undangan", harga: 5500, keterangan: "Ukuran 79X109" },
    { id: 3, nama: "ART PAPER (150 GR) 65 X 100", kategori: "Art Paper", harga: 7500, keterangan: "Gramasi 150g" },
    { id: 4, nama: "LAKBAN BESAR (2\")", kategori: "Perekat", harga: 22000, keterangan: "Per roll" },
    { id: 5, nama: "KERTAS HVS A4 80", kategori: "Kertas HVS", harga: 1200, keterangan: "Harga per rim" },
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