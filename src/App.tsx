import axios from "axios";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BoardPage } from "./pages/boards/Board.page";
import { BoardsPage } from "./pages/boards/Boards.page";
import { CreateBoardPage } from "./pages/boards/CreateBoard.page";
import { EditBoardPage } from "./pages/boards/EditBoard.page";
import { CreateTicketPage } from "./pages/tickets/CreateTicket.page";
import { EditTicketPage } from "./pages/tickets/EditTicket.page";
import { TicketPage } from "./pages/tickets/Ticket.page";
import { API_URL } from "./utils/config";

axios.defaults.baseURL = API_URL;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="tickets">
          <Route path="new" element={<CreateTicketPage />} />
          <Route path=":id">
            <Route path="edit" element={<EditTicketPage />} />
            <Route index element={<TicketPage />} />
          </Route>
          <Route index element={<Navigate to="/" />} />
        </Route>
        <Route path="boards">
          <Route path="new" element={<CreateBoardPage />} />
          <Route path=":id">
            <Route path="edit" element={<EditBoardPage />} />
            <Route index element={<BoardPage />} />
          </Route>
          <Route index element={<Navigate to="/" />} />
        </Route>
        <Route index element={<BoardsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
