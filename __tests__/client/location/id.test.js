import * as RTL from "@testing-library/react";
import Location from "@/pages/location/[id]";
import { withTheme } from "../../../helpers/withTheme";

describe("Location", () => {
  test("renders a heading", () => {
    const location = {
      name: "Name of Location"
    };

    const { getByText } = RTL.render(
      withTheme(<Location location={location} />)
    );

    const header = getByText(location.name);

    expect(header).toBeInTheDocument();
  });
});
