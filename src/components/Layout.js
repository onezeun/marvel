import { useNavigate, Outlet } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/`);
  };

  return (
    <div className="min-w-screen min-h-screen animate-gradient-x bg-gradient-to-r from-marvel_dark_purple to-marvel_dark_violet bg-[length:800%_800%] font-nexon text-white">
      <div
        className="flex h-36 cursor-pointer items-center justify-center text-center md:h-28"
        onClick={handleTitleClick}
      >
        <h1 className="box-border font-aggro text-5xl shadow-main_purple text-shadow-lg">
          MARVEL CHARACTERS
        </h1>
      </div>
      <main className="mx-auto max-w-[1200px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
