import * as RTL from "@testing-library/react";
import Location from "@/pages/location/[id]";
import { withTheme } from "../../../helpers/withTheme";

describe("Location", () => {
  test("renders a heading", () => {
    const location = {
      name: "Name of Location",
      type: "Planet",
      dimension: "C-137",
      residents: [
        {
          id: 1,
          name: "Rick",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          image: "image url here",
          episode: ["episode url"],
          url: "url string",
          created: "datetime string"
        }
      ]
    };

    const { getByText } = RTL.render(
      withTheme(<Location location={location} />)
    );

    const header = getByText(location.name);

    expect(header).toBeInTheDocument();
  });
});
