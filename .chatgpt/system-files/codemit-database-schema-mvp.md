# Codemit — Database Schema (MVP-Safe)

This document defines the minimum, safe database structure required to support Codemit MVP without future rewrites.

---

## Business Table

Stores core business information.

Fields:
- id (UUID, primary key)
- name (string)
- description (text)
- owner_telegram_id (string)
- timezone (string)
- rules (text)
- faq (text)
- created_at (timestamp)
- updated_at (timestamp)

---

## Service Table

Stores services offered by a business.

Fields:
- id (UUID, primary key)
- business_id (UUID, foreign key)
- name (string)
- description (text)
- duration_minutes (integer)
- price (integer)
- is_active (boolean)

---

## Availability Table

Defines working days and hours.

Fields:
- id (UUID, primary key)
- business_id (UUID, foreign key)
- day_of_week (integer, 0–6)
- start_time (time)
- end_time (time)

---

## Booking Table

Stores customer bookings.

Fields:
- id (UUID, primary key)
- business_id (UUID, foreign key)
- service_id (UUID, foreign key)
- client_telegram_id (string)
- client_name (string)
- start_datetime (timestamp)
- end_datetime (timestamp)
- status (enum: pending, confirmed, canceled, completed)
- created_at (timestamp)
- updated_at (timestamp)

Indexes:
- (business_id, start_datetime)
- unique constraint on overlapping time slots

---

## Client Table (Optional, MVP+)

Stores basic client information for future CRM features.

Fields:
- id (UUID, primary key)
- business_id (UUID, foreign key)
- telegram_id (string)
- name (string)
- last_booking_at (timestamp)

---

## Relationships Summary

- One Business → many Services
- One Business → many Availability records
- One Business → many Bookings
- One Service → many Bookings
- One Client → many Bookings

---

## Design Principles

- All tables are business-scoped
- Soft deletion via status flags where needed
- Timezone-aware timestamps
- Minimal but extensible structure

---

## MVP Safety Guarantees

This schema ensures:
- No double bookings
- Clear ownership of data
- Easy migration to multi-business support
- Compatibility with Telegram Bot and Mini App
