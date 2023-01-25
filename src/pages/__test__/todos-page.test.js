import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodosPage from "../todos-page"

const addTask = (task) => { 
        const buttonEl = screen.getByRole("button", {name:"Add"});
        const inputEl = screen.getByPlaceholderText(/Type some text/i);
        userEvent.type(inputEl, task);
        userEvent.click(buttonEl);
 }

describe( "adding functionality", ()=>{

    it("should render new task in the list", ()=>{
        render(<TodosPage/>);
        addTask("This task is for testing purpose")        
        const listItemEl = screen.getByText(/This task is for testing purpose/i);
        expect(listItemEl).toBeInTheDocument();
    })
})



describe ("completed functionality", ()=>{
    it("task should not have 'completed' class when it is initially created", ()=>{
        render (<TodosPage/>);
        addTask("Hi there!");
        const listItemEl = screen.getByText(/Hi there!/i);
        expect(listItemEl).not.toHaveClass("completed");
    });

    it("task should have 'completed' lass when clicking on it", ()=>{
        render(<TodosPage/>);
        addTask("Hi there!");
        const listItemEl = screen.getByText(/Hi there!/i);
        userEvent.click(listItemEl);
        expect(listItemEl).toHaveClass("completed");
    })


});
