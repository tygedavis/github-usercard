/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/tygedavis')
  .then(response => {
     //console.log(response);
     //response.data.forEach(response => {
       const newProfile = response.data;
       cardsClass.appendChild(profiles(newProfile));
          })
//  })
// .catch(error => {
//   console.log(`The data threw an error ${error}`);
// })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cardsClass = document.querySelector('.cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function profiles(data){
  //Create Elements
  const card = document.createElement('div'), //Has class: 'card'
        img = document.createElement('img'), // -Appended to 'card'
        cardInfo = document.createElement('div'), //Has class: 'card-info' -Appended to 'card'
        name = document.createElement('div'), //Has class: 'name'
        userName = document.createElement('p'), //Has class: 'username'
        location = document.createElement('p'),
        profileLink = document.createElement('p'),
        linkChild = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

  //Organize Elements
  card.append(img, cardInfo);
  cardInfo.append(name, userName, location, profileLink, followers, following, bio);
  profileLink.appendChild(linkChild);

  //Add Classes to Elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');


  //Add Content to Elements
  img.src = data.avatar_url;
  name.textContent = data.name;
  userName.textContent = data.login;
  location.textContent = data.location;
  linkChild.textContent = data.name;
  linkChild.setAttribute('href', data.html_url);
  followers.textContent = data.followers;
  following.textContent = data.following;
  bio.textContent = data.bio;

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
