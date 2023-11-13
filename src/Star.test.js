import {render, screen} from "@testing-library/react";
import {Star} from "./Star";

test(
    "Renders an h1",
    () => {
      render(<Star />)
      const h1 = screen.getByText(/Cool Star/);
      expect(h1).toHaveTextContent("Cool Star");
    }
);