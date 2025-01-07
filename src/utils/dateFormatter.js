export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric", // Shows the year as a number (e.g., 2024)
    month: "short", // Shows abbreviated month name (e.g., Jan, Feb)
    day: "numeric", // Shows the day as a number (e.g., 1-31)
  });
};
