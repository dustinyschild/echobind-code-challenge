import * as RTL from "@testing-library/react";
import Character from "@/pages/character/[id]";
import { withTheme } from "../../../helpers/withTheme";

describe("Location", () => {
  test("renders a heading", () => {
    const { getByText } = RTL.render(withTheme(<Character />));

    const header = getByText("Character Name");

    expect(header).toBeInTheDocument();
  });
});
