"use strict";

const arrName = [
  "Ananta",
  "Asif",
  "Nibir",
  "Jihan",
  "Jarif",
  "Zayed",
  "Ifty",
  "Rayhan",
  "Ishtiak",
];
console.log(arrName);

arrName.forEach(function (i) {
  const name = i.toLowerCase();
  const reply =
    name.startsWith("i") || name.startsWith("j")
      ? `Goodbye ${name}`
      : `Hello ${name}`;
  console.log(reply);
});
