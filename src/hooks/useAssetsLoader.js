import { useState, useEffect } from 'react';

const useAssetsLoader = (assets) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await Promise.all(
          assets.map((asset) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = asset;
              img.onload = resolve;
              img.onerror = reject;
            })
          )
        );
        setLoading(false);
      } catch (error) {
        console.error('Error loading assets:', error);
        setLoading(false); // Update loading state even if there is an error
      }
    };

    loadAssets();
  }, [assets]);

  return loading;
};

export default useAssetsLoader;
