<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=PHOENIX&fontSize=80&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Full-Stack%20E-Commerce%20Platform&descAlignY=55&descSize=20" width="100%"/>

<br/>

[![Live Frontend](https://img.shields.io/badge/🛍️%20Live%20Store-ecomfrontend--sage.vercel.app-orange?style=for-the-badge&logo=vercel&logoColor=white)](https://ecomfrontend-sage.vercel.app)
[![Live Admin](https://img.shields.io/badge/⚙️%20Admin%20Panel-ecommerceadmin.vercel.app-blueviolet?style=for-the-badge&logo=vercel&logoColor=white)](https://ecommerceadmin-psi-one.vercel.app/)
[![GitHub](https://img.shields.io/badge/Source%20Code-GitHub-black?style=for-the-badge&logo=github)](https://github.com/YOUR-GITHUB/ecommerce)

<br/>

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 🔥 What is PHOENIX?

**PHOENIX** is a fully functional, production-grade **MERN Stack E-Commerce Platform** with two separate applications — a customer-facing storefront and a dedicated admin panel — backed by a REST API server.

Built to showcase real-world full-stack capabilities: secure authentication, cloud media management, payment processing, and a responsive shopping experience — all in one project.

> 💡 **Live and deployed on Vercel.** No dummy data — this is the real thing.

---

## 🌐 Live Demo

| Application | URL | Description |
|---|---|---|
| 🛍️ **Customer Store** | [ecomfrontend-sage.vercel.app](https://ecomfrontend-sage.vercel.app) | Browse products, add to cart, checkout |
| ⚙️ **Admin Panel** | [ecommerceadmin-psi-one.vercel.app](https://ecommerceadmin-psi-one.vercel.app/) | Manage products, orders, and inventory |

---

## 🏗️ Architecture

```
PHOENIX/
├── 📁 frontend/          # React.js Customer Storefront
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── context/      # React Context API (cart, auth state)
│   │   ├── pages/        # Route-level pages
│   │   └── utils/        # Axios config, helpers
│
├── 📁 admin/             # React.js Admin Dashboard
│   ├── src/
│   │   ├── components/   # Admin UI components
│   │   └── pages/        # Dashboard, Products, Orders
│
└── 📁 backend/           # Node.js + Express REST API
    ├── controllers/      # Route handler logic
    ├── models/           # Mongoose schemas
    ├── routes/           # API route definitions
    ├── middleware/        # Auth middleware (JWT)
    └── config/           # DB, Cloudinary config
```

---

## ✨ Features

### 🛍️ Customer Storefront
- 🔐 **User Authentication** — Register, login, and persistent sessions via JWT
- 🗂️ **Product Catalog** — Browse products with categories and filtering
- 🛒 **Shopping Cart** — Real-time cart state management with React Context API
- 💳 **Stripe Checkout** — Secure, PCI-compliant payment processing
- 📦 **Order Tracking** — View order history and status post-purchase
- 📱 **Fully Responsive** — Seamless experience on mobile, tablet, and desktop

### ⚙️ Admin Panel
- 📊 **Dashboard Overview** — At-a-glance view of orders and inventory
- ➕ **Product Management** — Add, edit, and delete products with image uploads
- 🖼️ **Cloud Image Uploads** — Product images stored and served via Cloudinary + Multer
- 📋 **Order Management** — View and update order statuses in real time
- 🔒 **Protected Routes** — Admin access secured with JWT middleware

### 🔧 Backend API
- RESTful API with clean route separation
- Secure password hashing with **bcrypt**
- **JWT-based** stateless authentication
- **MongoDB + Mongoose** for flexible, schema-driven data modeling
- Payment webhook handling via **Stripe**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Tailwind CSS, Axios, React Context API |
| **Admin** | React.js, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (NoSQL), Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **Payments** | Stripe API |
| **Media Storage** | Cloudinary, Multer |
| **Deployment** | Vercel (Frontend + Admin), Render/Railway (Backend) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- MongoDB Atlas account (or local MongoDB)
- Stripe account (for payments)
- Cloudinary account (for image uploads)

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-GITHUB/ecommerce.git
cd ecommerce
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

```bash
npm run dev
```

### 3. Setup Frontend (Customer Store)
```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

```bash
npm run dev
```

### 4. Setup Admin Panel
```bash
cd admin
npm install
```

Create a `.env` file in `/admin`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
```

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/user/register` | Register new user |
| `POST` | `/api/user/login` | Login user, returns JWT |
| `POST` | `/api/user/admin` | Admin login |

### Products
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/product/list` | Get all products |
| `POST` | `/api/product/add` | Add new product (Admin) |
| `DELETE` | `/api/product/remove` | Remove product (Admin) |
| `GET` | `/api/product/single` | Get single product details |

### Orders
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/order/place` | Place a new order (COD) |
| `POST` | `/api/order/stripe` | Place order via Stripe |
| `POST` | `/api/order/userorders` | Get orders for a user |
| `GET` | `/api/order/list` | Get all orders (Admin) |
| `POST` | `/api/order/status` | Update order status (Admin) |

### Cart
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/cart/add` | Add item to cart |
| `POST` | `/api/cart/update` | Update cart quantity |
| `POST` | `/api/cart/get` | Fetch user cart |

---

## 🧠 Key Technical Decisions

**Why React Context over Redux?**
Cart and auth state are relatively simple and don't require the overhead of Redux. Context API keeps things lean and fast for this scale.

**Why Cloudinary + Multer?**
Multer handles multipart form data on the server side while Cloudinary provides a CDN-backed media pipeline — ensuring fast image load times globally without burdening the backend server.

**Why MongoDB?**
Product catalogs and order data have variable structures that benefit from document-based, schema-flexible storage. Mongoose adds just enough structure for validation.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request


<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>
</div>
