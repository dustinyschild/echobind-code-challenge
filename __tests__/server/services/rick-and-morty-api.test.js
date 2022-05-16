import {
  getAllLocations,
  getCharacter,
  getLocation
} from "../../../server/services/rick-and-morty-api";

const testData = { some: "data" };

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(testData)
  })
);

describe("Rick and Morty API service", () => {
  test("should get data from locations endpoint", async () => {
    const data = await getAllLocations();

    expect(data).toStrictEqual(testData);
  });

  test("should get data from location id endpoint", async () => {
    const data = await getLocation(1);

    expect(data).toStrictEqual(testData);
  });

  test("should get data from character id endpoint", async () => {
    const data = await getCharacter(1);

    expect(data).toStrictEqual(testData);
  });
});
