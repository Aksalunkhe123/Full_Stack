import { useParams } from "react-router-dom";
const studentList = {
 1: { name: "Pranoti Bauchkar", department: "CSE" },
 2: { name: "Priya Sharma", department: "IT" },
 3: { name: "Kavya Patil", department: "ECE" },
};
export default function StudentDetail() {
 const { id } = useParams();
 const student = studentList[id];
 if (!student) {
 return <h3>Student not found</h3>;
 }
 return (
 <div>
 <h2>Student Detail</h2>
 <p><strong>Name:</strong> {student.name}</p>
 <p><strong>Department:</strong> {student.department}</p>
 </div>
 );
}