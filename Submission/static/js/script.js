/**
 * Part A

Using a template literal, change the fullName variable to be
firstName and lastName combined:

Bill Murray

*/

const firstName = "Bill";
const lastName = "Murray";
const fullName = `${firstName} ${lastName}`;

/**
 * Part B

Using a template literal, change the listHTML variable to be
the following multi line string (including indentation):

<ul>
  <li>Banana</li>
  <li>Orange</li>
</ul>

*/

const listHTML = `<ul>
    <li>Banana</li>
   <li>Orange</li>
</ul>`;

/**
 * Part C

Using a template literal, read from the album array to make the following string:

Purple Rain by Prince was released in 1984

*/

const albumName = "Purple Rain";
const albumArtist = "Prince";
const albumYear = 1984;

const albumText = `${albumName} by ${albumArtist} was released in ${albumYear}`;

export { fullName, listHTML, albumText };
