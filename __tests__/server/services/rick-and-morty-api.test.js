import { getAllLocations } from "../../../server/services/rick-and-morty-api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } })
  })
);

describe("Rick and Morty API service", () => {
  test("should get data back from locations endpoint", async () => {
    const data = await getAllLocations();

    console.log(data);
  });
});
