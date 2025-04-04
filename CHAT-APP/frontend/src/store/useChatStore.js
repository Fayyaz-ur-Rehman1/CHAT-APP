import { create } from "zustand";
import toast from 'react-hot-toast';
import { axiosInstanace } from "../lib/axios";


export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectUser: null,
    isUsersLoading: false,
    isMessageLoading: false,

    getUser: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstanace.get("/messages/user");
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessageLoading: true });
        try {
            const res = await axiosInstanace.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch {
            toast.error(error.response.data.message)
        } finally {
            set({ isMessageLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
          const res = await axiosInstanace.post(`/messages/send/${selectedUser._id}`, messageData);
          set({ messages: [...messages, res.data] });
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },

    setSelectedUser: (selectedUser) => set({ selectedUser })
}))