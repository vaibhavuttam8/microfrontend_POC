# Karaoke Kittens - Microfrontend POC

Welcome to the Karaoke Kittens microfrontend Proof of Concept (POC). This project demonstrates the use of microfrontend architecture using JavaScript, TypeScript, and React. It consists of multiple independently deployable modules including `addtocart`, `cart`, `server`, `pdp` (Product Detail Page), and `home`.
![image](https://github.com/user-attachments/assets/249ca275-e5aa-46ff-af4c-f49f6a0492b0)



## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Modules](#modules)
  - [Add to Cart](#add-to-cart)
  - [Cart](#cart)
  - [Server](#server)
  - [PDP (Product Detail Page)](#pdp-product-detail-page)
  - [Home](#home)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Overview

Karaoke Kittens is a microfrontend application that showcases how different modules can be developed, deployed, and maintained independently while working together seamlessly. The main page of the application is a fun and interactive interface for Karaoke Kittens.

## Project Structure

The project is organized into several modules, each representing a different part of the application:

- `addtocart`: Handles the "Add to Cart" functionality.
- `cart`: Manages the shopping cart.
- `server`: Provides backend support for the application.
- `pdp`: Displays detailed product information.
- `home`: The main landing page of the application.

## Modules

### Add to Cart

This module provides the functionality to add items to the shopping cart. It includes a button component that can be integrated into the PDP and Home modules.

### Cart

The Cart module displays the items that have been added to the shopping cart. It allows users to view, modify, and remove items from their cart.

### Server

The Server module serves as the backend for the application. It handles API requests, user authentication, and data management.

### PDP (Product Detail Page)

The PDP module displays detailed information about a specific product. It integrates the "Add to Cart" button and shows product images, descriptions, and prices.

### Home

The Home module is the landing page of the application. It provides an overview of the available products and integrates the PDP and Add to Cart components.

## Technologies Used

- **JavaScript**
- **TypeScript**
- **React**
- **Microfrontend Architecture**
- **Webpack** (for module federation)
- **Node.js** (for the server module)

## Setup and Installation

To get started with the Karaoke Kittens microfrontend POC, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/karaoke-kittens.git
   cd karaoke-kittens
then on each repo use command "yarn && yarn start"
