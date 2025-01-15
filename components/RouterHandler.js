import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RouterHandler = ({ setIsOpen }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false); // Fermer le menu lors du changement de route
    };

    // Ajouter un écouteur d'événement pour le changement de route
    router.events.on('routeChangeStart', handleRouteChange);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, setIsOpen]);

  return null;
};

export default RouterHandler;
