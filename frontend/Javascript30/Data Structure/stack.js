var StackNode = /** @class */ (function () {
    function StackNode(val) {
        this.val = val;
        this.next = null;
    }
    StackNode.prototype.setNext = function (val) {
        this.next = val;
    };
    StackNode.prototype.getVal = function () {
        return this.val;
    };
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.size = 0;
        this.top = null;
    }
    Stack.prototype.push = function (val) {
        var newItem = new StackNode(val);
        if (this.size !== 0 && this.top) {
            newItem.setNext(this.top);
        }
        this.top = newItem;
        this.size++;
    };
    Stack.prototype.pop = function () {
        if (this.size) {
        }
    };
    Stack.prototype.getTop = function () {
        var _a;
        return (_a = this.top) === null || _a === void 0 ? void 0 : _a.getVal();
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push(2);
myStack.push("a");
console.log(myStack.getTop(), myStack.size);
