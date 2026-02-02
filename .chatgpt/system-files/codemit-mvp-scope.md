# Codemit — MVP Scope

## MVP Goal

<img style="float: left; margin-right: 20px; border-radius: 10px" src="../system-images/logo.jpg" width="50"/>
The goal of the Codemit MVP is to validate that small businesses are willing to use and pay for a Telegram-based system that automates bookings and reminders.

The MVP must be usable by real businesses with minimal setup.

---

## In Scope (MVP Features)

### Business Setup
- Create a business profile
- Define services (name, duration, price)
- Set working days and hours
- Add basic rules and FAQ text

---

### Booking System
- Generate available time slots
- Prevent double bookings
- Create bookings
- Cancel and reschedule bookings
- Confirm bookings via Telegram messages

---

### Notifications & Reminders
- Booking confirmation message
- Automatic reminder 24 hours before
- Automatic reminder 1 hour before
- Cancellation notification

---

### Telegram Bot Interface
- Business onboarding via chat
- Client interaction via chat
- Owner commands for managing bookings
- Basic role detection (owner vs client)

---

### AI Assistant (Limited)
- Answer customer questions using business-provided data only
- No external knowledge
- Escalate unclear or complex questions to the business owner
- Multi-language support (EN / RU / UZ)

---

### Telegram Mini App (Basic)
- Service list view
- Calendar and time slot selection
- Booking confirmation
- View upcoming bookings

---

## Out of Scope (Explicitly Excluded)

- Online payments and deposits
- Loyalty programs and referrals
- Marketing automation
- Advanced analytics
- Multi-business management
- Multi-staff scheduling
- Inventory management
- Custom branding and themes

---

## Assumptions
- Businesses already use Telegram daily
- One business = one owner (initially)
- Appointment-based services only
- Low to medium booking volume
- Manual owner intervention is acceptable for edge cases

---

## Constraints
- Fast development over perfection
- Minimal UI and configuration
- Limited AI usage to reduce risk
- MVP should be buildable by a small team

---

## MVP Success Criteria
The MVP is considered successful if:
- Businesses can accept bookings without manual coordination
- Reminders reduce missed appointments
- Owners report time savings
- At least 3–5 businesses actively use the system

---

## Post-MVP Expansion (Future)
- Payments and deposits
- Client management (CRM-lite)
- Automation and retention tools
- Multi-staff and multi-location support
- Business analytics
