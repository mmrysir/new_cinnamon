"use client";

import React, { createContext, useContext, useState } from "react";
import { Treatment, BookingDetails } from "../types";

interface BookingContextType {
  selectedServices: Treatment[];
  isBookingOpen: boolean;
  bookingDetails: BookingDetails;
  addService: (service: Treatment) => void;
  removeService: (id: number) => void;
  openBooking: (service?: Treatment) => void;
  closeBooking: () => void;
  resetBooking: () => void;
  updateDetails: (details: Partial<BookingDetails>) => void;
}

const defaultDetails: BookingDetails = {
  name: "",
  date: "",
  time: "",
  guests: "1",
  notes: "",
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedServices, setSelectedServices] = useState<Treatment[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(defaultDetails);

  const addService = (service: Treatment) => {
    setSelectedServices((prev) => {
      if (prev.find((s) => s.id === service.id)) return prev;
      return [...prev, service];
    });
  };

  const removeService = (id: number) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const openBooking = (service?: Treatment) => {
    if (service) {
      addService(service);
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => setIsBookingOpen(false);

  const resetBooking = () => {
    setSelectedServices([]);
    setBookingDetails(defaultDetails);
  };

  const updateDetails = (details: Partial<BookingDetails>) => {
    setBookingDetails((prev) => ({ ...prev, ...details }));
  };

  return (
    <BookingContext.Provider
      value={{
        selectedServices,
        isBookingOpen,
        bookingDetails,
        addService,
        removeService,
        openBooking,
        closeBooking,
        resetBooking,
        updateDetails,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
