import axiosClient from '@/apis/axiosClient';

const getProducts = async () => {
    const res = await axiosClient.get(`/product?limit=11`);
    return res.data;
};

export { getProducts };
