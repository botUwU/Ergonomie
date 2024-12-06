import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: row;
  margin-bottom: 2rem;
  gap: 20px;
`;
function Header() {
  return (
    <header className="app-header">
      <img
        src="https://www.ci.lowell.or.us/sites/default/files/styles/full_node_primary/public/imageattachments/publicworks/page/6551/drop-droplet-raindrop-water_23-512.png?itok=mGpCtHRu"
        alt="Water logo"
      />
      <h1>Think You Know Water ?</h1>
    </header>
  );
}

export default Header;
