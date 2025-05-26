import assert from "assert";
import { add,subtract,hello  } from "../build/debug.js";

assert.strictEqual(add(1, 2), 3);
console.log('add passed');
assert.strictEqual(subtract(1, 2), -1);
console.log('subtract passed');
assert.strictEqual(hello('foo'), 'hello, foo!');
console.log('hello passed');
console.log("ok");
