import NewBoxForm from "./NewBoxForm";
import { render, fireEvent} from "@testing-library/react";


it("should have new box form", () => {
    const { getByTestId } = render(<NewBoxForm />);

    const newBox = getByTestId('new-box-form');

    expect(newBox).toBeInTheDocument();
    
});