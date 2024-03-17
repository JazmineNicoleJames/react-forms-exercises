import Todo from "./Todo";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
    render(<Todo />)
});

it("should match snapshot", () => {
    const { asFragment } = render(<Todo />);

    expect(asFragment).toMatchSnapshot();
});


