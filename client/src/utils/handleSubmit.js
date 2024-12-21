const handleSubmit = (e) => {
    e.preventDefault();
  
    // Generate a random room ID
    const roomId = `room-${Math.random().toString(36).substr(2, 9)}`;
    const meetingLink = `https://meet.jit.si/${roomId}`;
  
    // Save appointment details
    const appointment = {
      ...formData,
      roomId,
      meetingLink,
    };
    setAppointmentDetails(appointment);
    setSuccess(true);
  
    // Send data to backend to send emails
    fetch('http://localhost:5000/send-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        roomId: roomId,
        specialty: formData.specialty,
        date: formData.date,
        timeRange: formData.timeRange,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Emails sent successfully') {
          console.log("Emails sent successfully.");
        } else {
          console.error("Error sending emails:", data);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  