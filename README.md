# HackChan

StormHacks 2021 submission!

## Contributors

* Brendan Saw
* Oliver Xie
* Jacob He
* Samuel Jen

## About

HackChan is a totally anonymous message board, revolutionizing privacy in communication by not storing any user info at all!

## Construction

For most of us, StormHacks was our first time ever using Docker, Node, React, Postgres, and even HTML/CSS! We're really proud of what we could make in 24 hours!

## Accomplishments

1. Create-Retrieve-Update backend + database
2. Using CSS to responsively style our main page, in

## Challenges

1. Connecting from Node container to Postgres Docker container, took us a while but we prevailed :)
2. Defining the primary key for the comment threads - ended up using the timestamp
3. Implementing the Express endpoints and using Fetch API to transfer data between frontend and backend
4. Crafting React components, struggling with hooks, and figuring out other quirks of the JS browser runtime

## Building This Yourself

1. CD into backend folder, run `npm start`
2. CD into frontend folder, run `npm start`

## Next Steps

1. Frontend: formatting times to browser time zone
2. Frontend: improving performance by not calling useEffect unnecessarily :)
3. Backend: Add input validation for threads/comments
4. General: Add boards or ways of categorizing related threads
5. General: Host on Heroku
6. Adding logos and animations
