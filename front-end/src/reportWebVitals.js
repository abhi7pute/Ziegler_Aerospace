// reportWebVitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Function to send performance data to an analytics service or log it to the console
function sendToAnalytics({ name, delta, id }) {
  // Replace this with your actual analytics service integration
  console.log(name, delta, id);
}

// Subscribe to Core Web Vitals metrics
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);


export default sendToAnalytics();