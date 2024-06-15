import OnboardingForm from "./components/Auth/OnboardingForm";
export default function Home() {
    //TODO Redirect to dashboard on sign in success
    return (
        <main className="py-4 px-4 md:px-6 lg:px-8 xl:px-10 min-h-screen grid place-items-center">
            <OnboardingForm />
        </main>
    );
}
