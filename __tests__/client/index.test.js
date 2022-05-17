import * as RTL from "@testing-library/react";
import Home from "@/pages/index";
import { withTheme } from "../../helpers/withTheme";

describe("Home", () => {
  it("renders a heading", () => {
    const props = {
      locations: [
        {
          id: 1,
          name: "Earth",
          type: "Planet",
          dimension: "C-137",
          residents: [],
          created: "datetime string",
          url: "#"
        }
      ]
    };

    const { getByText } = RTL.render(withTheme(<Home {...props} />));

    const heading = getByText("Keeping Up with the Cronenbergs");

    expect(heading).toBeInTheDocument();
  });
});
