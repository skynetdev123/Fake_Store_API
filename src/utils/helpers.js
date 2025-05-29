import { toast } from "react-toastify";

// To convert string to Camel Case
export function toPascalCase(inputString) {
  // Split the input string into words using space or underscore as separators
  const words = inputString.split(/[\s_]+/);

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the words back together without spaces or underscores
  return words.join(" ");
}

export const notify = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      break;

    case "error":
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      break;
  }
};
