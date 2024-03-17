import Box from "./Box";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
    render(<Box />)
});

it("should match snapshot", () => {
    const { asFragment } = render(<Box />);

    expect(asFragment).toMatchSnapshot();
});


