const Layout = ({ children }) => {
  return (
    <div>
      <h2>This is common for login</h2>
      {children}
    </div>
  );
};

export default Layout;
