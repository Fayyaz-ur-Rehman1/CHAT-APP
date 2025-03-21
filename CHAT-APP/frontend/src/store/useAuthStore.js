import { create } from "zustand"
import { axiosInstanace } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLogginIng: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstanace.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstanace.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created scessfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLogginIng: true });
        try {
            const res = await axiosInstanace.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Account created scessfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLogginIng: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstanace.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstanace.put("/auth/update-profile", data);
            set({ authUser: res.data });
            toast.success("Profile update successfully");
        } catch (error) {
            console.log(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    },
}))