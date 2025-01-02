import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try{
            const res = await axiosInstance.get("/auth/check");
        }
        catch(err){
            console.log("Error in checkAuth ", err.message);
            set({authUser: null});
        }
        finally{
            set({ isCheckingAuth: false });
        }
    },
    
    signup: async(data) => {

    }
}));