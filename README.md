This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Users can access the website in 2 ways
1. Access the website through the url: https://team-21-project-onmlhnljv-team-21.vercel.app/
2. Access the website through the localhost by cloning the repository and then following the steps below


First enter the Keeble Directory 

```cd Keeble```

Create a .env file under Keeble and add the following code to it

```
GOOGLE_ID=595522764018-3r6u21rmu1dnmg3ntqmtolb3hhc4cfq4.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
MONGODB_URI=mongodb+srv://benegaldhruv2312:xX9WWNQIsZDJmt4H@cluster0.rnktlbi.mongodb.net/?retryWrites=true&w=majority

UPLOADTHING_SECRET=sk_live_6f9a7f8f89d445b79126a9ce25c5260464ba85cc33a7033cf232926b7d1d8488
UPLOADTHING_APP_ID=oxtkpt1thr

NEXTAUTH_URL=http://localhost:3000/
NEXTAUTH_URL_INTERNAL=http://localhost:3000/
NEXTAUTH_SECRET=4k4ZTGg/fO4Jqn4YOenKxRFZ6S4D+fBCpOgxPul1vZs=
```


Install dependencies

```bash
npm i next
# or
npm install
```

Once installed, run the development server

```npm run dev```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- Get Started/ Guide
- Authentication
- Build Page
- Products Page
- Profile Page


### Get Started/ Guide
Access by clicking on "Get Started" on the home screen or "Guide" at the top of the page.
This page introduces users to what goes into building a customer keyboard from the base to the switches to the keycaps.


### Authentication
Users can login to their google account by clicking on the profile icon on the top right and clicking sign in.
By logging in, users can then gain access to more features offered by this website


### Build Page
Access by clicking on "Build" at the top of the page.
Users can look through the products available on the left and and filter them based on the filters tags provided per category. 
They can then add the products with the "Add" button to add it to the assembly area on the right. 
Users can add the products and save their builds.
DO NOTE that users have to be logged in to their google account to save builds.


### Products Page
Access by clicking on "Products" at the top of the page.
Users can look and search through all the products that is offered. Users can click on any product to load the product page.
From there users can see the features of the product, its price and the reviews for the product.
They can also write a review for the product and input their rating(1 to 5) of the product.
They can also click on "Purchase Product" to go the URL to purchase the product.
DO NOTE that users have to be logged in to their google account to write reviews.


### Profile Page
Access by clicking on the top right icon once logged in.
Users can view their builds by clicking "My Builds". From there, they can review their builds or delete them if they wish to do so.
Users can view their reviews by clicking "My Reviews". From there, they can edit their reviews or delete them if they wish to do so.


