/**
 *
 * Initializer
 *
 */

import { useEffect, useRef } from "react";
import pluginId from "../../pluginId";

interface InitializerProps {
  setPlugin: (id: string) => void;
}

function Initializer({ setPlugin }: InitializerProps) {
  const ref = useRef(setPlugin);

  useEffect(() => {
    ref.current(pluginId);
  }, []);

  return null;
}

export default Initializer;
