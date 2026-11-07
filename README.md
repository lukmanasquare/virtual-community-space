# WEB103 Project 3 - Virtual Community Space

Submitted by: **Lukman Adeyemi**

## About this web app

Virtual Community Space is a full-stack web application that helps users discover events happening at different community locations. Users can browse visually represented locations, including the Library, Student Center, Gym, and Auditorium, and view all events associated with each location through dedicated detail pages.

The application uses a React frontend, an Express.js backend, PostgreSQL database hosted on Render, and REST API endpoints to dynamically retrieve and display event information. The project demonstrates frontend-backend integration, database design, API development, and client-side routing.

### Locations Included

* Library
* Student Center
* Gym
* Auditorium

### Events Included

* Resume Workshop
* Game Night
* Morning Yoga
* Open Mic Night
* Study Skills Session

Time spent: **8 hours**

---
## Video Walkthrough

Here's a walkthrough of implemented required features:

![Virtual Community Space Walkthrough](client/src/assets/Virtual%20Community%20New.gif)

---
## Required Features

The following **required** functionality is completed:

* [x] **The web app uses React to display data from the API**
* [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
* [x] **The web app displays a title**
* [x] **Website includes a visual interface that allows users to select a location they would like to view**

  * [x] Visual location cards are displayed instead of a simple text-based list
* [x] **Each location has a detail page with its own unique URL**
* [x] **Clicking on a location navigates to its corresponding detail page and displays a list of all events from the events table associated with that location**

---


## Additional Features

The following **additional** features are implemented:

* [x] Responsive card-based user interface
* [x] Styled location detail pages with dedicated event cards
* [x] React Router navigation between pages
* [x] REST API integration between frontend and backend
* [x] Relational PostgreSQL database structure connecting locations and events
* [x] Dynamic data retrieval using asynchronous API requests
* [x] Organized project structure using controllers, routes, services, and configuration files

---

## Database Structure

### Locations Table

| Field       | Type               |
| ----------- | ------------------ |
| id          | SERIAL PRIMARY KEY |
| name        | TEXT               |
| image       | TEXT               |
| description | TEXT               |

### Events Table

| Field       | Type                  |
| ----------- | --------------------- |
| id          | SERIAL PRIMARY KEY    |
| title       | TEXT                  |
| date        | TIMESTAMP             |
| description | TEXT                  |
| location_id | INTEGER (Foreign Key) |

### Sample Data

#### Locations

* Library
* Student Center
* Gym
* Auditorium

#### Events

* Resume Workshop
* Game Night
* Morning Yoga
* Open Mic Night
* Study Skills Session

---

## Technologies Used

### Frontend

* React
* React Router DOM
* CSS3
* JavaScript (ES6+)
* Vite

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Render PostgreSQL

### Other Tools

* Git
* GitHub
* VS Code

---

## API Endpoints

### Get All Locations

```http
GET /api/locations
```

### Get Location By ID

```http
GET /api/locations/:id
```

### Get All Events

```http
GET /api/events
```

### Get Events By Location

```http
GET /api/locations/:locationId/events
```

---

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Virtual Community Space Walkthrough](client/src/assets/Virtual%20Community%20New.gif)


---

## Notes

One of the biggest challenges encountered during development was configuring the PostgreSQL database connection and integrating the React frontend with the Express backend API. Additional time was spent troubleshooting routing, API requests, database connectivity, and Git configuration issues.

This project provided hands-on experience building a complete full-stack web application using React, Express, PostgreSQL, REST APIs, and client-side routing. It also reinforced concepts such as relational database design, backend controller organization, and asynchronous data retrieval from APIs.

---

## License

Copyright 2026 Lukman Adeyemi

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
