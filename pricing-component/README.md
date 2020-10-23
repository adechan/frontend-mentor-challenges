# Pricing Component

![desktop-preview](https://user-images.githubusercontent.com/29714385/97001826-b3e32f00-1541-11eb-9c16-6acafa1e2387.jpg)


## The challenge

Your challenge is to build out this pricing component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard using left - right keys.

## New things I learned doing this:
* How to use *event listeners* in the useEffect hook
  ```
    useEffect(() => {
      window.addEventListener("keydown", handlePress);

      return () => {
        window.removeEventListener("keydown", handlePress);
      };
    }, [handlePress]);
  ```
* How to use *useCallback hook*
  * useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
  ```
   const handlePress = useCallback(
    (event) => {
      ... do stuff
    },
    [vars from do stuff that change]
  );
  ```

## [Live Demo](https://pricing-component-7a170.web.app/)

