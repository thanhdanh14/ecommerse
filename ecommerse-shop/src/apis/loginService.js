import axiosClient from '@/apis/axiosClient';

const loginService = async (data) => {
    const res = await axiosClient.post(`/login`, data);
    return res.data;
};

export { loginService };
