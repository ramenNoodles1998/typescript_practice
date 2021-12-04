let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

let  ids: number[] = [1, 2, 3, 4]

let arr: any[] = [1, true, 'Hello']

let person : [number, string, boolean] = [12, 'brad', true]

let employee: [number, string] []

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Juill']
]

let pid: string | number

pid = '22'

//enum
enum Direction1 {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}

console.log(Direction1.Up)

//Objects

type User = {
    id: number,
    name: string
} 

const user: User = {
    id: 1,
    name: 'John'
}

//Type assertion
let cid: any = 1

let customId = cid as number

//Functions

let addNum = (x: number, y: number) :number => {
    return x + y
}

console.log(addNum(2, 3))

function log(message: string | number): void {
    console.log(message)
}

//Interfaces

interface  PersonInterface {
   readonly id: number,
    name: string
    age?: number
    register(): string
} 
type Point = number | string

const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y: number): number => x + y

const sub: MathFunc = (x:number, y: number): number => x - y


class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
      this.id = id
      this.name = name 
    }

    register(){
        return 'string'
    }
}

const roman = new Person(1, 'roman meredith')

console.log(roman)

class Employee extends Person {
    position: string

    constructor(id: number, name: string, postion: string) {
        super(id, name)

        this.position = postion
    }
}

const emp = new Employee(3, 'Shaun', 'Developer')

console.log(emp.register())

function getArray<T>(items: T[]) : T[] {
    return new Array().concat(items)
}

let numArray = getArray([1,2,3,6])

let strArray = getArray(['brad', 'john', 'Jill'])