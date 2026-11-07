'use client';

import { Provider } from "react-redux";
import { store } from "@/data/store";

export default function CategoryLayout({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}