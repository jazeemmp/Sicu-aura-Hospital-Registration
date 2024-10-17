export   const formatDate = (dateString) => {
    const createdAt = new Date(dateString);
    const day = String(createdAt.getDate()).padStart(2, "0");
    const month = String(createdAt.getMonth() + 1).padStart(2, "0");
    const year = createdAt.getFullYear();
    const hours = createdAt.getHours() % 12 || 12;
    const minutes = String(createdAt.getMinutes()).padStart(2, "0");
    const ampm = createdAt.getHours() >= 12 ? "pm" : "am";

    return `${day}.${month}.${year}, ${hours}:${minutes} ${ampm}`;
  };