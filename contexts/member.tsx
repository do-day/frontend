import { createContext, useContext, useState } from 'react';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/utils';
import { LOCAL_STORAGE_KEY } from '@/constants';

interface MemberContextValues {
  id: number;
  saveId: (id: number) => void;
  resetId: () => void;
}

const defaultMember: MemberContextValues = {
  id: Number(getLocalStorage(LOCAL_STORAGE_KEY) || 0),
  saveId: (id: number) => {},
  resetId: () => {},
};

const MemberContext = createContext(defaultMember);

export const useMember = () => useContext(MemberContext);

const MemberProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState(defaultMember.id);

  const saveId = (id: number) => {
    setLocalStorage(LOCAL_STORAGE_KEY, String(id));
    setId(id);
  };

  const resetId = () => {
    removeLocalStorage(LOCAL_STORAGE_KEY);
    setId(0);
  };

  const contextValue: MemberContextValues = {
    id,
    saveId,
    resetId,
  };

  return (
    <MemberContext.Provider value={contextValue}>
      {children}
    </MemberContext.Provider>
  );
};

export default MemberProvider;
