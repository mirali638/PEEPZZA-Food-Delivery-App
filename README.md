# 🍕 VINGO - Full-Stack Food Delivery Application

A comprehensive food delivery platform built with modern web technologies, featuring multi-role user management, real-time order tracking, and integrated payment processing.

![PEEPZZA Logo](https://img.shields.io/badge/PEEPZZA-Food%20Delivery-orange?style=for-the-badge&logo=deliveroo)

## 🚀 Features

### 🔐 Authentication & User Management
- **Multi-Role System**: Users, Restaurant Owners, Delivery Personnel
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **Social Login**: Google OAuth integration
- **Password Recovery**: OTP-based password reset with email verification
- **Session Management**: Secure cookie-based session handling

### 🛒 E-commerce & Ordering
- **Shopping Cart**: Multi-restaurant cart functionality
- **Order Management**: Complete order lifecycle tracking
- **Restaurant Discovery**: Location-based restaurant filtering
- **Menu Management**: Dynamic menu with categories and pricing
- **Inventory Tracking**: Real-time stock management

### 💳 Payment Integration
- **Razorpay Integration**: Secure online payment processing
- **Multiple Payment Methods**: Online and Cash-on-Delivery
- **Payment Verification**: Automated payment confirmation
- **Transaction History**: Complete payment tracking

### 🚚 Delivery Management
- **Real-Time Tracking**: Live order tracking with interactive maps
- **Geolocation Services**: Location-based delivery boy assignment
- **Route Optimization**: Efficient delivery route planning
- **Delivery Verification**: OTP-based order confirmation
- **Performance Analytics**: Delivery statistics and reporting

### 📱 Real-Time Communication
- **WebSocket Integration**: Real-time notifications and updates
- **Live Chat**: Instant communication between users
- **Order Status Updates**: Real-time order status notifications
- **Location Sharing**: Live delivery boy location tracking

### 🗺️ Location Services
- **Interactive Maps**: Leaflet.js integration for route visualization
- **Geospatial Queries**: MongoDB 2dsphere indexing for location searches
- **Address Management**: Complete address handling with coordinates
- **Distance Calculation**: Automatic distance and delivery time estimation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Leaflet.js** - Interactive maps
- **Socket.IO Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Socket.IO** - Real-time bidirectional communication
- **Razorpay** - Payment gateway
- **Cloudinary** - Cloud-based image management
- **Nodemailer** - Email services
- **Multer** - File upload handling

## 📁 Project Structure

```
peepzza/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── auth.controller.js    # Authentication logic
│   │   ├── order.controller.js   # Order management
│   │   ├── shop.controller.js    # Restaurant management
│   │   ├── item.controller.js    # Menu item management
│   │   └── user.controller.js    # User management
│   ├── middleware/
│   │   ├── isAuth.js            # Authentication middleware
│   │   └── multer.js            # File upload middleware
│   ├── models/
│   │   ├── user.model.js        # User schema
│   │   ├── shop.model.js        # Restaurant schema
│   │   ├── item.model.js        # Menu item schema
│   │   ├── order.model.js       # Order schema
│   │   └── deliveryAssignment.model.js # Delivery schema
│   ├── routes/
│   │   ├── auth.route.js        # Authentication routes
│   │   ├── order.route.js       # Order routes
│   │   ├── shop.route.js        # Restaurant routes
│   │   ├── item.route.js        # Menu item routes
│   │   └── user.route.js        # User routes
│   ├── utils/
│   │   ├── cloudinary.js        # Cloud storage utility
│   │   ├── mail.js              # Email utility
│   │   └── token.js             # JWT utility
│   ├── socket.js                # WebSocket configuration
│   └── index.js                 # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── redux/               # State management
│   │   └── assets/              # Static assets
│   └── public/                  # Public assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/peepzza.git](https://github.com/mirali638/VINGO-Food-Delivery-App)
   cd peepzza
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/peepzza
   
   # JWT
   JWT_SECRET=your_jwt_secret_key
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Razorpay
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   # Email
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   
   # Server
   PORT=5000
   ```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout
- `POST /api/auth/google` - Google OAuth
- `POST /api/auth/send-otp` - Send OTP for password reset
- `POST /api/auth/verify-otp` - Verify OTP
- `POST /api/auth/reset-password` - Reset password

### Orders
- `POST /api/order/place` - Place new order
- `POST /api/order/verify-payment` - Verify payment
- `GET /api/order/my-orders` - Get user orders
- `PUT /api/order/:orderId/:shopId/status` - Update order status
- `GET /api/order/:orderId` - Get order details

### Restaurants
- `GET /api/shop/by-city` - Get restaurants by city
- `POST /api/shop/create` - Create restaurant
- `PUT /api/shop/:id` - Update restaurant
- `GET /api/shop/my-shop` - Get user's restaurant

### Menu Items
- `GET /api/item/by-city` - Get items by city
- `POST /api/item/create` - Create menu item
- `PUT /api/item/:id` - Update menu item
- `DELETE /api/item/:id` - Delete menu item

### Delivery
- `GET /api/order/delivery-assignments` - Get delivery assignments
- `POST /api/order/accept/:assignmentId` - Accept delivery
- `GET /api/order/current-order` - Get current delivery
- `POST /api/order/send-delivery-otp` - Send delivery OTP
- `POST /api/order/verify-delivery-otp` - Verify delivery OTP

## 👥 User Roles

### 🧑‍💼 Customer
- Browse restaurants and menu items
- Add items to cart and place orders
- Track order status in real-time
- Manage delivery addresses
- View order history

### 🏪 Restaurant Owner
- Create and manage restaurant profile
- Add/edit menu items with images
- View and manage incoming orders
- Update order status
- View sales analytics

### 🚴‍♂️ Delivery Personnel
- Receive delivery assignments
- Accept/reject delivery requests
- Update location in real-time
- Navigate to delivery locations
- Complete deliveries with OTP verification

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **CORS Protection**: Cross-origin request security
- **Input Validation**: Server-side validation for all inputs
- **File Upload Security**: Secure file handling with Multer
- **Environment Variables**: Sensitive data protection

## 📊 Key Features in Detail

### Real-Time Order Tracking
- WebSocket-based real-time updates
- Interactive map visualization
- Live delivery boy location tracking
- Automatic status notifications

### Geolocation Services
- MongoDB 2dsphere geospatial indexing
- Location-based restaurant discovery
- Distance calculation and route optimization
- Real-time location updates

### Payment Processing
- Razorpay integration for secure payments
- Multiple payment method support
- Payment verification and confirmation
- Transaction history tracking

### Cloud Storage
- Cloudinary integration for image management
- Automatic image optimization
- CDN delivery for better performance
- Secure file upload handling

⭐ **Star this repository if you found it helpful!**
