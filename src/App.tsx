import React from "react";
import { IndexLayout } from "./components/IndexLayout";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { MainPage } from "./components/pages/MainPage";
import { LabelsPage } from "./components/pages/LabelsPage";
import { BoardsPage } from "./components/pages/BoardsPage";
import { TicketsPage } from "./components/pages/TicketsPage";
import { TicketViewPage } from "./components/pages/tickets/TicketViewPage";
import { TicketEditPage } from "./components/pages/tickets/TicketEditPage";
import { LabelEditPage } from "./components/pages/labels/LabelEditPage";
import { BoardEditPage } from "./components/pages/boards/BoardEditPage";
import { BoardViewPage } from "./components/pages/boards/BoardViewPage";
import { TicketLabelsPage } from "./components/pages/tickets/TicketLabelsPage";

function App() {
  return (
    <BrowserRouter>
      <IndexLayout>
        <Routes>
          <Route path="/">
            <Route path="tickets">
              <Route path=":id/labels" element={<TicketLabelsPage />} />
              <Route path=":id/edit" element={<TicketEditPage />} />
              <Route path=":id" element={<TicketViewPage />} />
              <Route index element={<TicketsPage />} />
            </Route>
            <Route path="labels">
              <Route path=":id/edit" element={<LabelEditPage />} />
              <Route index element={<LabelsPage />} />
            </Route>
            <Route path="boards">
              <Route path=":id/edit" element={<BoardEditPage />} />
              <Route path=":id" element={<BoardViewPage />} />
              <Route index element={<BoardsPage />} />
            </Route>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </IndexLayout>
    </BrowserRouter>
  );
}

export default App;
