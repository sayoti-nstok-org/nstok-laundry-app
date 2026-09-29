# SOP Operasional & Alur Pengerjaan LaundryTrack
## 1. Alur Kasir & Timbang Kiloan
- Kasir memasukkan Nama dan No. WhatsApp pelanggan.
- Timbang cucian (Kg) dan pilih varian parfum (Sakura Blossom, Ocean Fresh, Akasia, Downy).
- Pilih paket kecepatan (Reguler 3 Hari, Kilat 1 Hari, Express 4 Jam).
- Cetak struk thermal 58mm dengan QR Code tracking.

## 2. Alur Pengerjaan Cuci & Status Lifecycle
- Tahap 1: Antrian Masuk (received)
- Tahap 2: Proses Cuci & Pengeringan (washing)
- Tahap 3: Setrika Uap & Packing Wangi (ironing_packing)
- Tahap 4: Siap Diambil di Kasir (ready_for_pickup) -> Otomatis trigger notifikasi WhatsApp ke pelanggan.
- Tahap 5: Selesai & Lunas (completed).
