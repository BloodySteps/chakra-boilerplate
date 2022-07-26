import create from 'zustand';

import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  isOpen: boolean;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        view: 'Log In',
        ModalCloseHandler: () => set(() => ({ isOpen: false })),
      }),
      {
        name: 'auth-state',
      },
    ),
  ),
);

export default useAuthStore;
