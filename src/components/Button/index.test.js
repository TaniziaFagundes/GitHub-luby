import {render, screen} from "@testing-library/react"
import Button from "./index"

describe("<Button/>",() =>{
    it('should render the button with the text', () =>{
        render(<Button text="text"/>)
        const button = screen.getByRole('button', {name: /text/i}); 
        expect(button).toBeInTheDocument();
    })
})