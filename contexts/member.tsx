import { createContext, useContext, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { LOCAL_STORAGE_KEY } from '@/constants';

interface MemberContextValues {
  id: number | null;
  saveId: (id: number) => void;
}

const defaultMember: MemberContextValues = {
  id: Number(getLocalStorage(LOCAL_STORAGE_KEY) || 0) || null,
  saveId: (id: number) => {},
};

const MemberContext = createContext(defaultMember);

export const useMember = () => useContext(MemberContext);

const MemberProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState(defaultMember.id);

  const saveId = (id: number) => {
    setLocalStorage(LOCAL_STORAGE_KEY, String(id));
    setId(id);
  };

  const contextValue: MemberContextValues = {
    id,
    saveId,
  };

  return (
    <MemberContext.Provider value={contextValue}>
      {children}
    </MemberContext.Provider>
  );
};

export default MemberProvider;
