import { useLocalStorage }  from './useLocalStorage';
import { useEffect } from "react";

function useDarkMode() {

  const [someValue, setSomeValue] = useLocalStorage("darkMode");

  useEffect(() => {
    const element = document.getElementById('root');
    element.classList.toggle('dark-mode')
},[someValue])
  
return [someValue, setSomeValue]
}

export default useDarkMode
