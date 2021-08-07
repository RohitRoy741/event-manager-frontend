<h1>Frontend Of Event Management Application</h1>
<p>This is a react application which acts as the frontend of the event management application hosted on github pages. The backed of this application is written in NodeJs and hosted on heroku.</p>
<h2>Features</h2>
<ul>
  <li><h3>Login And Signup</h3>
    <p>The landing page of the application is currently set to the login form. User can provide a username password combination to acces other features of the application. On the backend the login system works using bcrypt and json webtokens. User's password is compared with the internally hashed (using bcrypt) password. On successfull match a json webtoken is returned is stored in session's storage for further use. <p>
  </li>
  <li><h3>Reading the Events</h3>
    <p>On successful login, the react application makes an axios get request with json webtoken in Authorization header as bearer token. The request on successfull verification of token returns the data of all the events. This data is then transformed accordingly to display on UI as a list of events. The image for each event is obtained through unsplash API.</p>
  </li>
  <li><h3>Creating Events</h3>
    <p>A link on the top navbar gives the option of creating an event to the user. When clicked the nav item propmpts the user to fill a form using a modal. The form captures basic data related to an event. Each field of the form is required on both frontend and backend. When the form is filled and the user clicks on submit the application creates an event object from the data and adds it to an already existing list of events. This happens quickly and it appears as if the event is created and added in no time. Behind the scenes, an axios post request is made with event data and json webtoken which creates the event at the backend from where it is stored in database. </p>
  </li>
  <li><h3>Updating Events</h3>
    <p>Every event card contains an update button which on clicking prompts and event update form for the user. The form is prefilled with the original details of event and user needs to change only the details which have to be updated. On submitting the form, the react application quickly updates the event from the internal list and makes an axios patch request to update the event at the backend too.</p>
  </li>
  <li><h3>Deleting Events</h3>
    <p>Every event card has a delete button at the bottom which can be clicked to delete the event. The react application removes the deleted event from the internal list and at the same time makes an axios delete request to remove event from the database through backend.</p>
  </li>
  <li><h3>Adding to Schedule</h3>
    <p>Every event card consists of a RSVP button which can be clicked by the users to add the event to their schedule. On the frontend the scheduled events are managed by a boolean field rsvp. However on backend there is a many to many relation between event and user models which depict the schedule. Thus in addition of updating boolean rsvp field the application also makes an axios post request to add the event to the schedule.</p>
  </li>
  <li><h3>Checking the Schedule</h3>
    <p>The navbar item Schedule when clicked changes the event list to only those events which are added to a users schedule. This is done by checking the boolean rsvp field of the events, however there is also a GET REST API which can be utilised for the purpose.</p>
  </li>
  <li><h3>Removing from Schedule</h3>
    <p>All the added events have an added button instead of RSVP button which can be clicked to remove the event from the schedule. This updates the rsvp boolean field and makes an axios post request to remove the event from schedule at backend. </p>
  </li>
  <li><h3>Banner Event</h3>
    <p>The application shows the event details of the earliest occuring event out of all events data as the banner of homepage. Along with basic details like name, hosting company and place the banner also displays a countdown timer until the event. This banner event updates in case if any other event is added which is occuring earlier than banner event, or if the banner event is updated or deleted.</p>
  </li>
  <li><h3>Filtering the data</h3>
    <p>The events can be filtered according to their scheduled time, like the events occuring in this week, in this month and in the next three months. This is acheived using a form and radio buttons displayed right after the navbar and banner. Users can click on all time option to get back all events.</p>
  </li>
  <li><h3>Searching the data</h3>
    <p>The events can be searched using the provide search bar with the options of name, city and company. After searching the users can click on reset button to get back all events. </p>
  </li>
  <li><h3>Mobile Responsive UI</h3>
    <p>The UI of the application is developed with the help of React Bootstrap, Material UI and some custom CSS and is completely mobile responsive effectively adapting to changing screen sizes. </p>
  </li>
</ul>
    
