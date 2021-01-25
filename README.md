# Ingresso Front-End Takehome Task

Created with love by: Ngoc-Jade Nguyen

Take home challenge for frontend developers and UI/UX applicants

Quick Start 

# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5656 client on http://localhost:3000

##-----------------(PROJECT INSTRUCTION && TASKS------------------------

## Project Instructions

- Clone this repository.
- Complete the task
- Send us your solution or provide us with a link to a **private** repository.
- Leave comments where you were not sure how to properly proceed.
- Create a new README with:
  - instructions about how to run your build
  - notes on what you have implemented

## The Task

Your task is to create a calendar widget for a theatre booking app.

### APPEARANCE

![Screen](https://raw.githubusercontent.com/ingresso-group/frontend-takehome/master/assets/calendar.png)

- [x] Your calendar should support at minimum a monthly view
- [x] You can style the calender as you wish.
- [x] We expect the app to be as responsive as possible.
- [x] You are free to use any preprocessor you wish, or write raw CSS.

### FUNCTIONALITY

- [x] _NOTE: You can use a third party date library if you wish_ (used moment.js)
- [x] The widget should be able to cycle through a month by month view of the year
- The calendar should be able to display performance data based on calls to
  our api (you will make the calls to your local node server and it will forward
  them to our api). You have access to 3 end points: - event data: http://localhost:5656/api/event/:event_id - calendar data: http://localhost:5656/api/calendar/:event_id - months data: http://localhost:5656/api/months/:event_id
- Use the event ID 2GXJ, which is the ID for the show Wicked
- You are free to use any framework you wish, or do it VanillaJS style. Please
  provide a note on your choice in the README.
