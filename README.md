# 🚀 Customer Project – Exploring NestJS with a .NET Mindset

<p align="left">
  <img src="https://cdn.simpleicons.org/nestjs/E0234E" height="45" alt="nestjs logo"/>
  <img src="https://cdn.simpleicons.org/node.js/339933" height="45" alt="nodejs logo"/>
  <img src="https://cdn.simpleicons.org/dotnet/512BD4" height="45" alt=".net logo"/>
</p>

![NestJS](https://img.shields.io/badge/NestJS-Backend-red?style=for-the-badge\&logo=nestjs)
![NodeJS](https://img.shields.io/badge/NodeJS-Runtime-green?style=for-the-badge\&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strong%20Typing-blue?style=for-the-badge\&logo=typescript)
![Architecture](https://img.shields.io/badge/Architecture-Service%20Layer-purple?style=for-the-badge)
<img width="763" height="988" alt="image" src="https://github.com/user-attachments/assets/b8270dd5-620d-4204-bf15-2f8b435d1a44" />

---

## 👀 Why This Project Exists

I come from a .NET background.

Instead of just learning NestJS theoretically, I wanted to understand how familiar backend architecture patterns translate into the Node.js ecosystem.

So I built this small but intentionally structured REST API.

Not just CRUD.
Not just “it works”.
But something that reflects how I usually design backend systems.

---

## 🏗 Architecture Style

Layered approach:

Controller → Service → Repository → Database

### 🎯 Controller

* Handles HTTP requests
* Validates DTOs
* Delegates logic to the service layer

### 🧠 Service

* Contains business logic
* Maps DTOs to entities
* Central coordination point

### 🗄 Repository

* Pure data access
* Implements `ICustomerRepository`
* No HTTP awareness

The goal: clean separation of concerns and scalability from day one.

---

## 📂 Project Structure

```
src/
 ├── controller/
 ├── service/
 ├── dao/
 │    ├── interface/
 │    └── repository/
 ├── dto/
 ├── models/
```

Simple. Clear. Intentional.

---

## 🤔 Why Use a Service Layer?

For very small apps, Controller → Repository might be enough.

But introducing a Service layer gives:

✨ Better scalability
🧪 Cleaner unit testing
🔁 Reusable business logic
🧩 Clear responsibility boundaries

This mirrors structured backend design often seen in mature .NET systems — now applied in NestJS.

---

## 🛠 Tech Stack

* NestJS
* Node.js
* TypeScript
* Dependency Injection (IoC Container)
* Repository Pattern
* Service Layer Pattern

---

## 🔮 Next Improvements

* ✅ Add unit tests (mock repository)
* 🔐 Add authentication & authorization
* 📦 Docker support
* 📊 Logging & centralized error handling
* 🧪 Integration testing

---

## ✨ Final Thoughts

This project is part of my hands-on exploration of NestJS beyond the .NET ecosystem.

Same engineering mindset.
Different runtime.
Still structured.

Curiosity-driven learning always wins.
