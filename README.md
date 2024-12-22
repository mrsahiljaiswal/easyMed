# EasyMed

EasyMed is a full-stack web application that provides health-related services, including a "Know Your Health" feature, appointment booking with doctors, donation functionality, and a medicine delivery system. Built with React, Node.js, Express, and MongoDB, it aims to make healthcare accessible and convenient.

## Features

### **1. Know Your Health**
- Interactive health assessment quiz.
- Provides health insights based on user responses.

### **2. Appointment Booking**
- Allows users to book appointments with doctors.
- View doctor availability and confirmation details.

### **3. Donation Page**
- Enables users to donate to healthcare initiatives.
- Secure payment processing.

### **4. Medicine Delivery**
- Browse medicines categorized alphabetically (A-Z navigation).
- Add medicines to the cart and purchase them.

---

## **Tech Stack**
- **Frontend:** React, Material-UI, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** Axios for API communication, Mongoose for MongoDB object modeling

---

## **Screenshots**

### **Homepage**
![Homepage](public/images/homepage.png)

### **Know Your Health**
![Know Your Health](public/images/know-your-health.png)

### **Appointment Booking**
![Appointment](public/images/appointment.png)

### **Donation Page**
![Donate](public/images/donate.png)

### **Medicine Delivery**
![Medicine Delivery](public/images/medicine-delivery.png)

---

## **Setup Instructions**

### **Backend Setup**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add MongoDB connection string to `.env`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Run the server:
   ```bash
   npm start
   ```

### **Frontend Setup**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## **Installation from GitHub**

To install this project from the GitHub repository, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mrsahiljaiswal/easyMed.git
   ```
2. Navigate to the project directory:
   ```bash
   cd easyMed
   ```
3. Follow the **Backend Setup** and **Frontend Setup** instructions above.

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.
