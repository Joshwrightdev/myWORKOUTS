

const deleteButton = document.getElementById("delete-btn");
const workoutId = document.getElementById("workout-id");


const newFormHandler = async (event) => {
  event.preventDefault();

  if (workoutId.value) {
    const response = await fetch(`/api/workouts/${workoutId.value}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/api/users/workouts');
      } else {
        alert('Failed to delete workout');
      }
    }
};

deleteButton.addEventListener("click", newFormHandler);