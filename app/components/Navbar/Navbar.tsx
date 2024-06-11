import Menu from "./Menu";
import Account from "./Account";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-10 border-b-2 border-slate-100">
            <Menu />
            <Account />
        </nav>
    );
}
