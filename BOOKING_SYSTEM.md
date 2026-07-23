# 🌿 Premium WhatsApp-Integrated Booking System

A robust, multi-selection booking system designed for service-based businesses (Spas, Salons, Clinics) looking to streamline their conversion flow via WhatsApp.

---

## 🏗️ Design Architecture

The system is built on a **Centralized State Pattern** using React Context API, ensuring a seamless experience as users navigate through different sections of the site.

### 1. State Management (`BookingContext.tsx`)
- **Global Context**: Tracks `selectedServices`, `isBookingOpen`, and `bookingDetails`.
- **Atomic Updates**: Single source of truth for adding/removing treatments.
- **Persistence**: Easily adaptable to include `localStorage` for cart persistence across sessions.

### 2. Component Hierarchy
- **`BookingProvider`**: Wraps the layout to provide state to all components.
- **`BookingModal`**: The "Command Center" where users review selections and fill out the form.
- **`BookingCartIndicator`**: A sticky/floating UI element that provides visual feedback on selection count.
- **`FloatingBookButton`**: A global CTA for quick modal access.

### 3. Integration Flow
1. **Selection**: User clicks "Book Now" on a service card.
2. **Context Update**: Service is added to the global `selectedServices` array.
3. **Review**: User opens the modal to see their "Cart" of treatments.
4. **Data Entry**: User provides Name, Date, Time, Guests, and Notes.
5. **Redirection**: System compiles a beautifully formatted markdown message and triggers `window.open` with a `wa.me` link.

---

## ✨ Key Features

- **Multi-Treatment Support**: Unlike standard "Book" buttons, this allows users to stack multiple services in one booking.
- **Deep-Link Integration**: Add a service and open the modal in one click, or just add and keep browsing.
- **Responsive Form**: Optimized for mobile with custom date/time inputs and guest selection.
- **WhatsApp Formatting**: Automatically generates professional, human-readable messages for the business owner.
- **Visual Feedback**: Real-time counter and animations (using Framer Motion or Tailwind transitions).

---

## 🚀 Setup & Porting Guide

To use this system in another project, follow these steps:

### 1. Prerequisites
Ensure you have the following installed:
- `next.js` (App Router preferred)
- `lucide-react` (for icons)
- `tailwind-css` (for styling)

### 2. Core Files to Copy
Copy the following files from this repository:
1. `src/context/BookingContext.tsx`
2. `src/components/ui/BookingModal.tsx`
3. `src/components/ui/Modal.tsx` (the base layout)
4. `src/components/layout/BookingCartIndicator.tsx`

### 3. Configuration
In `BookingModal.tsx`, update the following constants:
```typescript
const phone = "255XXXXXXXXX"; // Your business WhatsApp number
const treatments = [ ... ];   // Your list of services/products
```

### 4. Implementation
Wrap your main layout in the provider:
```tsx
// src/app/layout.tsx
import { BookingProvider } from "@/context/BookingContext";

export default function RootLayout({ children }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
      <BookingCartIndicator />
    </BookingProvider>
  );
}
```

---

## 📝 WhatsApp Message Format Example

When a user clicks "Send to WhatsApp", the business receives:

> *NEW BOOKING REQUEST* 🌿
> 
> *Details:*
> Name: Jane Doe
> Date: 2024-06-12
> Time: 14:00
> Guests: 2
> 
> *Services Requested:*
> - African Facial ($30)
> - Deep Tissue ($40)
> 
> *Approx. Total:* $70
> 
> *Notes:* Looking forward to it!
> 
> Please confirm availability!

---

## 🛠️ Customization Tips

- **Currency**: Search for `$` in `BookingModal.tsx` and `BookingContext.tsx` to change to your local currency.
- **Validation**: Add Zod or simple regex validation in the `handleWhatsAppSend` function before opening the link.
- **Persistence**: Add a `useEffect` in `BookingProvider` to sync `selectedServices` with `localStorage`.

---

*Designed for high-conversion service landing pages.*
