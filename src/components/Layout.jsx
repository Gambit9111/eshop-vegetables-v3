import Header from "./Header/Header";
import Footer from "./Footer";

// for some reason this import works only at the Layout level, but the same import in Product component works
import useCart from "@/zu/cart";

const Layout = ({ children }) => {
  const { items, addItem, removeItem, clearCart, getTotal, updateItem } =
    useCart();

  return (
    <>
      {/* so i have to drill props down */}
      <Header
        items={items}
        addItem={addItem}
        removeItem={removeItem}
        clearCart={clearCart}
        getTotal={getTotal}
        updateItem={updateItem}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
