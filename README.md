# Radio Form to do API calls by cuisine type


This file is for when a user will be searching for restaurants, specifically by the type of food.

The form partial is specifically to pass values to however we're doing our api call. The form should correspond to the correct controller.

Once it's rendered to the HTML, here's an example of what that looks like:
![Example](http://i.imgur.com/ycJToYI.png)
Remember that we can just style it to be vertical as opposed to horizontal.

Lamaj made a good point of having the names and values of the cuisines we're working with on a table, and then within the form, have an iterator that will generate all the tags for us. Then we would just need a bit of string interpolation, and any time we add to the database ourselves (remember to add it directly to the seed file, and do '$ rails db:seed'), it'll render the new cuisine type and have the value ready.

If we need to do an AJAX call for the API, then the way we grab the values(in JQuery) is like this:
```javascript
$('input[name="cuisine_type"]:checked').val();
```
and that'll grab the number value, which is the cuisine_id for the API call.
Otherwise, the value is passed on in the way that we're used to. From the controller, the params will be passed in, and from the controller side we can decide how the HTTParty takes the value.

Any other questions on how form helpers work? 

http://guides.rubyonrails.org/form_helpers.html

That's where I learned how to set things up lol.

Restaurant Finder 



![cuisinielogo](https://cloud.githubusercontent.com/assets/25334388/24486476/4d711448-14d8-11e7-9050-573462a35b35.jpeg)

