import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMember } from '@/contexts/member';
import { ROUTES } from '@/constants';
import Custom404 from '@/pages/404';

export default function withAuth(
  Component: NextPage | React.FC,
  isAdmin = false,
) {
  const Auth = () => {
    const { id } = useMember();
    const router = useRouter();

    useEffect(() => {
      if (id) return;
      router.replace(ROUTES.LOGIN, {
        query: { redirect: router.asPath },
      });
    });

    return (
      <>
        {id &&
          (isAdmin && String(id) !== process.env.NEXT_PUBLIC_ADMIN_ID ? (
            <Custom404 />
          ) : (
            <Component />
          ))}
      </>
    );
  };
  return Auth;
}
