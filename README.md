# Cuisinie

Restaurant Finder 





![cuisinielogo](https://cloud.githubusercontent.com/assets/25334388/24486476/4d711448-14d8-11e7-9050-573462a35b35.jpeg)


## Technologies Used

- Rails
-- HTTParty, Devise, Zomato API

- HTML, CSS, Javascript

- Heroku
-- https://cuisinie.herokuapp.com/

## Installation Instructions

- Download the file, and enter the "/Cuisinie" directory in your terminal/shell

- Enter the following lines one by one in your terminal
`bundle install`
`rails db:create`
`rails db:migrate`
`rails db:seed`


## Approach Taken

Our approach to this was to first get working comfortably with the API first, and then getting all of our MVP features functional. Each step along the way with testing things and making sure it was bug free before moving on, the moment a feature was completed by Paul and Jamal, Brian and Adrian would begin working on the structure and style of the page to make it simple to understand from a user's perspective. Once that step was done, we would all go back and fine tune the smaller details, and keep working on the next thing.

## Wireframes / Planning

![Login Page](http://i.imgur.com/avjbU9V.png)
![Search Page](http://i.imgur.com/KNXWUWU.png)
![Favorites Page](http://i.imgur.com/Cy3kZGZ.png)

![Website Flow](http://i.imgur.com/xgQe1s5.jpg)

## Unsolved Problems

- While navigating the site (aside from logging in/out, and refreshing the page) the slideshow on the main page will speed up and the images begin to flicker

## User Stories

- As a user, I want to search for restaurants in NYC so I can find places where I can eat food that I'm interested in
- As a user, I want to see a map of where a restaurant is so that I can go there to eat
- As a user, I want to save retaurants as my favorite so I have easy access to it's information later
- As a user, I want to leave a comment about a restaurant so other users can know what my opinion of that restaurant is
