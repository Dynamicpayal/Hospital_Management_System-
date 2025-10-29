# 🏥 Hospital Management System (HMS) – Project Setup & Run Guide

Welcome to the **CareSync - Hospital Management System** project.  
This guide will help you set up and run the **Frontend** (React) and **Backend** (Spring Boot) applications smoothly on your local system.

---

## 🧩 Project Overview

- **Frontend:** React + Vite + Tailwind CSS / Mantine
- **Backend:** Java 17+ + Spring Boot + Maven + MySQL
- **Database:** MySQL
- **Port Configuration:**
  - Frontend → `http://localhost:5173`
  - Backend → `http://localhost:8080`

---

## ⚙️ Prerequisites

Before you start, make sure the following tools are installed:

| Tool                   | Version      | Download Link                                                                        |
| ---------------------- | ------------ | ------------------------------------------------------------------------------------ |
| **Java JDK**           | 17 or higher | [Download JDK](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) |
| **Maven**              | 3.8+         | [Download Maven](https://maven.apache.org/download.cgi)                              |
| **Node.js**            | 18+          | [Download Node.js](https://nodejs.org/en/download)                                   |
| **MySQL**              | 8+           | [Download MySQL](https://dev.mysql.com/downloads/)                                   |
| **Visual Studio Code** | Latest       | [Download VS Code](https://code.visualstudio.com/)                                   |

---

## 🧰 VS Code Recommended Extensions

| Extension Name                           | Identifier                         |
| ---------------------------------------- | ---------------------------------- |
| 🌿 Spring Boot Extension Pack            | `pivotal.vscode-spring-boot`       |
| ⚡ Spring Initializr                     | `vscjava.vscode-spring-initializr` |
| ☕ Language Support for Java™ by Red Hat | `redhat.java`                      |
| 📦 Maven for Java                        | `vscjava.vscode-maven`             |
| 💡 Lombok Annotations Support            | `gabrielbb.vscode-lombok`          |
| 🧠 ESLint                                | `dbaeumer.vscode-eslint`           |
| 🎨 Tailwind CSS IntelliSense             | `bradlc.vscode-tailwindcss`        |
| ⚛️ React Developer Tools                 | `dsznajder.es7-react-js-snippets`  |

---

## 🪄 Backend Setup (Spring Boot + Maven)

### 📁 Step 1: Open the Backend Folder

Navigate to the project backend directory:

```
cd Hospital_Management_System-/Backend
```

### 🧩 Step 2: Check Java & Maven Versions

```
java -version
mvn -v
```

✅ Both should display valid versions.

If `mvn` is **not recognized**, set up Maven manually:

#### Maven Setup:

1. Download Maven from: [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)
2. Extract it to:
   ```
   C:\Program Files\Apache\Maven
   ```
3. Set environment variables:
   - **MAVEN_HOME:**
     ```
     C:\Program Files\Apache\Maven
     ```
   - Add to **Path:**
     ```
     %MAVEN_HOME%\bin
     ```
4. Verify:
   ```
   mvn -v
   ```

---

### 🏗️ Step 3: Build and Run the Project

#### 🧹 Clean and Compile:

```
mvn clean install
```

#### 🚀 Run the Spring Boot Application:

```
mvn spring-boot:run
```

#### ✅ Check Running Status:

Open in browser:

```
http://localhost:8080/careSync
```

Expected Output:

```
Hello, World!
```

## 💻 Frontend Setup (React + Vite)

### 📁 Step 1: Navigate to Frontend Directory

```
cd Hospital_Management_System-/Frontend
```

### 📦 Step 2: Install Dependencies

```
npm install
```

### 🚀 Step 3: Run the Frontend

```
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🗄️ Database Setup (MySQL)

1. Open **MySQL Workbench** or terminal.
2. Create a new database:
   ```sql
   CREATE DATABASE hmsdb;
   ```
3. Update your `application.properties` file (already configured):
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/hmsdb
   spring.datasource.username=root
   spring.datasource.password=Your_Password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
   ```

---

## 🧑‍💻 Git Workflow (For Team Collaboration)

**Recommended Practice:**
Each developer should work on a separate branch and create Pull Requests.

### Commands:

```bash
# Create new branch
git checkout -b feature-branch-name

# Add & commit changes
git add .
git commit -m "Added new module"

# Push branch
git push origin feature-branch-name
```

🔹 The Team Lead will review and merge branches into `main`.

---

## 🧾 Common Commands Summary

| Purpose                   | Command               |
| ------------------------- | --------------------- |
| Clean Build               | `mvn clean install`   |
| Run Spring Boot           | `mvn spring-boot:run` |
| Run Frontend              | `npm run dev`         |
| Install Frontend Packages | `npm install`         |
| Check Maven Version       | `mvn -v`              |

---

## ✨ Credits

Developed by the **CareSync Team**  
Guided by professional full-stack practices using **Spring Boot + React**.
