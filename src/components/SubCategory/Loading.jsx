import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Loading(){
  const location = useLocation();

  useEffect(() => {
    const bar = document.querySelector(".loading");
    if(bar){
      bar.classList.remove("run");
      void bar.offsetWidth;  
      bar.classList.add("run");
    }
  }, [location.pathname]);

  return <div className="loading run"></div>;
}
export default Loading
