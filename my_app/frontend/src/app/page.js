'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import IconButton from '@/pages/features/OtherFeatures/IconButton';

export default function Home() {
  const router = useRouter();
  const handleSmartCostSplittingClick = () => {
    router.push('/smart-cost-splitting'); // Make sure this route exists
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(208, 234, 255, 0.26)",
          zIndex: 1,
        }}
      ></div>

      {/* Logo and name */}
      <div
        style={{
          position: "absolute", // distance from the top
          left: "20px", // distance from the left
          display: "flex",
          alignItems: "center",
          zIndex: 2, // Ensure it's above other content
        }}
      >

      {/* Logo */}
      <Image
        src="/images/logo.png" // Make sure the file is in /public
        alt="TravelLah Logo"
        width={300}
        height={300}
        layout="intrinsic" // Adjusts to container size automatically
      />
      </div>

      {/* Foreground content */}
      <div 
        style={{ 
          position: "relative",
          zIndex: 2,
          color: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // start from top
          paddingTop: "20vh", // push content down
          textAlign: "center",
        }}
      >
        <h1 style={{ 
            fontSize: "3.4rem", 
            fontWeight: "bold", 
            marginBottom: "1rem", 
            textShadow: "6px 6px 20px rgba(0, 0, 0, 0.7)", // 3D text effect
          }}>
          Don't let your travel plans unravel
        </h1>
        <div>
          <p style={{ 
            fontFamily: "var(--font-open-sans)",  
            fontWeight: 600,                  
            fontStyle: "italic",                 
            fontSize: "2rem",
            }}>
              Plan group trips: no sweat, no fuss
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#dbd9ce", // Light background color
          padding: "1.5rem 0", // Space for content
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Dive In
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "10rem", flexWrap: "wrap", marginLeft: "-5.6rem" }}>
          <IconButton label="Collaborative Itinerary" />
          <IconButton label="Smart Cost-Splitting" onClick={handleSmartCostSplittingClick}/>
          <IconButton label="Real-Time Chat" />
        </div>   
      </div>
    </div>
  );
}

