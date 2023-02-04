import { create } from 'zustand';
import Cookies from 'js-cookie';

const initialState = {
  items: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [],
};

const useCart = create((set, get) => ({
  ...initialState,
  addItem: item => {
    set(state => ({ items: [...state.items, item] }));
    Cookies.set('cart', JSON.stringify(get().items));
  },
  removeItem: itemId => {
    set(state => ({ items: state.items.filter(item => item.id !== itemId) }));
    Cookies.set('cart', JSON.stringify(get().items));
  },
  clearCart: () => {
    set({ items: [] });
    Cookies.remove('cart');
  },
  getTotal: () => Math.round(get().items.reduce((total, item) => total + item.price * item.amount, 0) * 100) / 100,
  updateItem: (id, updates) => {
    set((state) => {
      const items = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, ...updates };
        }
        return item;
      });
      return { items };
    });
    Cookies.set('cart', JSON.stringify(get().items));
  },
}));

export default useCart;