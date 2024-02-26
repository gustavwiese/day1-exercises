import { BaseProps } from "../types";
import Profile from "../components/Profile";
import { useState } from "react";

export default function PropsDemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <Profile
        name="Osman Butt"
        email="osmanmail@gmail.com"
        isActive={false}
        singleLine={showHorizontal}
      />
      <Profile
        name="Gustav Wiese"
        email="gusse@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Benjamin Harris"
        email="bharris@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Sham Kapalee"
        email="shammy@email.com"
        isActive={false}
        singleLine={showHorizontal}
      />
      {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
    </>
  );
}
