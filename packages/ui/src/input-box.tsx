export const InputBox = ({ placeholder}: { placeholder?: string}): JSX.Element => {
  return (
    <div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
