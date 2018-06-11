let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
    constructor(name) {
        this.id = ++ driverId
        this.name = name
        store.drivers.push(this);
    }

    trips() {
        return store.trips.filter(trip => {
            return trip.driverId = this.id
        })
    }

    passengers() {
        return store.passengers.filter(pas => {
            return pas.driverId = this.id
        })
    }


}


class Passenger {
    constructor(name) {
        this.id = ++ passengerId
        this.name = name
        store.passengers.push(this)
    }

    trips() {
        return store.trips.filter(item => {
            return item.passengerId = this.id
        })
    }

    drivers() {
        return store.drivers.filter(driver => {
            return driver.passengerId = this.id
        })
    }

}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    store.trips.push(this);
    this.passengerId = passenger.id
    this.driverId = driver.id
  }
  passenger() {
      return store.passengers.find(pass => {
          return passengerId = this.passengerId
      })
  }
  
  driver () {
      return store.drivers.find(driver => {
          return driverId =this.driverId
      })
  }

    


}