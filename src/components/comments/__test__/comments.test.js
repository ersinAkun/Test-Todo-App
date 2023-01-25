import { render, screen } from "@testing-library/react";
import axios from "axios";
import { Await } from "react-router-dom";
import Comments from "../comments";

jest.mock("axios");

describe("coments", () => {

    const comments = [
        {id: 1, body:"John"},
        {id: 2, body:"Michael"}
    ];

    
    it("should render the first card", async() => {
        axios.get.mockResolvedValueOnce( {data: comments});
        render(<Comments/>);
        const commentEl = await screen.findByTestId("comment-card-1")
        expect(commentEl).toBeInTheDocument();
    });

})






