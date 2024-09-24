const EmbeddedGoogleMap = () => {
  return (
    <div>
      <h4>Blood Bank locations:</h4>
      {/* Paste the copied embed code here */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2396505279!2d-74.11808647083292!3d40.70582563092575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1572962876867!5m2!1sen!2sus"
        width="400"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
      ></iframe>
    </div>
  );
};

export default EmbeddedGoogleMap;
