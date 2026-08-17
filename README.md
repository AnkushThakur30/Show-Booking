# Show Booking

A browser-based show booking app that includes different show types and a seat-selection workflow matching Worksheet 3 requirements.

## Features

- Multiple show categories such as Movie, Live Show, and Theater
- Seat grid with available/pending/booked states
- 15-minute transaction countdown with auto-release on timeout
- Conflict handling for simultaneous seat selection and payment attempts
- Pay-at-counter mode with either:
  - a generated booking code, or
  - a downloadable PDF receipt containing the movie details and code

## Run locally

1. Open the project folder in a browser, or serve it with a local web server:
   npm test
   python3 -m http.server 8000
2. Visit http://localhost:8000 in the browser.

## Booking rules implemented

- Seat is reserved for the user while a 15-minute transaction window is active.
- If the transaction times out or is rejected, the seat is returned to available status and can be selected again.
- If a single user completes payment, the seat is permanently booked and no longer available.
- If two users select the same seat and one completes payment first, the other receives a booked-seat message.
- If both attempt payment simultaneously, both are returned to seat selection and the seat remains available.
- The pay-at-counter button supports both paid counter confirmation modes as requested.
