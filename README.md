
## **Backend**

### **Project Overview**
The backend provides REST APIs and WebSocket services to power the frontend. It handles business logic for compliance automation, document management, shipment tracking, and more.

### **Technologies Used**
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building APIs.
- **PostgreSQL**: Database for storing data securely and efficiently.
- **Socket.IO**: For real-time communication.
- **Sequelize**: ORM for database operations.
- **JWT**: For authentication.

### **Getting Started**

#### **Prerequisites**
- Node.js (v16 or later)
- npm or yarn
- PostgreSQL

#### **Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

#### **Setup the Database**
1. Create a PostgreSQL database.
2. Configure the database connection in the `.env` file:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=<your-username>
   DB_PASSWORD=<your-password>
   DB_NAME=<your-database>
   JWT_SECRET=<your-secret-key>
   ```
3. Run migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```

#### **Running the Project**
1. Start the development server:
   ```bash
   npm start
   ```
   Or, if using yarn:
   ```bash
   yarn start
   ```
2. The backend server will be available at `http://localhost:5000`.

#### **API Documentation**
The API documentation is available at `http://localhost:5000/api-docs` if Swagger is configured.

### **Folder Structure**
- **src/**: Main source folder.
  - **controllers/**: Handle API logic for various modules.
  - **models/**: Sequelize models for database tables.
  - **routes/**: Define API endpoints.
  - **middlewares/**: Handle authentication, error handling, etc.
  - **services/**: Business logic.
  - **config/**: Database and environment configurations.
  - **sockets/**: WebSocket logic for real-time features.

### **Environment Variables**
Create a `.env` file in the root directory with the following variables:
```
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=<your-username>
DB_PASSWORD=<your-password>
DB_NAME=<your-database>
JWT_SECRET=<your-secret-key>
```

