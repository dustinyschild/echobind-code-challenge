import * as RTL from "@testing-library/react";
import Location from "@/pages/location/[id]";
import { withTheme } from "../../helpers/withTheme";

describe("Location", () => {
  test("renders a heading", () => {
    const { getByText } = RTL.render(withTheme(<Location />));

    const header = getByText("Location Name");

    expect(header).toBeInTheDocument();
  });
});
