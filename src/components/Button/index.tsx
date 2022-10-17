interface IButtonProps {
  buttonTitle: string;
}

export default function Button({ buttonTitle }: IButtonProps) {
  return <button id="button-component">{buttonTitle}</button>;
}
