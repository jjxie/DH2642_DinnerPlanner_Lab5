// Here we create an Angular service that we will use for our
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
    var that = this;

    var numberOfGuests = 2;

    //Writes the number of guests
    this.setNumberOfGuests = function(num) {
        if(num != numberOfGuests){
            numberOfGuests = num >= 1 ? num : 1;
        }
    }

    //Returns the current number of guests
    this.getNumberOfGuests = function() {
        return numberOfGuests;
    }

    // TODO in Lab 5: Add your model code from previous labs
    // feel free to remove above example code
    // you will need to modify the model (getDish and getAllDishes)
    // a bit to take the advantage of Angular resource service
    // check lab 5 instructions for details

    // Angular service needs to return an object that has all the
    // methods created in it. You can consider that this is instead
    // of calling var model = new DinnerModel() we did in the previous labs
    // This is because Angular takes care of creating it when needed.
    this.SearchDish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',{},{
        get: {
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            }
        }
    });
    this.GetDish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/information',{},{
        get: {
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            }
        }
    });
    return this;

});
