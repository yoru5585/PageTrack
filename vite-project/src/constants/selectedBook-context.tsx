import { createContext, useContext, useState, type ReactNode } from "react";
import type { Book } from "../constants";

type SelectedBookContextType = {
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
};

const SelectedBookContext = createContext<SelectedBookContextType | undefined>(undefined);

export const SelectedBookProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <SelectedBookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </SelectedBookContext.Provider>
  );
};

export const useSelectedBook = () => {
  const context = useContext(SelectedBookContext);
  if (!context) {
    throw new Error("useSelectedBook must be used within a SelectedBookProvider");
  }
  return context;
};
