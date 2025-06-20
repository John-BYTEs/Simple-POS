# 🧾 Simple POS System

A full-stack **Point of Sale (POS) application built using:

- Frontend: React.js + Tailwind CSS  
- Backend: Laravel 12 + MySQL  
- Features: Product listing, cart management, receipt printing, and more.

---


## 📁 Project Structure
---

## 🚀 Features

- ✅ Add products to cart
- ✅ Real-time total calculation
- ✅ Receipt generation and printing 
- ✅ Animated feedback for actions
- ✅ Backend API with MySQL integration
- ✅ RESTful endpoints for products & sales

---

## 🛠️ Installation & Setup

### 1️⃣ Backend (Laravel + MySQL)

```bash
cd backend
cp .env.example .env
php artisan key:generate

# Edit .env for DB credentials
DB_DATABASE=pos_backend
DB_USERNAME=root
DB_PASSWORD=

# Create and migrate database
php artisan migrate
php artisan serve
