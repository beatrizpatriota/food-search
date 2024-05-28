This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next.js Google Maps Application

This application is built using Next.js and renders a Google Map with markers based on data fetched from an API. It also includes an input field that filters the markers based on user input. If you click on a marker you will see the information of that facility.

## Features

- Google Map rendering
- Marker placement based on API data
- Input field for filtering markers
- Display of information of the selected facility 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js
- npm

## Installing

- Clone the repository
- Navigate into the project directory
- cd food-search

## Install the dependencies

- npm install

## Create a .env.local file in the root of your project and insert your Google Maps API Key:

- GOOGLE_MAPS_KEY=your-google-maps-api-key

## Run the development server

- npm run dev
- Open http://localhost:3000 with your browser to see the result.

## Usage

- The application fetches data from the San Francisco Government's Food Trucks API and places markers on the map based on the latitude and longitude provided in the data.
- There is an input field that allows you to filter the markers. The markers will update in real-time as you type into the input field. The filter matches against the fooditems field in the data.

## Built With

- Next.js
- @react-google-maps/api
- @mui/material
