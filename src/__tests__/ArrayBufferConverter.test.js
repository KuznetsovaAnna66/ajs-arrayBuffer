import ArrayBufferConverter from "../js/task_2/ArrayBufferConverter";
import getBuffer from "../js/task_2/getBuffer";

test("testing load() method", () => {
  const newBuffer = new ArrayBufferConverter();
  newBuffer.load(getBuffer());
  expect(newBuffer.buffer).toEqual(getBuffer());
});

test("testing toString method", () => {
  const string = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());
  expect(buffer.toString()).toBe(string);
});
