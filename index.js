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
    let customers = [];
    let customerIdArray = this.deliveries().map((delivery) => delivery.customerId);
    customerIdArray.forEach((id) => {
      customers.push(store.customers.find((customer) => customer.id === id));
    });
    return customers;
  }

  static byPrice() {
    return store.meals.sort((a,b) => b.price-a.price);
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
    return store.meals.find((meal) => meal.id === this.mealId);
  }

  customer() {
    return store.customers.find((customer) => customer.id === this.customerId);
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
    return store.customers.filter((customer) => customer.employerId === this.id);
  }

  deliveries() {
    let deliveries = [];
    let employeeIdArray = this.employees().map((employee) => employee.id);
    employeeIdArray.forEach((id) => {
      deliveries.push(store.deliveries.find((delivery) => delivery.customerId === id));
    });
    return deliveries;
  }

  meals() {
    let meals = [];
    let mealIdArray = this.deliveries().map((delivery) => delivery.mealId);
    mealIdArray.forEach((id) => {
      meals.push(store.meals.find((meal) => meal.id === id));
    })
    return meals.filter((meal, index, self) => self.indexOf(meal) === index);
  }

  totalMeals() {

  }
}
