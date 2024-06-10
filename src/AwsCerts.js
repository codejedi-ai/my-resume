import React from 'react';
import './AwsCerts.css'; // Import the CSS file

function AwsCerts({ certs }) {
  return (
    <div className="aws-certs">
      <h2>AWS Certifications</h2>
      <div className="certs-images">
        {certs.map((cert, index) => (
          <img key={index} src={cert} alt={`cert-${index}`} className="cert-image" />
        ))}
      </div>
    </div>
  );
}

export default AwsCerts;