import * as RTL from "@testing-library/react";
import Home from "@/pages/index";
import { withTheme } from "../../helpers/withTheme";

describe("Home", () => {
  it("renders a heading", () => {
    const { getByText } = RTL.render(withTheme(<Home />));

    const heading = getByText("Keeping Up with the Cronenbergs");

    expect(heading).toBeInTheDocument();
  });
});
