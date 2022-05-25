import { evenOrOdd } from "@/playground";
describe("Basic Math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });
  it("subtracts two numbers", () => {
    expect(5 - 3).toBe(2);
  });
  describe("evenOrOdd", () => {
    describe("When the number is even", () => {
      it("indicated the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });
    describe("Indicated the number is odd", () => {
      it("Indicated a number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });
});
