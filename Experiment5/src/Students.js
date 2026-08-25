import { Link } from "react-router-dom";
const studentList = [
 { id: 1, name: "Pranoti Bauchkar" },
 { id: 2, name: "Priya Sharma" },
 { id: 3, name: "Kavya Patil" },
];
export default function Students() {
 return (
 <div>
 <h2>Student List</h2>
 <ul>
 {studentList.map(s => (
 <li key={s.id}>
 <Link to={`/students/${s.id}`}>{s.name}</Link>
 </li>
 ))}
 </ul>
 </div>
 );
}