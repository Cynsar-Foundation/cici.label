import React, { useEffect, ComponentType } from 'react';
import checkAPI from '@redux/services/checkApi';
import { useApiStatus } from '@components/context/ApiStatusContext';

const WithAPICheck = <P extends object>(WrappedComponent: ComponentType<P>, apiUrl: any): ComponentType<P> => {
  return function (props: P) {
    const { apiStatus, setApiStatus } = useApiStatus();
    
    useEffect(() => {
      if (typeof window !== "undefined" && apiStatus === null) {
        const fetchData = async () => {
          if (apiStatus !== null) return;  // Avoid fetching if we already have a status
  
          try {
            const result = await checkAPI(apiUrl);
            setApiStatus(result);
          } catch (error) {
            console.error("Error fetching API status:", error);
            setApiStatus(false);
          }
        };
        fetchData();
      }
    }, [apiUrl, apiStatus, setApiStatus]);

    if (apiStatus === null) {
      return <div className='centered-content'>Loading...</div>;
    }

    if (!apiStatus) {
      return (
        <div className='centered-content centered-horizontal horizontal-padding max-width-2xl'>
          Error: Unable to connect to the API. So you know, API is such a boring word, we are just unable to work out something that should display the content.
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAPICheck;
