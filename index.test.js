const roman2arabic = require("./index");
test("Returns arabic number from roman numeral, normal values 01", () => {
    expect(roman2arabic("XXI")).toBe(21);    
});
test("Returns arabic number from roman numeral, previus minor than next 01", () => {
    expect(roman2arabic("XL")).toBe(40);    
});
test("Returns arabic number from roman numeral, normal values 02", () => {
    expect(roman2arabic("LVIII")).toBe(58);    
});
test("Returns arabic number from roman numeral, previus minor than next 02", () => {
    expect(roman2arabic("IV")).toBe(4);    
});
test("Returns arabic number from roman numeral, previus minor than next 03", () => {
    expect(roman2arabic("IX")).toBe(9);    
});
test("Returns arabic number from roman numeral, previus minor than next 04", () => {
    expect(roman2arabic("XL")).toBe(40);    
});
test("Returns arabic number from roman numeral, previus minor than next 05", () => {
    expect(roman2arabic("XC")).toBe(90);    
});
test("Returns arabic number from roman numeral, previus minor than next 06", () => {
    expect(roman2arabic("CD")).toBe(400);    
});
test("Returns arabic number from roman numeral, previus minor than next 07", () => {
    expect(roman2arabic("CM")).toBe(900);    
});
