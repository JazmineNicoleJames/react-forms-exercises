import NewTodoForm from "./NewTodoForm";
import { render, fireEvent} from "@testing-library/react";


it("should have todo form", () => {
    const { getByTestId } = render(<NewTodoForm />)
    const newTodo = getByTestId('new-todo-form');
    console.log('newTodo', newTodo)
    expect(newTodo).toBeInTheDocument();
});

it("should match snapshot", () => {
    const { asFragment } = render(<NewTodoForm />);

    expect(asFragment).toMatchSnapshot();
})