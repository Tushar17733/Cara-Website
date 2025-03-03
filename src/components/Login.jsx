import { useState } from "react";
import { useUser, SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Login(){
  const { isSignedIn } = useUser();
  const [showAlert, setShowAlert] = useState(false);

  const handleSignIn = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {showAlert && <div style={{ color: "green" }}>Logged in Successfully</div>}

      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/dashboard" afterSignInUrl="/dashboard">
          <button  className="open-dialog-btn">
            Login/Signup
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
        <SignOutButton>
          <button className="open-dialog-btn">
            Logout
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
