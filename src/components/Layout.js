import { useNavigate, Outlet } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  
  const handleTitleClick = () => {
    navigate(`/`);
  };

  return (
    <div className="font-nexon from-marvel_dark_purple to-marvel_dark_violet animate-gradient-x min-w-screen min-h-screen bg-gradient-to-r bg-[length:800%_800%] text-white">
      <div
        className="flex h-36 md:h-28 cursor-pointer items-center justify-center text-center"
        onClick={handleTitleClick}
      >
        <h1 className="shadow-main_purple box-border font-aggro text-5xl text-shadow-lg">
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
