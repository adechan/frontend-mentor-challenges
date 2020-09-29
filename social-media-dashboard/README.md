# Social Media Dashboard

![desktop-preview](https://user-images.githubusercontent.com/29714385/94529964-11d26e80-0243-11eb-9ab4-f6d9e0d56ac4.jpg)


## The challenge

Your challenge is to build out this feature section and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

## New things I learned doing this:
* You have to use ```background-image``` to create a gradient
* To create an *overlay effect* on the Header I used: 
    ``` 
    z-index: -1;
    margin-bottom: -100px
    ```
* Use ```flex-wrap: wrap``` so the flex items are forced to wrap onto multiple lines
* *Array.reduce(function, initialValue)*: executes a *reducer function* on each element of the array, resulting in *single output value*
  ```
  const getTotalFollowers = (listOfFollowers) => (listOfFollowers?.reduce((
    accumulator, currentValue) => accumulator + currentValue,
    0)
  ```
  * *function*: ```(accumulator, currentValue) => accumulator + currentValue```
  * *initialValue*: 0
* You **cannot** use *border-radius* with *background-image*  
  * *TRICK* to be able to have rounded border-top with gradient:
  ```
  border-top: 5px solid trasparent;
  background-image: linear-gradient(_backgroundColour, _backgroundColour), 
                    linear-gradient(_colourGradient1, _colourGradient2);
  background-clip: padding-box/ content-box, border-box;
  ```
    * *padding-box*: when you are using padding in your element
    * *content-box*: when you are not using padding 

## [Live Demo](https://social-media-dashboard-f439f.web.app/)

