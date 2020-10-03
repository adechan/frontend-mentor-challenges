# Insure Landing Page
![desktop-preview](https://user-images.githubusercontent.com/29714385/94993409-82f28880-0599-11eb-8981-92af7b814022.jpg)

## The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## New things I learned doing this:
* The website is created by having multiples subpages of height of *100vh*
* The image will be seen *under* every other elements 
   ```
    footer {
        background-image: url("...");
    }
    ```
 * The image will be seen on *top* of every other element 
    ```
    footer {
        position: relative;
    }
    footer:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 100%;
        background-image: url("...");
    }
    ```
 * To pass an array in props use *{[element_a, element_b]}*
 * You can have *null* in conditional rendering 
   ```
     {
         mobile ? (<img className="banner__imageMobile" src={BannerImage} alt="" />) : null
     }
   ```

## [Live Demo](https://insure-landing-page.web.app/)
