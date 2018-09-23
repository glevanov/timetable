import getDataByID from "../src/js/getDataByID";

test("it returns an array", () => {
  expect(Array.isArray(getDataByID("id", []))).toBe(true);
});
test("it returns items with correct id", () => {
  const sampleData = [{ id: `1` }, { id: `2` }, { id: `2` }];
  const sampleResult = [{ id: `2` }, { id: `2` }];

  expect(getDataByID("2", sampleData)).toEqual(sampleResult);
});
