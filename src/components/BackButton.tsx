import { TbChevronLeft } from "react-icons/tb";
import { LinkButton } from "./LinkButton";

export function BackButton() {
  return (
    <LinkButton variant="link" leftIcon={<TbChevronLeft />} to={-1}>
      Back
    </LinkButton>
  );
}
