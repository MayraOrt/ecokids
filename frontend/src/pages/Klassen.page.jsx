import { useEffect, useState } from "react";
import { classesService } from "../services/classes.service";

const KlassenPage = () => {
  const [classes, setClasses] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState(null);
  const [formData, setFormData] = useState({
    level: "",
    name: "",
    comment: ""
  });

  const handleOpenModal = (classData = null) => {
    if (classData) {
      setFormData({
        level: classData.level,
        name: classData.name,
        comment: classData.comment
      });
      setCurrentClass(classData);
    } else {
      setFormData({ level: "", name: "", comment: "" });
      setCurrentClass(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentClass(null);
    setFormData({ level: "", name: "", comment: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentClass) {
      
      try {        
        await classesService.updateClass({ ...currentClass, ...formData });
        fetchClasses();
      } catch (e) {
        console.error(e);
      }
    } else {

      try {
        await classesService.createClass(formData);
        fetchClasses();
      } catch (e) {
        console.error(e);
      }
    }
    handleCloseModal();
  };

  const handleDelete = async (classId) => {
    if (confirm('Are you sure you want to delete this class?')) {
      try {
        await classesService.deleteClass(classId);
        fetchClasses();
      } catch (e) {
        console.error('Error deleting class', e);
      }
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await classesService.getAllClasses();
      setClasses(response.data);
    } catch (e) {
      console.error('Error fetching classes', e);
      setClasses([])
    }
  }

  useEffect(() => {
    fetchClasses();
  }, [])

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Class Management</h1>
        <button
          onClick={() => handleOpenModal()}
          className="btn-primary"
        >
          Add New Class
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {classes.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{classItem.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classItem.level}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classItem.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{classItem.comment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleOpenModal(classItem)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(classItem.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">
              {currentClass ? 'Edit Class' : 'Add New Class'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <input
                    type="text"
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comment
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {currentClass ? 'Save Changes' : 'Create Class'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default KlassenPage;
