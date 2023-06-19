import React from 'react';

/**
 * This component is poorly written and demonstrates insecure code.
 * @component
 */
function PoorlyWrittenComponent() {
  // This code uses the 'eval' function which is a security risk.
  // Avoid using 'eval' in production code.
  eval('console.log("Insecure code executed.")');

  return (
    <div>
      <h2>Poorly Written Component</h2>
      <p>This component showcases insecure code practices.</p>
    </div>
  );
}

export default PoorlyWrittenComponent;

