import React from 'react';
import StudentCard from './StudentCard';
function App() {
 return (
 <div className="App">
 <h1>Student Info Cards</h1>
 <StudentCard
 name="Pranoti Bauchkar"
 rollNo="2553014"
 department="Computer Science"
 email="pranoti@rit.edu"
 />
 <StudentCard
 name="Kavya Jain"
 rollNo="1002"
 department="IT"
 email="kavya@rit.edu"
 />
 </div>
 );
}
export default App;