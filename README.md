## FSCHALLENGE

#### Install and run API
Node 8.11.2
```
cd api
npm install
node app.js
```
The Api will be available on address http://localhost:3000



Submit `POST` requests to the root path `/` with string `text` param (words or phrases). To receive `200` or `400` http response status code.

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
Fill the field and press `Verify` button to check if the word or phrase is a polidrome.