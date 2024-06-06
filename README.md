
# Tiffin Delivery Service

The tiffin delivery service aims to provide a convenient and efficient way for 
customers to order and receive freshly prepared meals. The key objectives 
include developing a user-friendly web application, integrating seamless 
payment processing, and implementing a robust order management 
system

### Frontend Development
 The frontend of the tiffin delivery service is developed using React.js, leveraging its component-based 
architecture and state management capabilities. key features include an intuitive menu selection, seamless 
order placement, and a user-friendly dashboard for order history and profile management.

### Backend Development
 The backend of the application is built using Node.js and Express.js, providing a robust and scalable server
side infrastructure. Key functionalities include user authentication, order processing, menu management, 
and integration with the payment gateway.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Omi-Patel/BookYourTiffin
```
Go to the project directory

```bash
  cd BookYourTiffin
```
Install dependencies

```bash
  npm install
```
Start the server

```bash
  npm run dev
```


## API Reference

#### AUTHENTICATION

```bash
  POST /auth/signup
```
```bash
  POST /auth/login
```
```bash
  GET /auth/allusers
```
```bash
  GET /auth/getuser/:id
```

#### MENU

```bash
  POST /api/createmenu
```
```bash
  GET /api/getemenu
```
```bash
  GET /api/getmenu/:id
```
```bash
  DELETE /api/deletemenu/:id
```

#### ORDER

```base
  POST /api/order
```
```bash
  GET /api/getorder
```
```bash
  GET /api/oneorder/:id
```

#### PAYMENT

```bash
  POST /api/checkout
```
```bash
  POST /api/paymentvarification
```
## Tech Stack

**Client :** React, TailwindCSS, NextUI, EmailJS, HeroIcons, React-Toastify

**Server :** Node, Express, Mongoose, JWT, bcryptjs, cors, dotenv

**Payment Integration :** RazorPay


## Lessons Learned

By making this project I have learnt a lots of things about full stack development like : flow of the project, connection between client and server etc.

I learnt how to authenticate a user and how to make a protected route. I also learnt, how to implement payment integration via this project.


## Demo

https://book-your-tiffin-online.vercel.app/
