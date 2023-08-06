import { useRouter } from 'next/router';
import Head from 'next/head';
import { SERVICE_NAME, SERVICE_URL } from '@/constants';

interface Props {
  title?: string;
  description?: string;
}

export default function HeadMeta({ title, description }: Props) {
  const router = useRouter();

  const url = `${SERVICE_URL}${router.asPath}`;

  return (
    <Head>
      <title>{title ? `${title} - ${SERVICE_NAME}` : SERVICE_NAME}</title>
      <meta
        name="description"
        content={description || '내일 말고 오늘, 안전한 서울 만들기'}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || SERVICE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:article:author" content={SERVICE_NAME} />
    </Head>
  );
}
