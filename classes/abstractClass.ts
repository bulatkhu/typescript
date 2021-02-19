namespace AbstractNamespace {
  abstract class Vehicle {
    protected constructor(protected wheelCount: number) {}

    abstract updateWheelCount(newWheelCount: number): void

    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`)
    }
  }


  class Motorcycle extends Vehicle {
    constructor() {
      super(2)
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount
      console.log(`Motorcycle has ${this.wheelCount}`)
    }
  }


  class Automobile extends Vehicle {
    constructor() {
      super(4)
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount
      console.log(`Motorcycle has ${this.wheelCount}`)
    }

    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`)
    }
  }


  const motorcycle = new Motorcycle()
  motorcycle.updateWheelCount(1)

  const autoMobile = new Automobile()
  autoMobile.updateWheelCount(3)
}