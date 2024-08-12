import { SignIn } from "@clerk/nextjs";

const Page = () => {
  // Define your styles here
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5', // Light background color
    padding: '20px', // Optional padding
  };

  return (
    <div style={containerStyle}>
      <SignIn
        style={{
          borderRadius: '8px', // Example of adding border radius
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Example of adding shadow
        }}
      />
    </div>
  );
};

export default Page;
