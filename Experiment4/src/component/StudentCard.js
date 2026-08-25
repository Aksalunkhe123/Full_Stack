import React, { useState } from 'react';
function StudentCard(props) {
 const [showDetails, setShowDetails] = useState(false);
 const toggleDetails = () => setShowDetails(!showDetails);
 return (
 <div style={{ border: '1px solid gray', padding: '15px', width: '300px', margin: '10px' }}>
 <h2>{props.name}</h2>
 <p>Roll No: {props.rollNo}</p>
 <button onClick={toggleDetails}>
 {showDetails ? 'Hide Details' : 'Show Details'}
 </button>
 {showDetails && (
 <div style={{ marginTop: '10px' }}>
 <p><strong>Department:</strong> {props.department}</p>
 <p><strong>Email:</strong> {props.email}</p>
 </div>
 )}
 </div>
 );
}
export default StudentCard;