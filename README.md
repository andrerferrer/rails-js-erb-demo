# GOAL

This is a demo to show-case how to implement `Rails.ajax`.

[You can also check my other demos](https://github.com/andrerferrer/dedemos/blob/master/README.md#ded%C3%A9mos).

## What needs to be done?

### 1. Create a link with an ID

In the [view](https://github.com/andrerferrer/rails-ajax-demo/blob/master/app/views/restaurants/index.html.erb).

eg.:
```erb
<%= link_to '❌', 'javascript:;', id: "restaurant-#{restaurant.id}" %>
```

### 2. Implement the JS

We need to import `Rails` from `rails-ujs` and then call it to the right path and verb. Check it [here](https://github.com/andrerferrer/rails-ajax-demo/blob/master/app/javascript/components/delete_restaurant.js)

And we're good to go 🤓
Good Luck and Have Fun
