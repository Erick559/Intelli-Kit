import {create} from 'zustand';

interface useProModalStore{
    isOpen:false,
    onOpen: () =>  void,
    onClose:() => void,
};

export const useProModal = create<useProModalStore>((set)=>({
    isOpen:false,
    onOpen: () => set({ isOpen:true }),
    onClose: () => set({ isOpen:false }),
}));

