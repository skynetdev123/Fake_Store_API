import { FAKESTORE_API_URL } from "../utils/constant";

const api = {
  fetchUserCart: async (userId) => {
    const res = await fetch(`${FAKESTORE_API_URL}/carts/user/${userId}`);
    const data = (await res.json())[0];

    return data;
  },

  fetchProducts: async () => {
    const res = await fetch(`${FAKESTORE_API_URL}/products`);
    const data = await res.json();

    return data;
  },
};

export default api;
