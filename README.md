# Editing Content data

All content data in this project like (PLATFRORM, REVIEW, PRODUCTS, PROJECTS, SERVICES) written in json file to make it easier to edit it.
you can Open **src/data/.json** to start edit it

## platform.json

You can edit this file to change what platform you use for your services, on home page section "Platform we build on" is the component we use this data.

-- ARRAY OF OBJECTS --

Each object represent part of development (Backend, Frontend, etc)

* name (string) = Part of development 
* item (array of objects) = Platforms you use for this part of development

   * name (string) = Name of platform 
   * image (string) = Image location 


## products.json

You can edit this file to change what products you have, on products page is the component we use this data for.

-- ARRAY OF OBJECTS --

Each object represent product 

* name (string) = Name of product
* description (array) = Description of product, new item array for new paragraph
* image (string) = Image location 
* feature (array of objects) = Feature of your product 

   * name (string) = Name of feature 
   * img (string) = Image location 
   * desc (string) = feature description
   

## projects.json

You can edit this file to change what projects you have done, on portfolio page is the component we use this data for.

-- ARRAY OF OBJECTS --

Each object represent product 

* name (string) = Name of project
* services (array) = Services used for this project
* shortDescription (string) = Short description for this project ex: "Jeweller's website"
* description (string) = Description for this project
* date (string) = Finish date of project
* image (array) = Image Location
* solution (array) = Explanation of solution you use for this project, new item array for new paragraph
* build (array) = Explanation of how you build this project, new item array for new paragraph
* banner (string) = Banner image location
* mockup (string) = Mockup image location


## review.json

You can edit this file to change reviews from your clients, on home page review section is the component we use this data for.

-- ARRAY OF OBJECTS --

Each object represent review 

* name (string) = Name of client
* review (array) = Review
* star (integer) = How many star did your client gave


## services.json

You can edit this file to change services you have, make sure these services have exactly the same data as **projects.services**

-- ARRAY --

Each array represent service 



# Images location and settings

All of image used for this website is located in **public/images**
You can place images anywhere inside that folder or make new folder category, then you can use it for you content


### Image location name in data .json

The default location for images is **images**, so if you put your image (ex: logo.png) there you can put location like **images/logo.png**

Then if you make another folder (ex: projects) inside images folder and put your images there (logo.png) you can put location like **images/projects/logo.png**.


