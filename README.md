# 🎬 CineFind

> A mobile application for discovering cinemas and theatres across the Netherlands.

![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-Mobile%20App-61DAFB?logo=react&logoColor=black)
![NativeWind](https://img.shields.io/badge/Styling-NativeWind-38BDF8)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

---

## 📖 About

CineFind is a React Native mobile application built with Expo.

The app allows users to discover cinemas and theatres throughout the Netherlands. Locations can be searched, filtered, saved as favourites and viewed on an interactive map.

CineFind also uses the current location of the user to calculate the approximate distance to each cinema or theatre.

---

## ✨ Features

- Browse cinemas and theatres
- Search by name, city or location type
- Filter between cinemas and theatres
- View detailed information about each location
- Save and remove favourite locations
- Store favourites locally using AsyncStorage
- Switch between list and grid layouts
- Save layout preferences locally
- View all locations on an interactive map
- Display the current location of the user
- Open a selected hotspot directly on the map
- Calculate the distance between the user and each hotspot
- Continue using cached hotspot data when the online source is unavailable

---

## 📱 App Flow

```text
Welcome Screen
      ↓
Home Screen
      ↓
Search or Filter Locations
      ↓
Open Location Details
      ↓
Save as Favourite
      ↓
View Location on Map
```

The bottom tab navigation provides access to:

```text
Home
Map
Favorites
Settings
```

---

## 🛠️ Technologies

CineFind is built with:

- React Native
- Expo
- JavaScript
- React Navigation
- NativeWind
- AsyncStorage
- Expo Location
- React Native Maps
- GitHub Pages

---

## 📂 Project Structure

```text
CineFind/
├── docs/
│   ├── hotspots.json
│   └── README.md
│
├── src/
│   ├── components/
│   │   ├── AppButton.js
│   │   ├── BackButton.js
│   │   ├── CategoryFilter.js
│   │   ├── Header.js
│   │   ├── HotspotCard.js
│   │   ├── HotspotDetails.js
│   │   ├── HotspotHeader.js
│   │   ├── HotspotMap.js
│   │   ├── InfoCard.js
│   │   ├── SearchBar.js
│   │   └── SettingOption.js
│   │
│   ├── context/
│   │   └── AppContext.js
│   │
│   ├── navigation/
│   │   └── TabNavigator.js
│   │
│   ├── screens/
│   │   ├── DetailScreen.js
│   │   ├── FavoriteScreen.js
│   │   ├── HomeScreen.js
│   │   ├── MapScreen.js
│   │   ├── SettingScreen.js
│   │   └── WelcomeScreen.js
│   │
│   └── services/
│       ├── hotspotService.js
│       └── locationService.js
│
├── App.js
├── global.css
├── metro.config.js
├── babel.config.js
├── tailwind.config.js
└── package.json
```

---

## 📦 Installation

### Requirements

Make sure the following software is installed:

- Node.js
- npm
- Git
- Expo Go on an Android or iOS device

### 1. Clone the repository

```bash
git clone https://github.com/Quinten-1074726/CineFind.git
```

### 2. Open the project folder

```bash
cd CineFind
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the Expo development server

```bash
npx expo start --clear
```

### 5. Open the app

After starting Expo, a QR code will appear in the terminal.

- On Android, scan the QR code using Expo Go.
- On iOS, scan the QR code using the Camera app and open the project in Expo Go.

The computer and mobile device should normally be connected to the same network.

---

## 🔐 Location Permission

CineFind requests foreground location permission when location-based functionality is used.

The location is used to:

- Display the current position of the user
- Calculate the distance to each hotspot
- Show the user location on the map

If permission is denied, the app can still show the available cinemas and theatres, but distance and user-location features may not be available.

---

## ⭐ Local Storage

CineFind uses AsyncStorage for local data.

The following information is stored locally on the device:

- Favourite hotspot IDs
- Selected list or grid layout
- Cached hotspot data for offline use

Favourite data is connected to the online hotspot data through the unique `id` of each location.

Example:

```json
{
  "pathe-de-kuip": true,
  "eye-filmmuseum": true
}
```

---

## 🗺️ Maps and Navigation

The app uses React Native Maps to display:

- Cinema markers
- Theatre markers
- The current location of the user
- Information about the selected marker

A location can be opened from the detail screen using the **Show on map** button.

The selected hotspot is passed to the map screen through React Navigation parameters.

---

## 🎨 Styling

The user interface is styled with NativeWind.

A custom colour palette is defined in `tailwind.config.js` and reused throughout the application.

The design focuses on:

- Consistent spacing
- Reusable cards and buttons
- Clear typography
- Rounded interface elements
- A simple blue brand colour
- List and grid layouts

---

## 📴 Offline Support

After hotspot data has been loaded successfully, the data is stored locally using AsyncStorage.

When the online request fails, CineFind attempts to load the most recently cached version instead.

```text
Online request succeeds
        ↓
Hotspots are displayed
        ↓
Hotspots are stored locally
        ↓
Online request later fails
        ↓
Cached hotspots are loaded
```

The app must be opened successfully with an internet connection at least once before cached hotspot data is available.

---

## 🌐 Online JSON Data

The hotspot data is published through GitHub Pages.

CineFind does not load `hotspots.json` directly from the local project folder. The app retrieves the file online using `fetch`.

The published JSON file is available at:

```text
https://quinten-1074726.github.io/CineFind/hotspots.json
```

Each hotspot contains information such as:

```json
{
  "id": "pathe-de-kuip",
  "name": "Pathé De Kuip",
  "type": "Cinema",
  "city": "Rotterdam",
  "address": "Cor Kieboomplein 501",
  "postalCode": "3077 MK",
  "latitude": 51.896842882939346,
  "longitude": 4.5234947641590955,
  "description": "Grote bioscoop bij De Kuip met meerdere zalen, actuele films en ruime parkeermogelijkheden."
}
```