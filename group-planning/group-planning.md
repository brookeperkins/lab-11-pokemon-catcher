##Pokemon Catcher 

1. Data Files
    -Get pokemon.js 
    -id, image, name

2. Game page: HTML & JS FILES
    -HTML: display page with user-interfaced DOM elements
        -radio buttons
        -'catch' button
        -STRETCH: 'catch' button displays landing page with pokemon stats before bringing to next trio or results page
        -after 10 tries, displays results page
    -JS: function grabbing 3 random pokemon from pokemon.js and allowing user to select one
        -adds the caught pokemon to CaughtArray and EncounteredArray, adds other two unchosen pokemon to EncounteredArray, catchesLeft--
        -this continues up to 10 times
        -STRETCH: assign a numeric value to each pokemon, math.random function communicates with whatever function we write to read radio buttons (e.target.value) to asses likelihood of catching said pokemon
        -if catchesLeft is ZERO, redirect to the results page

3. Results page
        -display array of pokemon with TIMES ENCOUNTERED and TIMES CAUGHT displayed
        -button that clears local storage / resets the game
        =>>> this is where a JS file that pulls from local storage will likely go

4. Next user session should restart

5. Non-duplicating images automatically display



    