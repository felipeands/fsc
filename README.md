## FSCHALLENGE

#### Install and run API
Node 8.11.2
```
cd api
npm install
node app.js
```
The Api will be available on address http://localhost:3000
Post requests to the root path `/` with `text` a string param. To receive `200` or `400` http status response.

#### Install and Run Frontend
##### Install Angular CLI
```
sudo npm install -g @angular/cli
```
##### Run
```
cd front
npm install
ng serve
```
The application will be available on address http://localhost:4200

#### (Optional) You can build this for production
```
ng build --prod
```
The files will be available in the `dist` folder

### Using the application
Fill the field and press `Verify` to check if the word or phrase is a polidrome.