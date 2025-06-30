export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <source src="/test.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
