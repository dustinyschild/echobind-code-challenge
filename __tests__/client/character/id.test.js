import * as RTL from "@testing-library/react";
import Character from "@/pages/character/[id]";
import { withTheme } from "../../../helpers/withTheme";

describe("Character", () => {
  test("renders a heading", () => {
    const character = {
      name: "character's name",
      image: "http://dummyurl",
      status: "dead",
      species: "alien",
      type: "",
      origin: {
        name: "someplace",
        url: "http://dummyurl"
      },
      location: {
        name: "a name",
        url: "http://dummyurl"
      }
    };

    const { getByText } = RTL.render(
      withTheme(<Character character={character} />)
    );

    const header = getByText(character.name);

    expect(header).toBeInTheDocument();
  });
});
