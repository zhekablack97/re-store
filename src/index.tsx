import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { BookStoreServiceProvider } from "./components/BookStoreServiceContext";
import ErrorBoundry from "./components/ErrorBoundry";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BookStoreService } from "./services/BookStoreServices";
import store from "./store";

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookStoreServiceProvider value={bookStoreService as any}>
          <Router>
            <App />
          </Router>
        </BookStoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
