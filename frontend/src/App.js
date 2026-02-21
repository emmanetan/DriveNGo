import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/ThemeContext";
import HomePage from "@/pages/HomePage";
import VehiclesPage from "@/pages/VehiclesPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import BookingPage from "@/pages/BookingPage";
import BookingConfirmation from "@/pages/BookingConfirmation";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
