import { useEffect, useRef } from 'react';

const useDidMountEffect = (func: () => any, deps: Array<any>) => {
  const didMount = useRef(false);

  console.log(didMount);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
