import { useState } from "react";

const useGeolocation = (defaultPosition = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  const getPosition = function () {
    if (!navigator.geolocation)
      return setError("Your browser doesn't support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };
  return { isLoading, position, error, getPosition };
};

export { useGeolocation };
