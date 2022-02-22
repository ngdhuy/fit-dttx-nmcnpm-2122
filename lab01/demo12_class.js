/**
 * Define CLASS
 */

'use strict'
console.clear()

//? Define class (Parents class)
class Parents {
  // Use constructor operator to define attributes of Class
  constructor(value = 'anonymous') {
    this.name = value
  }

  // Getter operator
  get Name() {
    return this.name
  }

  // Setter operator
  set Name(value) {
    this.name = value
  }

  getType() {
    return 'Parents'
  }
}

//? Define child class extend parents class
class Child extends Parents {
  constructor(value = 'anonymous', height = 100) {
    super(value)
    this.height = height
  }

  get Height() {
    return this.height
  }

  set Height(height) {
    this.height = height
  }

  toString() {
    return `Name is ${this.name} with height ${this.height}`
  }

  getType() {
    return 'Child'
  }
}

const main = () => {
  let obj = new Parents('NDHuy')
  console.log(obj)
  obj.name = 'SEstudio'
  console.log(obj)
  console.log(obj.getType())

  let childObject = new Child()
  console.log(childObject)
  console.log(childObject.toString())
  console.log(childObject.getType())
}

main()