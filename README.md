# 📦 TechBridge ERP – Fayl Struktura va Modul Ko'rinishi

## 🔁 Asosiy Loyihaviy Tuzilma

```
techbridge-erp/
├── client/                 # Frontend (React + SCSS)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Logolar, animatsiyalar
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Auth va Theme Context
│   │   ├── i18n/           # 3 til tarjimalari
│   │   ├── pages/
│   │   │   ├── Auth/       # Login, Signup, Reset
│   │   │   ├── Dashboard/
│   │   │   ├── Students/
│   │   │   ├── Teachers/
│   │   │   ├── Courses/
│   │   │   ├── Payments/
│   │   │   ├── Schedule/
│   │   │   ├── Attendance/
│   │   │   ├── Reports/
│   │   │   ├── Messages/
│   │   │   ├── Settings/
│   │   │   └── Help/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.scss
│   └── package.json
│
├── server/                 # Backend (Node.js + Express)
│   ├── config/             # DB config, JWT, dotenv
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .env.example            # Atrof-muhit sozlamalari namuna
├── README.md               # Qo‘llanma
└── techbridge-erp.zip      # Arxiv holat (tayyor variant)
```

---

## 🧩 Modul Tafsilotlari

### 🔐 1. Autentifikatsiya

- Login, Signup (3 turdagi foydalanuvchi)
- Parolni tiklash (token bilan)
- JWT token orqali himoya

### 🏠 2. Dashboard

- Salomlashuv (tilga qarab)
- Statistikalar: foydalanuvchilar, kurslar, to‘lovlar
- Grafiklar (attendance, payments)
- Kalendar + mashg‘ulotlar

### 👩‍🎓 3. Talabalar

- CRUD (profil, status, kurs biriktirish)
- Davomat va to‘lovlar
- PDF profil chiqishi

### 👨‍🏫 4. O‘qituvchilar

- Fanni biriktirish, yuklama
- Statistikasi, ish vaqti

### 📘 5. Kurslar

- Kurs yaratish
- Syllabus
- Narxi, davomiyligi

### 🕒 6. Jadval

- Haftalik ko‘rinish
- Drag & Drop UI (faqat dizayn tayyor)
- Guruh/xona/teacher filtr

### 🧾 7. To‘lovlar

- Status: to‘langan/kutilmoqda/kechiktirilgan
- Faktura (PDF chiqish)
- Bank qo‘lda qo‘shish

### 📊 8. Hisobotlar

- Kurs/guruh bo‘yicha grafiklar
- Excel / PDF export

### ✏️ 9. Test Moduli (opsional)

- Online test, ballar
- Natijalar paneli

### 📩 10. Xabarlar

- Telegram/SMS (logikasi tayyor)
- Mass xabar

### 🌐 11. Til Sozlamalari

- 3 tilga tarjima
- Lang switcher (navbar + global context)

### ⚙️ 12. Sozlamalar

- Tizim konfiguratsiyasi (valyuta, til)
- Adminlar ro‘yxati
- Login faoliyati logi

### 🧪 Bonus

- 404 sahifasi
- Yordam sahifasi

---

## ⚙️ Ishga Tushurish Qo‘llanma

1. `.env` fayllarni `client` va `server` papkalariga joylashtiring
2. Terminalda:

```bash
cd server
npm install
npm run dev

cd ../client
npm install
npm run dev
```