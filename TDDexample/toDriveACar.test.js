// in this example I'm gonna use the TDD approach to
// test the functions that will leave me to my car

const { statusOfKeys, carParking } = require("./toDriveACar");

//I just arrived in the car and I need my keys ---> using TEST

describe("toDriveACarTEST", () => {
  test("if statusOfKeys function exists", () => {
    expect(statusOfKeys).toBeDefined();
  });
  test("if there is a key value", () => {
    expect(statusOfKeys).toBeTruthy();
  });
  test("if carParking function exists", () => {
    expect(carParking).toBeDefined();
  });
});

//---> using IT

describe("toDriveACarIT", () => {
  it("should be defined", () => {
    expect(statusOfKeys).toBeDefined();
  });
  it("should exists", () => {
    expect(statusOfKeys).toBeTruthy();
  });
  it("should be defined", () => {
    expect(carParking).toBeDefined();
  });
});
