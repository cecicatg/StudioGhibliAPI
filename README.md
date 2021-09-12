# Studio Ghibli's API

## Description
This API was developed with the intention to obtain summarized and specific data about the films, characters, worlds, species and vehicles that can be enjoyed in the different films that Studio Ghibli gives us, in order to easily obtain information about what we want to know.
The API takes information from: https://ghibliapi.herokuapp.com/

## Instalation
>Prerequisites: 
> - Text editor (preferably an IDE).
> - Terminal.

1. Clone the repository
```bash
git clone https://github.com/cecicatg/StudioGhibliAPI.git
```
2. Install dependencies
```bash
npm install  
```
3. Run the project
```bash
npm run dev
```

## Usage
>Prerequisites: 
> - Project running successfully.
> - Postman.

This API consists in 2 major methods to obtain data in a JSON file format: GET and POST.

To use the GET method follow the subsecuent table:

|Method's name|  Direction and Port   |  Shoud Expect |
| :---        |    :----              |    :----      |
|GET Films|http://localhost:5000/films|Every Studio Ghibli's Film| 
|GET People|http://localhost:5000/people|Every Studio Ghibli's People|
|GET Locations|http://localhost:5000/locations|Every Studio Ghibli's Location|
|GET Species|http://localhost:5000/species|Every Studio Ghibli's Specie|
|GET Vehicles|http://localhost:5000/vehicles|Every Studio Ghibli's Vehicle|

To use the POST method follow the subsecuent table:
|Method's name|  Direction and Port   | Body      |Shoud Expect|
| :---        |    :----              | :----     |    :----   |
|POST Film|http://localhost:5000/select-film|{"id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa"}|Film 'Howl's Moving Castle' details| 
|POST People|http://localhost:5000/select-people|{"id": "267649ac-fb1b-11eb-9a03-0242ac130003"}|Character 'Haku' details|
|POST Location|http://localhost:5000/select-location|{"id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576"}|Location 'The Cat Kingdom' details|
|POST Specie|http://localhost:5000/select-specie|{"id": "b5a92d0e-5fb4-43d4-ba60-c012135958e4"}|Specie 'Spirit' details|
|POST Vehicle|http://localhost:5000/select-vehicle|{"id": "923d70c9-8f15-4972-ad53-0128b261d628"}|Vehicle 'Sasuke's Boat' details|

## Developer
Developed by **Cecilia Alexia Torres Guzman** in the period of August to september of the year 2021.