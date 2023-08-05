import { BiPlus } from 'react-icons/bi';
import * as styles from '@/components/styles/ImageUploadButton.style';

interface Props {
  size?: string;
  onClick: () => void;
}

export default function ImageUploadButton({ size = '100%', onClick }: Props) {
  return (
    <styles.Button type="button" size={size} onClick={onClick}>
      <BiPlus />
    </styles.Button>
  );
}
