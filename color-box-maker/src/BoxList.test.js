import BoxList from "./BoxList";
import { render, fireEvent} from "@testing-library/react";

it("renders without crashing", () => {
    render(<BoxList />)
});

it("should match snapshot", () => {
    const { asFragment } = render(<BoxList />)

    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", () => {
    const { queryByText, getByLabelText, getByTestId } = render(<BoxList />);

    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const backgroundColorInput = getByLabelText("Background color:");
    const submitBtn = queryByText("Create box!");

    fireEvent.change(widthInput, {target: {value: "100px"}});
    fireEvent.change(heightInput, {target: {value: "100px"}});
    fireEvent.change(backgroundColorInput, {target: {value: "magenta"}});
    fireEvent.click(submitBtn);

    const newBox = getByTestId('box-component');

    expect(newBox).toBeInTheDocument();
    expect(newBox).toHaveStyle("height:100px");
    expect(newBox).toHaveStyle("width:100px");
    expect(newBox).toHaveStyle("backgroundColor:magenta")
});
