import Input from "./Input";
import { hasMinLength, isEmail } from "../util/validation";
import useInput from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value));

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleClick(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) return;
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleClick}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && "Please provide a valid email!"}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          required
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={
            passwordHasError && "Please provide a passord of min length 6!"
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
