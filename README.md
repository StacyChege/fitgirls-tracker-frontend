# FitGirlsTracker - Health & Fitness Platform for Women 🤸‍♀️

A comprehensive web application designed to connect users with expert trainers, provide a rich library of workouts, and offer tools for a personalized fitness journey.

Welcome to the FitGirlsTracker project! This is a full-stack application built with React on the frontend and Django on the backend. This guide will help you understand the project's structure, API, and how to get started.

---

## 🚀 Key Features
This platform is built to provide value to both fitness enthusiasts and professional trainers.

### For All Users
- **Browse Experts:** Discover and connect with a curated list of certified female fitness trainers.
- **Workout Library:** Access a diverse collection of workout routines, each with details on duration, difficulty, and type.
- **Responsive Design:** The application is fully responsive and provides a seamless user experience on both desktop and mobile devices.

### For Expert Trainers
- **Expert Sign Up:** A dedicated registration process for fitness professionals to join the platform.
- **Post a Workout:** A feature that allows verified experts to create and share new workout routines with the community.

---

## 🛠️ Technologies Used
This project is a full-stack application built with modern web technologies.

**Frontend:**
- React: For building the dynamic user interface.
- React Router: Manages navigation between different pages.
- Tailwind CSS: A utility-first CSS framework used for rapid and consistent styling.
- react-icons: For integrating a wide range of icons.

**Backend:**
- Django: The Python web framework for handling business logic and API endpoints.
- Django REST Framework (DRF): Simplifies the creation of the RESTful API.
- PostgreSQL: The relational database used for data persistence.

---

## 📝 Backend API Endpoints (Django REST Framework)
The frontend communicates with a Django REST Framework API. Here are the key endpoints:

| Endpoint | Method | Description |
|---|---|---|
| https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/experts/ | GET | Fetches a list of all expert trainers. |
| https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/experts/register/ | POST | Registers a new expert account. |
| https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/workouts/ | GET | Retrieves a list of all available workout routines. |
| https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/workouts/ | POST | (Expert Only) Creates a new workout routine. Requires authentication. |
| https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/users/register/ | POST | Registers a new standard user account. |
| https://fitgirlstracker-stacy-3861fcc5fdbd.herokuapp.com/api/users/login/ | POST | Authenticates a user and returns an access token. |

---

## 💻 User Flows

### Signing Up and Logging In

**Standard User**
- Navigate to the `/signup` page.
- Fill out the registration form with your desired username, email, and password.
- Upon submission, a POST request is sent to the `/api/users/register/` endpoint.
- If successful, you will be redirected to the login page.
- On the `/login` page, enter your credentials. A POST request is sent to the `/api/users/login/` endpoint to get an access token. This token is saved to localStorage for future authenticated requests.

**Expert Trainer**
- Navigate to the `/experts/signup` page.
- Fill out the form, including expert-specific fields like Specialty and Years of Experience.
- The form sends a POST request to the `/api/experts/register/` endpoint.
- The backend creates an expert profile. You can then log in via the regular `/login` page using your new expert credentials.

### Accessing Workouts and Experts
- **Workouts:** The `WorkoutListPage` component fetches workout data by making a GET request to the `/api/workouts/` endpoint.
- **Experts:** The `ExpertsPage` component fetches trainer profiles via a GET request to the `/api/experts/` endpoint.

---

## 🤝 Getting Started
Follow these steps to get a local copy of the project up and running.

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js & npm (or Yarn)
- Python & pip
- A PostgreSQL database (or you can configure a different one in Django)

### Frontend Setup
Clone the repository:
```bash
git clone <repository_url>
cd <project_directory>
```
Install project dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```
The application will now be running on http://localhost:3000.

### Backend Setup (Optional)
This section is for running the backend API locally.

Navigate to the backend directory:
```bash
cd backend/
```
Create and activate a virtual environment:
On Windows:
```bash
python -m venv venv
venv\Scripts\activate
```
On macOS/Linux:
```bash
python -m venv venv
source venv/bin/activate
```
Install backend dependencies:
```bash
pip install -r requirements.txt
```
Set up the database:
- Create a `.env` file with your database configuration.
Then, apply database migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```
Run the Django development server:
```bash
python manage.py runserver
```
The API will be accessible at http://localhost:8000.

---

## 🙏 Acknowledgements
- Unsplash: For providing high-quality, free-to-use images.
- React, Django, and Tailwind CSS communities: For their excellent resources and tools that made this project possible.
