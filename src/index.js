var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4];
var arr = [1, true, 'Hello'];
var person = [12, 'brad', true];
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Juill']
];
var pid;
pid = '22';
//enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var user = {
    id: 1,
    name: 'John'
};
//Type assertion
var cid = 1;
var customId = cid;
//Functions
var addNum = function (x, y) {
    return x + y;
};
console.log(addNum(2, 3));
function log(message) {
    console.log(message);
}
var p1 = 1;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return 'string';
    };
    return Person;
}());
var roman = new Person(1, 'roman meredith');
console.log(roman);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, postion) {
        var _this = _super.call(this, id, name) || this;
        _this.position = postion;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Shaun', 'Developer');
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 6]);
var strArray = getArray(['brad', 'john', 'Jill']);
