type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export default function Profile({ email, isActive, name, singleLine }: ProfileProps) {
  if (singleLine)
    return (
      <p>
        {name}, {email}, {isActive ? "active" : "inactive"}
      </p>
    );
  else
    return (
      <>
        <p>{name}</p>
        <p>{email}</p>
        <p>{isActive ? "active" : "inactive"}</p>
        <p>_________________</p>
      </>
    );
}
