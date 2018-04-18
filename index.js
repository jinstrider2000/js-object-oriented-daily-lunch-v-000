const store = {
  deliveries: [],
  meals: [],
  employers: [],
  customers: []
};

let customerIds = 0;
let employerIds = 0;
let mealIds = 0;
let deliveryIds = 0;

class Customer {
  constructor(name, employer) {
    this.id = ++customerIds;
    if (name !== undefined) {
      this.name = name;
    }
    if (employer !== undefined) {
      this.employerId = employer.id;
    }
    store.customers.push(this);
  }

  meals() {
    let meals = [];
    let mealIdArray = this.deliveries().map((customerDelivery) => customerDelivery.mealId);
    mealIdArray.forEach((id) => {
      meals.push(store.meals.find((meal) => meal.id === id));
    });
    return meals;
  }

  deliveries() {
    return store.deliveries.filter((delivery) => delivery.customerId === this.id);
  }

  totalSpent() {
    let total = 0;
    this.meals().forEach((meal) => {
      total += meal.price;
    })
    return total;
  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealIds;
    if (title !== undefined) {
      this.title = title;
    }
    if (price !== undefined) {
      this.price = price;
    }
    store.meals.push(this);
  }

  deliveries() {
    return store.deliveries.filter((delivery) => delivery.mealId === this.id);
  }

  customers() {
    
  }

  byPrice() {

  }
}

class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryIds;
    if (meal !== undefined) {
      this.mealId = meal.id;
    }
    if (customer !== undefined) {
      this.customerId = customer.id;
    }
    store.deliveries.push(this);
  }

  meal() {

  }

  customer() {

  }
}

class Employer {
  constructor(name) {
    this.id = ++employerIds;
    if (name !== undefined) {
      this.name = name;
    }
    store.employers.push(this);
  }

  employees() {

  }

  deliveries() {

  }

  meals() {

  }

  totalMeals() {

  }
}
