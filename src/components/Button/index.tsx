interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
function Button({ children, onClick }: IButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
