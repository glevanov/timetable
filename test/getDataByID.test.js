import { assert } from "chai";
import getDataByID from "../src/js/getDataByID";

const sampleData = [{ id: `1` }, { id: `2` }, { id: `2` }];
const sampleResult = [{ id: `2` }, { id: `2` }];

describe("getDataByID", () => {
  it("returns an array", () => {
    assert.isArray(getDataByID("id", []));
  });
  it("returns items with correct id", () => {
    assert.equal(
      JSON.toString(getDataByID("2", sampleData)),
      JSON.toString(sampleResult)
    );
  });
});
