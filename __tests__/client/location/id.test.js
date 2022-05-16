import * as RTL from "@testing-library/react";
import Location from "@/pages/location/[id]";
import { withTheme } from "../../../helpers/withTheme";

describe("Location", () => {
  test("renders a heading", () => {
    const pageProps = {
      name: "Name of Location"
    };

    const { getByText } = RTL.render(
      withTheme(<Location pageProps={pageProps} />)
    );

    const header = getByText(pageProps.name);

    expect(header).toBeInTheDocument();
  });
});
