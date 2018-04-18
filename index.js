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
    return store.meals.filter((meal) => meal.customerId === this.id);
  }

  deliveries() {

  }

  totalSpent() {

  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealIds;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }

  deliveries() {

  }

  customers() {

  }

  byPrice() {

  }
}

class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryIds;
    this.mealId = meal.id;
    this.customerId = customer.id;
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
    this.name = name;
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
