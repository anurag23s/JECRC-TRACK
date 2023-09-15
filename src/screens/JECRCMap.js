import React from 'react';
import { WebView } from 'react-native-webview';

const JECRCMap = () => {
  const iframeHTML = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.3791853381673!2d75.82126390944609!3d26.781789012855793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9763e6030f1%3A0x4137675e5cf54360!2sJECRC%20Foundation!5e1!3m2!1sen!2sin!4v1694774217393!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <WebView
      source={{ html: iframeHTML }}
      style={{ flex: 1 }}
    />
  );
}

export default JECRCMap;
