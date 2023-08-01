import * as styles from '@/components/styles/Textarea.style';

interface Props {
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
}

export default function Textarea({
  rows,
  placeholder,
  disabled = false,
  value,
}: Props) {
  return (
    <styles.Textarea
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    ></styles.Textarea>
  );
}
