# 🎫 Ticket Management Web App (React)

A full-featured ticket management application built with React, designed to test frontend structure, UI consistency, form logic, and state management.

This React version implements the same unified design and functionality as its Vue.js and Twig counterparts — ensuring identical user experience across all frameworks.

## 📖 Overview

The **Ticket Management Web App (React)** allows users to:

- Register and log in securely (simulated authentication).

- View a personalized dashboard with ticket summaries.
- Create, view, update, and delete tickets.
- Log out and clear their session.
- Enjoy a smooth, consistent, and responsive experience on all devices.

All authentication and ticket data are simulated via [Ticket Management API](https://node-ticket-app-production.up.railway.app).

## 🚀 Features

**1. 🏠 Landing Page**

- Welcoming hero section with **wavy SVG background and decorative circles**.
- Clear CTAs: “**Login**” and “**Get Started**”.
- Responsive layout centered within a **1440px max-width container**.
- Feature cards with **rounded corners and subtle shadows**.
- Consistent footer visible across all pages.

**2. 🔐 Authentication**

- Login and Signup screens with **form validation** using Formik + Yup (or native validation).
- Inline error messages and toast notifications for invalid credentials.
- On successful login, redirects to **Dashboard**.
- Auth is simulated using:

  ```js
  localStorage.setItem("token", token);
  ```

- Logout clears the session and returns to the landing page.
- Unauthorized users are redirected to **/auth/login**.

**3. 📊 Dashboard**

- Displays real-time ticket summary statistics:

  - Total Tickets
  - Open Tickets
  - In Progress Tickets
  - Closed Tickets

- Includes navigation to Ticket Management.
- Protected route – only accessible with a valid session.

**4. 🧾 Ticket Management (CRUD)**

Fully interactive interface to manage tickets:

- **Create**: Add a new ticket using a validated form.
- **Read**: View all tickets in card layout, grouped or filtered by status.
- **Update**: Edit any ticket with validation and live feedback.
- **Delete**: Confirm before removal, with success/failure toasts.

#### Field Rules

| Field       | Required | Details                                        |
| ----------- | -------- | ---------------------------------------------- |
| title       | ✅       | Must not be empty                              |
| status      | ✅       | Must be one of "open", "in_progress", "closed" |
| description | ❌       | Optional, but validated for length             |
| priority    | ❌       | Optional; default set to "medium"              |

#### Status Colors

| Status      | Color |
| ----------- | ----- |
| open        | Green |
| in_progress | Amber |
| closed      | Gray  |

## 🎨 Design & Layout

| Element                 | Requirement                                            |
| ----------------------- | ------------------------------------------------------ |
| **Max Width**           | `1440px`, centered horizontally                        |
| **Hero Section**        | Wavy SVG background + at least one overlapping circle  |
| **Cards & Boxes**       | Rounded corners, subtle box-shadow                     |
| **Responsive Layout**   | Mobile → stacked; Desktop → grid columns               |
| **Decorative Elements** | Minimum two circles across pages                       |
| **Accessibility**       | Semantic HTML, alt text, visible focus, color contrast |

## ⚠️ Validation & Error Handling

All user actions and forms include validation and clear feedback.

| Scenario                 | Behavior                                                          |
| ------------------------ | ----------------------------------------------------------------- |
| Empty or invalid field   | Inline error or toast message                                     |
| Unauthorized access      | Redirects to `/auth/login`                                        |
| Failed network/mock call | Toast message → “Failed to load tickets. Please retry.”           |
| Expired session          | Toast message → “Your session has expired — please log in again.” |

## 🔑 Authentication Logic

- Authentication is simulated via localStorage token system:

  ```js
  localStorage.setItem("token", token);
  ```

- Routes:

  - `/` → Landing Page

  - `/auth/login` → Login

  - `/auth/signup` → Signup

  - `/dashboard` → Protected Dashboard

  - `/tickets` → Protected CRUD page

- Logout clears session:

  ```js
  localStorage.removeItem("toke");
  ```

## 🧰 Tech Stack

|Category|Tools|
|Framework|React (Vite)|
|Routing |React Router|
|State Management| Context API|
|Styling |Tailwind CSS / SCSS Modules|
|Form Handling |Formik + Yup|
|Notifications| React Hot Toast|
|Data Simulation |LocalStorage / Ticket Management API|
|Iconography| Lucide React|

## 📁 Folder Structure

```sh
react-ticket-app/
├── src/
│ ├── components/ # Reusable UI components
│ ├── context/ # Auth & App context providers
│ ├── pages/ # Landing, Auth, Dashboard, Tickets
│ ├── routes/ # ProtectedRoute, route configs
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
├── public/
├── form.js # Form schemas, field definitions
├── package.json
└── vite.config.js
```

## ⚙️ Setup & Installation

**1. Clone the repository**

```sh
git clone https://github.com/yourusername/ticket-management-react.git
cd ticket-management-react
```

**2. Install dependencies**

```sh
npm install
```

**3. Start the development server**

```sh
npm run dev
```

**4. Open the app**

```sh
http://localhost:5173
```

## 📜 License

This React implementation of the **Ticket Management Web App** is provided for **educational and assessment purposes only**.
\
You may freely modify and extend it for personal or professional learning.
