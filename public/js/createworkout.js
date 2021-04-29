const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("workout-title").value.trim();
  const desc = document.getElementById("workout-description").value.trim();
  const rating = document.getElementById("workout-rating").value.trim();
  const type = document.getElementById("workout-type").value.trim();
  const zone = document.getElementById("body-zone").value.trim();
  const duration = document.getElementById("workout-duration").value.trim();
  const owner = document.getElementById("owner-id").value.trim();

  if (title && desc && rating && type && zone && duration && owner) {
    const response = await fetch("/createworkout", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        rating,
        type,
        zone,
        duration,
        owner,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/createworkout");
    } else {
      alert("Failed to create project");
    }
  }
};
document.querySelector("").addEventListener("submit", newFormHandler);
