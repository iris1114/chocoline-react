import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Switch from "react-bootstrap/esm/Switch";
import Footer from "./components/layout/Footer";
import ProductPage from "./pages/ProductPage";
import MemberPage from "./pages/MemberPage";
import SignUpPage from "./pages/SignUpPage";
import { AuthProvider } from "./contexts/AuthContext";
import { CartsProvider } from "./contexts/CartsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import OrderCompletedPage from "./pages/OrderCompletedPage";
import "animate.css/animate.min.css";

const App = () => {
  return (
    <AuthProvider>
      <CartsProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/shop" exact>
              <ProductListPage />
            </Route>
            <Route path={`/shop/:productId`} exact>
              <ProductPage />
            </Route>
            <Route path="/card" exact>
              <CardPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/signup" exact>
              <SignUpPage />
            </Route>
            <Route path="/cart" exact>
              <CartPage />
            </Route>
            <Route path="/member" exact>
              <MemberPage />
            </Route>
            <Route path="/complete" exact>
              <OrderCompletedPage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartsProvider>
    </AuthProvider>
  );
};

export default App;
