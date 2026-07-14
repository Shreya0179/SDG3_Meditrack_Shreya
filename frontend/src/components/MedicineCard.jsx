function MedicineCard({ medicine, onDelete, onEdit }) {
  return (
    <div className="medicine-card">

      <h3>{medicine.medicineName}</h3>

      <p><strong>Dosage:</strong> {medicine.dosage}</p>

      <p><strong>Time:</strong> {medicine.time}</p>

      <p><strong>Notes:</strong> {medicine.notes}</p>

      <div className="card-buttons">

        <button
          className="edit-btn"
          onClick={() => onEdit(medicine)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(medicine._id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default MedicineCard;