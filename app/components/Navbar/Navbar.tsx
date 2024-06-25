import SignIn from "../Auth/SignIn";

type Props = {
    signInOpen: boolean;
    changeSignIn: (open: boolean) => void;
};

export default function Navbar({ signInOpen, changeSignIn }: Props) {
    return (
        <>
            <nav>
                <section className="flex justify-center items-center gap-x-4">
                    <SignIn signInOpen={signInOpen} toggleSignIn={changeSignIn} />
                </section>
            </nav>
        </>
    );
}
