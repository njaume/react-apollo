import { HeaderStyled, OrderTotal } from "../styles";

export function Header({order}: any) {
  return (
    <HeaderStyled>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <OrderTotal>${order?.total || 0}</OrderTotal>
    </HeaderStyled>
  );
}
