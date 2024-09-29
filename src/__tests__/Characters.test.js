import Character from "../js/task_1/Character";
import Magician from "../js/task_1/Magician";
import Daemon from "../js/task_1/Daemon";

test("testing of setter/getter (distance)", () => {
  const character = new Character("Daemon");
  character.distance = 2;
  expect(character.distance).toBe(2);
});

test("testing of setter/getter (stoned)", () => {
  const character = new Character("Daemon");
  character.stoned = true;
  expect(character.stoned).toBe(true);
});

test("testing of setter/getter (attack)", () => {
  const character = new Character("Daemon");
  character.attack = 100;
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test("testing of setter/getter (attack) with stoned character", () => {
  const character = new Character("Daemon");
  character.attack = 100;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85);
});

test("testing of Daemon creation with type", () => {
  const result = new Daemon("Ivan", "Daemon");
  expect(result).toEqual({ name: "Ivan", type: "Daemon" });
});

test("testing of Magician creation with type", () => {
  const result = new Magician("Ivan", "Magician");
  expect(result).toEqual({ name: "Ivan", type: "Magician" });
});

test("testing of Daemon creation without type", () => {
  const result = new Daemon("Ivan");
  expect(result).toEqual({ name: "Ivan", type: "Daemon" });
});

test("testing of Magician creation without type", () => {
  const result = new Magician("Ivan");
  expect(result).toEqual({ name: "Ivan", type: "Magician" });
});
