import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    terms: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert("Please enter your email!");
      return;
    }

    if (!formData.terms) {
      alert("You must accept the Terms & Conditions!");
      return;
    }

    // If both are valid
    console.log(`Email: ${formData.email}\nTerms Accepted: ${formData.terms}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email Input */}
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      {/* Terms & Conditions Checkbox */}
      <label htmlFor="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        I agree to the Terms & Conditions
      </label>
      <br /><br />

      {/* Submit Button */}
      <button type="submit" disabled={!formData.email || !formData.terms}>
        Submit
      </button>
    </form>
  );
}

export default App;
