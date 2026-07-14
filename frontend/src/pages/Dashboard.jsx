import { useEffect, useState } from "react";
import api from "../services/api";
import MedicineCard from "../components/MedicineCard";
import "../styles/dashboard.css";

function Dashboard() {

  const [medicines, setMedicines] = useState([]);

  const [formData, setFormData] = useState({
    medicineName:"",
    dosage:"",
    time:"",
    notes:""
  });

  const [editingId,setEditingId]=useState(null);

  const fetchMedicines = async()=>{

      const res=await api.get("/medicines");

      setMedicines(res.data);

  }

  useEffect(()=>{

      fetchMedicines();

  },[]);

  const handleChange=(e)=>{

      setFormData({

          ...formData,

          [e.target.name]:e.target.value

      })

  }

  const handleSubmit=async(e)=>{

      e.preventDefault();

      if(editingId){

          await api.put(`/medicines/${editingId}`,formData);

          setEditingId(null);

      }

      else{

          await api.post("/medicines",formData);

      }

      setFormData({

          medicineName:"",
          dosage:"",
          time:"",
          notes:""

      })

      fetchMedicines();

  }

  const deleteMedicine = async (id) => {

    if (!window.confirm("Delete this medicine?")) return;

    await api.delete(`/medicines/${id}`);

    fetchMedicines();

};

  const editMedicine=(medicine)=>{

      setEditingId(medicine._id);

      setFormData(medicine);

  }

  return(

<div className="dashboard container">

<h2>Medicine Dashboard</h2>
<p className="welcome-text">
  Welcome, {JSON.parse(localStorage.getItem("user"))?.name} 👋
</p>

<form onSubmit={handleSubmit} className="medicine-form">

<input

name="medicineName"

placeholder="Medicine Name"

value={formData.medicineName}

onChange={handleChange}

required

/>

<input

name="dosage"

placeholder="Dosage"

value={formData.dosage}

onChange={handleChange}

required

/>

<input

name="time"

placeholder="Time"

value={formData.time}

onChange={handleChange}

required

/>

<input

name="notes"

placeholder="Notes"

value={formData.notes}

onChange={handleChange}

/>

<button className="btn">

{editingId ? "Update Medicine":"Add Medicine"}

</button>

</form>

<div className="medicine-grid">

{medicines.length === 0 ? (

    <div className="empty-state">
    <h3>💊 No Medicines Added</h3>
    <p>Click the button above to add your first medicine.</p>
</div>

) : (

    medicines.map((medicine) => (

        <MedicineCard
            key={medicine._id}
            medicine={medicine}
            onDelete={deleteMedicine}
            onEdit={editMedicine}
        />

    ))

)}

</div>

</div>

)

}

export default Dashboard;