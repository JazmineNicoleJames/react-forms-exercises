import TodoList from "./TodoList";
import { render, fireEvent} from "@testing-library/react";

it("renders without crashing", () => {
    render(<TodoList />)
});

it("should match snapshot", () => {
    const { asFragment } = render(<TodoList />)

    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", () => {
    const { queryByText, getByLabelText, getByTestId } = render(<TodoList />);

    const todoInput = getByLabelText("Todo:");
    const submitBtn = queryByText("Add todo");

    fireEvent.change(todoInput, {target: {value: "shopping"}})
    fireEvent.click(submitBtn);

    const newBox = getByTestId('todo-component');

    expect(newBox).toBeInTheDocument();
});
