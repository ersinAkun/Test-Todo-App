import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoHeader from "../todo-header";

const MockTodoHeader = ({ title }) => {
  return (
    <BrowserRouter>
      <TodoHeader title={title} />
    </BrowserRouter>
  );
};

it("should be rendered with given title", () => {
  render(<MockTodoHeader title="Hello World" />);  //dom u simule etti sanki calistirildi
  const headerEl = screen.getByText(/hello world/i); //icinde hello world olan elementi getir
  expect(headerEl).toBeInTheDocument();             //  
});

it("should be rendered default title", () => {
  render(<MockTodoHeader title="" />);
  const headerEl = screen.getByText(/todo app/i);
  expect(headerEl).toBeInTheDocument();
});
