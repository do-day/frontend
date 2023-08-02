import * as styles from '@/components/styles/Textarea.style';

interface Props {
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Textarea({
  rows,
  placeholder,
  disabled = false,
  value,
  onChange,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <styles.Textarea
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={handleChange}
    ></styles.Textarea>
  );
}
