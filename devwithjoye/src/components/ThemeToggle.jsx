import { Moon, Sun } from "lucide-react";
import { useState } from "react"

{/** creating theme for light mode and dark mode */}
export const Theme = () => {
    const [isDarkMode, setIsDarkmode] = useState(false);

    {/** check if darkmode is true on not and actions that follows */}
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", 'light');
            setIsDarkmode(false);
        } else {
             document.documentElement.classList.add("dark")
             localStorage.setItem("theme", 'dark');
             setIsDarkmode(true);
        }
        };
    
    return (
      <button onClick={toggleTheme}> 
       {" "}
       {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300"/> 
      ) :  (
        <Moon className="h-6 w-6 text-blue-900"/>
      )} 
  </button>
  );
};
