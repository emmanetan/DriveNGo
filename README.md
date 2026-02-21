# Drive 'N Go - Car Rental Service

A full-stack car rental web application built with React and FastAPI.

## Tech Stack

### Frontend
- **React (v19)** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Pre-built React components (Button, Calendar, Select, etc.)
- **React Router** - Navigation/routing
- **Lucide React** - Icon library
- **date-fns** - Date formatting

### Backend
- **FastAPI** - Backend REST API framework
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation

## Features
- Browse and filter a fleet of premium vehicles
- Book vehicles with date and location selection
- Real-time cost calculation based on rental duration
- Contact form for customer inquiries
- Dark/light theme toggle
- Mobile-responsive design
- Booking confirmation with summary

## Getting Started

### Frontend
```bash
cd frontend
yarn install
yarn start
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## Project Structure
```
├── backend/
│   ├── server.py              # FastAPI REST API
│   └── requirements.txt       # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── pages/             # Page components (Home, Vehicles, Booking, etc.)
│   │   ├── components/        # Reusable components (Navigation, Footer, Hero, etc.)
│   │   │   └── ui/            # Shadcn UI components (Button, Calendar, Select, etc.)
│   │   ├── context/           # React context (ThemeContext)
│   │   ├── mock/              # Mock data for vehicles, locations, testimonials
│   │   └── lib/               # Utility functions
│   ├── package.json
│   ├── tailwind.config.js
│   └── components.json        # Shadcn UI configuration
└── README.md
```
