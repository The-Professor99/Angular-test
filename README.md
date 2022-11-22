# AngularTest : Built to test angular skills

## Development server

To successfully run the app on a local development enviroment, [please ensure the server here](https://github.com/The-Professor99/fake_api_server) is running. <strong>This is important!!!</strong>

Run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`.

## Screenshot

![](./src/assets/img/screenshot.png)

## Links

- Live Site URL: [Check out the app here](https://angular-test99.netlify.app)
- Server URL: [The server for this project is hosted here](https://fake-server-app-angular-test.herokuapp.com/)

## Tech Stack

**Client:** Angular, Typescript, RxJS, Angular Material UI, NGRX

**Server:** Javascript, JSON-Server, FakerJS


## Features

- Login: Enter any email address(or what looks like one) and any password to login. Login details returned by the server are saved to LocalStorage.
- Logout: Click on the `Logout` button on the sidebar to logout. This returns you to the login page.
- AuthGuard: To access the main pages of the application, you have to be logged in. This prevents unauthenticated users from accessing the protected pages. 
- The search functionality is set up.
- Patient's registration also work accordingly and these patient details are sent to the server. After registration, you can see the patient's data in the `Patient List` table.
- Not found pages are re-routed to the dashboard(index) page.

## Authors

- [@The-Professor](https://ihechifestus9.web.app/)
